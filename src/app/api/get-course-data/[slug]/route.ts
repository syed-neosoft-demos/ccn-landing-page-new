import database from "@/sql/database";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params

    try {
        const db = await database.getConnection()
        const query = 'SELECT * FROM course_details WHERE course_id = ? OR course_slug = ?'
        const [rows] = await db.execute(query, [slug, slug]) 
        db.release()
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}