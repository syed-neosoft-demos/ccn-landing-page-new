import database from "@/sql/database";
import { siteConfigs } from "next.config";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';
import axios from "axios";
import { PhonePeSuccessResponse } from "@/types/responses";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {

        const reqUrl = req.url
        const { searchParams } = new URL(reqUrl)
        const orderId = searchParams.get('orderId')
        const courseId = searchParams.get('courseId')
        const userId = searchParams.get('userId')
        // console.log('orderId', orderId, courseId, userId);
        if (!orderId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Order id is required'
            }, { status: 400 })
        }
        if (!courseId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'Course id is required'
            }, { status: 400 })
        }
        if (!userId) {
            return NextResponse.json({
                success: false,
                data: null,
                message: 'User id is required'
            }, { status: 400 })
        }
        const keyIndex = 1
        const string = `/pg/v1/status/${siteConfigs.phonePeConfig.phonePE_MERCHANT_ID}/${orderId}` + siteConfigs.phonePeConfig.phonePE_API_KEY
        const sha256 = crypto.createHash('sha256').update(string).digest('hex')
        const checksum = sha256 + '###' + keyIndex

        const option = {
            method: 'GET',
            url: `${siteConfigs.phonePeConfig.phonePE_STATUS_URL}/${siteConfigs.phonePeConfig.phonePE_MERCHANT_ID}/${orderId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': siteConfigs.phonePeConfig.phonePE_MERCHANT_ID
            },
        }
        try {
            const response = await axios.request(option);
            console.log("response", response.data);
            const responseData = response.data as PhonePeSuccessResponse
            const db = await database.getConnection()
            const updateQuery = `UPDATE payment_details SET status = ? ,payment_mode =?, payment_object=? WHERE payment_id = ?`
            const updateValues = ["COMPLETED", 'phonePe', JSON.stringify(responseData.data), orderId]
            await db.query(updateQuery, updateValues)
            const registration_id = uuidv4()
            const createRegistration = `INSERT INTO registration_details ( registration_id ,user_id, course_id, payment_id) VALUES (?,?,?,?)`
            const registrationValues = [registration_id, userId, courseId, orderId]
            await db.query(createRegistration, registrationValues)
            db.release()
            return NextResponse.redirect(siteConfigs.self + siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.PAYMENT_SUCCESS(courseId, userId), { status: 301 })
        } catch (error) {
            console.log(error);
            return NextResponse.redirect(siteConfigs.self + siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.PAYMENT_FAILED(courseId, userId), { status: 301 })
        }
    } catch (error) {
        console.log(error);
        const reqUrl = req.url
        const { searchParams } = new URL(reqUrl)
        const orderId = searchParams.get('orderId')
        const courseId = searchParams.get('courseId')
        const userId = searchParams.get('userId')
        return NextResponse.redirect(siteConfigs.self + siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.PAYMENT_FAILED(courseId as string, userId as string), { status: 301 })
    }
}


