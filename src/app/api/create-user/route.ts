import { AddDataToSheet } from '@/services/google-sheets/SheetHandler'
import {
    sendOTPOnMail,
    sendRegistrationSuccessMail,
} from '@/services/sendgrid/sendEmail'
import {
    sendOTPOnPhone,
    sendRegistrationSuccessMessage,
} from '@/services/twilio/sendOTPOnPhone'
import database from '@/sql/database'
import { generateOTP } from '@/utils/generate-otp'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

async function verifyPreviousData(email: string, phone: string) {
    const db = await database.getConnection()
    const query =
        'SELECT * FROM user_details WHERE (email = ? OR phone = ?) AND is_email_verified = 1 AND is_phone_verified = 1'
    const [user] = await db.execute(query, [email, phone])
    // console.log(user);
    if ((user as any).length > 0) {
        // console.log('User already exists with this email or phone number');
        db.release()
        return NextResponse.json(
            {
                success: false,
                message: 'User already exists with this email or phone number',
                data: user,
            },
            { status: 400 }
        )
    } else {
        // console.log('User does not exists with this email or phone number');

        const query = 'DELETE FROM user_details WHERE email = ? OR phone = ?'
        await db.execute(query, [email, phone])
        db.release()
        return false
    }
}
export async function POST(req: Request) {
    try {
        const EmailOTP = generateOTP()
        const PhoneOTP = generateOTP()
        const user_id = uuidv4()
        const {
            name,
            email,
            phone,
            address_line,
            country,
            state,
            city,
            pin_code,
            profile_photo,
            sourceUser,
        } = await req.json()
        const isUserExists = await verifyPreviousData(email, phone)
        if (isUserExists) {
            return isUserExists
        }
        AddDataToSheet('Users-sheet', {
            Name: name ?? 'not taken',
            Email: email.toLowerCase() ?? 'not taken',
            'Phone Number': phone.toString() ?? 'not taken',
            UserId: user_id ?? 'not taken',
            'Address Line': address_line ?? 'not taken',
            City: city ?? 'not taken',
            State: state ?? 'not taken',
            Pincode: pin_code ?? 'not taken',
            sourceUser: sourceUser ?? 'not taken',
        })
        const db = await database.getConnection()
        const query =
            'INSERT INTO user_details (user_id, full_name, email, phone, profile_photo, email_otp, phone_otp) VALUES (?, ?, ?, ?, ?, ?, ?)'
        const [user] = await db.execute(query, [
            user_id,
            name,
            email.toLowerCase(),
            phone,
            profile_photo,
            EmailOTP,
            PhoneOTP,
        ])
        // console.log(user);
        const address_id = uuidv4()
        const query2 =
            'INSERT INTO address_details (address_id ,user_id, address_line, country, state, city, pin_code) VALUES (?, ?, ?, ?, ?, ?, ?)'
        const [address] = await db.execute(query2, [
            address_id,
            user_id,
            address_line,
            country,
            state,
            city,
            pin_code,
        ])
        // sendOTPOnMail(email, name, EmailOTP.toString())
        // sendOTPOnPhone(phone, name, PhoneOTP.toString())
        const registration_id = uuidv4()
        try {
            const createRegistration = `INSERT INTO registration_details ( registration_id ,user_id, course_id, payment_id) VALUES (?,?,?,?)`
            const registrationValues = [
                registration_id,
                user_id,
                'd90c8f3f-8248-4fe6-923a-973dd6a102db',
                registration_id + '-payment',
            ]
            await db.query(createRegistration, registrationValues)
            const userFetchQuery =
                'SELECT * FROM user_details WHERE user_id = ?'
            const [user] = (await db.execute(userFetchQuery, [
                user_id,
            ])) as any[]
            // sendRegistrationSuccessMail(user[0].email, user[0].full_name, registration_id)
            sendRegistrationSuccessMessage(
                user[0].phone,
                user[0].full_name,
                registration_id
            )
        } catch (error) {
            console.log('error :>> ', error)
        }
        db.release()
        return NextResponse.json(
            {
                success: true,
                message: 'User created successfully',
                data: {
                    user_id: user_id,
                    name: name,
                    email: email,
                    phone: phone,
                },
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                success: false,
                data: error,
                message: 'Something went wrong',
            },
            { status: 500 }
        )
    }
}
