import { sendOTPOnMail } from "@/services/brevo/sendEmail";
import { sendOTPOnPhone } from "@/services/twilio/sendOTPOnPhone";
import database from "@/sql/database";
import { generateOTP } from "@/utils/generate-otp";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const EmailOTP = generateOTP()
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({
                success: false,
                message: 'Email is required',
            }, {
                status: 400
            })
        }
        // console.log(email);

        const db = await database.getConnection()
        const query = 'UPDATE user_details SET email_otp = ? WHERE email = ?'
        const [user] = await db.execute(query, [EmailOTP.toString(), email.toLowerCase()])
        // console.log(user);

        sendOTPOnMail(email, email.split("@")[0], EmailOTP.toString())
        db.release()
        return NextResponse.json({
            success: true,
            message: 'Email OTP Sent successfully',
            data: {
                email: email,
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

