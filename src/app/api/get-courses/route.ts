import database from "@/sql/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await database.getConnection()
        const query = 'SELECT * FROM course_details'
        const [rows] = await db.execute(query)
        db.release()
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}
