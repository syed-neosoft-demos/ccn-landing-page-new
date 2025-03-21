import { aadharFinalResponse } from "@/types/responses"
import { siteConfigs } from "next.config"



export async function verifyOTP(otp: string, aadhaarNumber: string) {
    try {

        const response = await fetch(`${siteConfigs.self}/api/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp, aadhaarNumber }),
        })
        const data = await response.json() as aadharFinalResponse
        return data
    } catch (error) {
        return false
    }
}