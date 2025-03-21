import database from "@/sql/database";
import { aadharResponse } from "@/types/responses";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const { aadharNumber } = await req.json()
        const response = await fetch(`https://developer.fidypay.com/ekyc/aadhar/generateOtp/${aadharNumber}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Basic QXNoaXNoOjMyMUZQQDc0MTI1OA==",
                "Client-Id": "B7S1wx2Jsdavc2pSinZZug==",
                "Client-Secret": "jKgwHrHWYsFv1UIJSM0fIZ1kLZg1q2e563bdyNB4FqY=",
                "accept": "*/*"
            }
        })
        const result = await response.json() as aadharResponse
        console.log(result);
        
        if (result.status.toLowerCase() == "success")
            return NextResponse.json({
                success: true,
                message: 'Aadhar OTP Send successfully',
                data: result
            }, {
                status: 200
            })
        else return NextResponse.json({
            success: false,
            data: null,
            message: 'Not able to send Aadhar OTP'
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

