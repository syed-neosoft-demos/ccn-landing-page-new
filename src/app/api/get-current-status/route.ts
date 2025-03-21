import database from "@/sql/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId, courseId } = await req.json();
        if (!userId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'User id is required'
            }, { status: 400 })
        }
        if (!courseId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Course id is required'
            }, { status: 400 })
        }
        // console.log(userId);
        const db = await database.getConnection()
        const query = `SELECT * FROM user_details AS u 
            LEFT JOIN address_details AS a ON u.user_id = a.user_id 
            LEFT JOIN aadhar_details AS ad ON u.user_id = ad.user_id
            LEFT JOIN payment_details AS p ON u.user_id = p.user_id AND p.course_id =? AND p.status = 'COMPLETED'
            LEFT JOIN registration_details AS r ON u.user_id = r.user_id
            WHERE u.user_id = ? 
            `
        const [user] = await db.execute(query, [courseId, userId])
        // console.log(user);
        db.release()
        return NextResponse.json({
            success: true,
            message: 'User Data Fetched successfully',
            data: user
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

