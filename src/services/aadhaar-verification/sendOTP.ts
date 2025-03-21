import { siteConfigs } from "next.config"
import { fidypayAadharHeader } from "./aadharHeader"
import { aadharResponse } from "@/types/responses"



export async function sendAadharOTP(aadhaarNumber: string) {
    const response = await fetch(`${siteConfigs.self}/api/send-otp`, {
        method: 'POST',
        headers: fidypayAadharHeader,
        body: JSON.stringify({ aadhaarNumber }),
    })
    const data = await response.json() as aadharResponse
    return data
}