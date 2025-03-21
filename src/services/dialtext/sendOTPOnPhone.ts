// import { siteConfigs } from 'next.config';
// import twilio from 'twilio';
// const twilioClient = twilio(siteConfigs.twilioConfigs.accountSid, siteConfigs.twilioConfigs.authToken);

// export async function sendOTPOnPhone(phone: string, userName: string, OTP: string) {
//     try {

//         const response = await twilioClient.messages.create({
//             messagingServiceSid: siteConfigs.twilioConfigs.messagingServiceSID,
//             body: `Hi ${userName}, Your OTP is: ${OTP}. Thank you for using CNN.`,
//             to: "+91" + phone,
//         })
//         console.log(response);
//         return response

//     } catch (error) {
//         return false
//     }
// }



export async function sendOTPOnPhone(phone: string, userName: string, OTP: string) {
    try {
        const response = await fetch(`https://dtsms.dialtext.com/app/smsapi/index.php?key=265605C879E6C0&campaign=12205&routeid=101813&type=text&contacts=${phone}&senderid=CCNMUM&msg=${OTP} OTP is your CCN login verification code Connecting Cyber Networks&template_id=1707170107954797040&pe_id=1701169924807146527`)
        console.log(response);
        return response
    } catch (error) {
        return false
    }
}