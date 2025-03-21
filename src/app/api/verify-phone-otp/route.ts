import database from "@/sql/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { phone, otp } = await req.json();
        // console.log(phone, otp);

        const db = await database.getConnection()
        const query = 'SELECT * FROM user_details WHERE phone_otp = ? AND phone = ?'
        const [user] = await db.execute(query, [otp, phone])
        // console.log(user);
        if (!!user && (user as any[]).length > 0){

            const query2 = 'UPDATE user_details SET is_phone_verified = ? WHERE phone_otp = ? AND phone = ?;';
            const [user2] = await db.execute(query2, [1, otp, phone])
            db.release()
            return NextResponse.json({
                success: true,
                message: 'phone OTP verified successfully',
                data: user2
            }, {
                status: 200
            })
        }
        db.release()
        return NextResponse.json({
            success: false,
            message: "OTP Not Found",
            data: null
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

