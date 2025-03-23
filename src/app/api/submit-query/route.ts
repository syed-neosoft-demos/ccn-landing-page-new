import { AddDataToSheet } from '@/services/google-sheets/SheetHandler'
import { sendQueryEMail } from '@/services/sendgrid/sendEmail'
import database from '@/sql/database'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
    try {
        const { name, email, phone, query, sourceUser } = await req.json()
        if (!name) {
            return NextResponse.json(
                {
                    success: false,
                    data: null,
                    message: 'Name is required',
                },
                { status: 400 }
            )
        }
        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    data: null,
                    message: 'Email is required',
                },
                { status: 400 }
            )
        }
        if (!phone) {
            return NextResponse.json(
                {
                    success: false,
                    data: null,
                    message: 'Phone is required',
                },
                { status: 400 }
            )
        }
        if (!query) {
            return NextResponse.json(
                {
                    success: false,
                    data: null,
                    message: 'Query is required',
                },
                { status: 400 }
            )
        }
        const ticket_id = uuidv4()
        const db = await database.getConnection()
        const query_sql = `INSERT INTO query_details (ticket_id,name, email, phone, query) VALUES (?,?,?,?,?)`
        const [user] = await db.execute(query_sql, [
            ticket_id,
            name,
            email,
            phone,
            query,
        ])
        db.release()
        AddDataToSheet('Queries-sheet' as any, {
            Name: name,
            Email: email.toLowerCase(),
            'Phone Number': phone.toString(),
            TicketId: ticket_id,
            Query: query,
            sourceUser: sourceUser,
        })
        sendQueryEMail(email, name, ticket_id)
        return NextResponse.json(
            {
                success: true,
                message:
                    'Your query has been submitted successfully, we will get back to you soon',
                data: user,
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
                message: 'Not able to submit query',
            },
            { status: 500 }
        )
    }
}
