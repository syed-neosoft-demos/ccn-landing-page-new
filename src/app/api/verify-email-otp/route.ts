import database from "@/sql/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, otp } = await req.json();
        // console.log(email);
        if (!email) {
            return NextResponse.json({
                success: false,
                message: 'Email is required',
            }, {
                status: 400
            })
        }
        if (!otp) {
            return NextResponse.json({
                success: false,
                message: 'OTP is required',
            }, {
                status: 400
            })
        }
        const db = await database.getConnection()
        const query = 'SELECT * FROM user_details WHERE email_otp = ? AND email = ?'
        const [user] = await db.execute(query, [otp, email])
        // console.log(user);
        if (!!user && (user as any[]).length > 0) {

            const query2 = 'UPDATE user_details SET is_email_verified = ? WHERE email_otp = ? AND email = ?;';
            const [user2] = await db.execute(query2, [1, otp, email])

            db.release()
            return NextResponse.json({
                success: true,
                message: 'Email OTP Sent successfully',
                data: user
            }, {
                status: 200
            })
        }
        db.release()
        return NextResponse.json({
            success: false,
            message: "OTP Not Found",
            data: user
        }, {
            status: 404
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

