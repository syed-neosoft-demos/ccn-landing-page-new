import { AddDataToSheet } from "@/services/google-sheets/SheetHandler";
import { sendRegistrationSuccessMail } from "@/services/sendgrid/sendEmail";
import { sendRegistrationSuccessMessage } from "@/services/twilio/sendOTPOnPhone";
import database from "@/sql/database";
import { aadharFinalResponse, aadharResponse } from "@/types/responses";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const { user_id, OTP, merchantTxnRefId, aadharNumber } = await req.json()
        if (!user_id) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'User id is required'
            }, { status: 400 })
        }
        if (!OTP) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'OTP is required'
            }, { status: 400 })
        }
        if (!merchantTxnRefId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'merchantTxnRefId is required'
            }, { status: 400 })
        }
        if (!aadharNumber) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Aadhar number is required'
            }, { status: 400 })
        }

        const response = await fetch(`https://developer.fidypay.com/ekyc/aadhar/validateOtp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Basic QXNoaXNoOjMyMUZQQDc0MTI1OA==",
                "Client-Id": "B7S1wx2Jsdavc2pSinZZug==",
                "Client-Secret": "jKgwHrHWYsFv1UIJSM0fIZ1kLZg1q2e563bdyNB4FqY=",
                "accept": "*/*"
            },
            body: JSON.stringify({
                otp: OTP,
                merchantTxnRefId: merchantTxnRefId
            })
        })

        const result = await response.json() as aadharFinalResponse
        console.log(result);
        try {

            AddDataToSheet("Aadhar-sheet", {
                "Reference UserId": user_id,
                "Aadhar Number": aadharNumber,
                Name: result.merchantProofOfIdentity.name,
                "Date of Birth": result.merchantProofOfIdentity.dob,
                Address: result.merchantProofOfAddress.house + ' ' + result.merchantProofOfAddress.street + ' ' + result.merchantProofOfAddress.locality + ' ' + result.merchantProofOfAddress.landmark + ' ' + result.merchantProofOfAddress.vtc + ' ' + result.merchantProofOfAddress.postOffice + ' ' + result.merchantProofOfAddress.district + ' ' + result.merchantProofOfAddress.subDistrict + ' ' + result.merchantProofOfAddress.state + ' ' + result.merchantProofOfAddress.country + ' ' + result.merchantProofOfAddress.pincode,

            })
        } catch (error) {

        }
        if (result.status.toLowerCase() == "success") {
            const db = await database.getConnection()
            const query = 'INSERT INTO aadhar_details(aadhar_id,aadhar_identity,aadhar_address,user_id) VALUES(?,?,?,?)'
            const [rows] = await db.execute(query, [aadharNumber, JSON.stringify(result.merchantProofOfIdentity), JSON.stringify(result.merchantProofOfAddress), user_id])
            const registration_id = uuidv4()
            // bypassing payment for now
            const createRegistration = `INSERT INTO registration_details ( registration_id ,user_id, course_id, payment_id) VALUES (?,?,?,?)`
            const registrationValues = [registration_id, user_id, "d90c8f3f-8248-4fe6-923a-973dd6a102db", registration_id + "-payment"]
            await db.query(createRegistration, registrationValues)
            const userFetchQuery = 'SELECT * FROM user_details WHERE user_id = ?'
            const [user] = await db.execute(userFetchQuery, [user_id]) as any[]
            sendRegistrationSuccessMail(user[0].email, user[0].full_name, registration_id)
            sendRegistrationSuccessMessage(user[0].phone, user[0].full_name, registration_id)
            db.release()
            return NextResponse.json({
                success: true,
                message: 'Aadhar verified  successfully',
                data: result
            }, {
                status: 200
            })
        }
        else return NextResponse.json({
            success: false,
            data: null,
            message: 'Not able to verify aadhar OTP'
        }, { status: 400 })

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            data: error,
            message: 'Something went wrong'
        }, { status: 500 })
    }
}

