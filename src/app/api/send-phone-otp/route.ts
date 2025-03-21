import { sendOTPOnPhone } from "@/services/twilio/sendOTPOnPhone";
import database from "@/sql/database";
import { generateOTP } from "@/utils/generate-otp";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const phoneOTP = generateOTP()
        const { phone } = await req.json();
        // console.log(phone);

        sendOTPOnPhone(phone, phone, phoneOTP.toString())
        const db = await database.getConnection()
        const query = 'UPDATE TABLE user_details SET phone_otp = ? WHERE phone = ?'
        const [user] = await db.execute(query, [phoneOTP, phone])
        // console.log(user);

        db.release()
        return NextResponse.json({
            success: true,
            message: 'phone OTP Sent successfully',
            data: {
                phone: phone,
            }
        }, {
            status: 200
        })

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            data: error,
            message: 'Something went wrong'
        }, { status: 500 })
    }
}

