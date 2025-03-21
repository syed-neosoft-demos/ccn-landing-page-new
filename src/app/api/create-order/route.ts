import database from "@/sql/database";
import { siteConfigs } from "next.config";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import axios from "axios";

export async function POST(req: Request) {
    try {

        const { userId, courseId, name, amount, mobileNumber } = await req.json();
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
        if (!name) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Name is required'
            }, { status: 400 })
        }
        if (!amount) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Amount is required'
            }, { status: 400 })
        }
        if (!mobileNumber) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Mobile number is required'
            }, { status: 400 })
        }
        const orderId = uuidv4()
        const marchandUserId = uuidv4()
        // const db = await database.getConnection()

        const paymentPayload = {
            merchantId: siteConfigs.phonePeConfig.phonePE_MERCHANT_ID,
            merchantUserId: marchandUserId,
            mobileNumber: mobileNumber,
            amount: amount * 100,
            merchantTransactionId: orderId,
            redirectUrl: `${siteConfigs.phonePeConfig.phonePE_REDIRECT_URL}/?orderId=${orderId}&courseId=${courseId}&userId=${userId}`,
            redirectMode: 'POST',
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        }
        const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
        const keyIndex = 1
        const string = payload + '/pg/v1/pay' + siteConfigs.phonePeConfig.phonePE_API_KEY
        const sha256 = crypto.createHash('sha256').update(string).digest('hex')
        const checksum = sha256 + '###' + keyIndex
        const option = {
            method: 'POST',
            url: siteConfigs.phonePeConfig.phonePE_BASE_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payload
            }
        }
        // console.log("paymentPayload", paymentPayload);

        // console.log("option", option);

        try {

            const response = await axios.request(option);
            // console.log("response", response.data.data);
            const db = await database.getConnection()
            const insertQuery = `INSERT INTO payment_details (payment_id, user_id, course_id, amount, status) VALUES (?, ?, ?, ?, ?)`
            const insertValues = [orderId, userId, courseId, amount, 'initiated']
            await db.query(insertQuery, insertValues)
            db.release()

            return NextResponse.json({
                success: true,
                data: {
                    response: response.data,
                    url: response.data.data.instrumentResponse.redirectInfo.url
                },
                message: 'Payment initiated'
            }, { status: 200 })

        } catch (error) {
            console.log("error in payment", JSON.stringify(error))
            return NextResponse.json({
                success: false,
                data: error,
                message: 'Something went wrong'
            }, { status: 500 })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            data: error,
            message: 'Something went wrong'
        }, { status: 500 })
    }
}


