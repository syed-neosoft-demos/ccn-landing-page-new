import { siteConfigs } from 'next.config';
import twilio from 'twilio';
const twilioClient = twilio(siteConfigs.twilioConfigs.accountSid, siteConfigs.twilioConfigs.authToken);

export async function sendOTPOnPhone(phone: string, userName: string, OTP: string) {
    try {

        const response = await twilioClient.messages.create({
            messagingServiceSid: siteConfigs.twilioConfigs.messagingServiceSID,
            body: `Hi ${userName}, Your OTP is: ${OTP}. Thank you for using CNN.`,
            to: "+91" + phone,
        })
        console.log(response);
        return response

    } catch (error) {
        return false
    }
}




export async function sendRegistrationSuccessMessage(phone: string, userName: string, registrationId: string) {
    try {
        
        const response = await twilioClient.messages.create({
            messagingServiceSid: siteConfigs.twilioConfigs.messagingServiceSID,
            body: `Hi ${userName}, Your registration is successful with registration ID ${registrationId}. Thank you for using CCN.`,
            to: "+91" + phone,
        })
        console.log(response);
        return response
    } catch (error) {
        return false
    }
}