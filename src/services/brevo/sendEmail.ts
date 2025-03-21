import * as brevo from '@getbrevo/brevo';
// import { siteConfigs } from 'next.config';
const siteConfigs = {
    brevoConfigs: {
        brevoAPIKey: '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',
        brevoSendingEmail: 'engineer.shiva6264@gmail.com'
    }
}
let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, siteConfigs.brevoConfigs.brevoAPIKey);

export function sendOTPOnMail(userEmailID: string, userName: string, OTP: string) {
    let sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { "name": "Connecting Cyber Networks", "email": siteConfigs.brevoConfigs.brevoSendingEmail };
    sendSmtpEmail.to = [
        { "email": userEmailID, "name": userName }
    ];
    sendSmtpEmail.subject = "Your verification OTP";
    sendSmtpEmail.htmlContent = "<html><body><h1>Your verification OTP</h1><p>Hi " + userName + ",</p><p>Your OTP is: " + OTP + "</p><p>Thank you for using CNN.</p></body></html>";
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function (error: any) {
        console.error(error);
    });
}


// export function sendWelcomeMail(userEmailID: string, userName: string) {
//     let sendSmtpEmail = new brevo.SendSmtpEmail();
//     sendSmtpEmail.sender = { "name": "Connecting Cyber Networks", "email": siteConfigs.brevoConfigs.brevoSendingEmail };
//     sendSmtpEmail.to = [
//         { "email": userEmailID, "name": userName }
//     ];
//     sendSmtpEmail.subject = "Welcome to CNN";
//     sendSmtpEmail.htmlContent = "<html><body><h1>Welcome to CNN</h1><p>Hi " + userName + ",</p><p>Thank you for joining us.</p><p>Thank you for using CNN.</p></body></html>";
//     apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
//         console.log('API called successfully. Returned data: ' + JSON.stringify(data));
//     }, function (error: any) {
//         console.error(error);
//     });
// }

// // sendWelcomeMail("pankajsinghat95@gmail.com", "Pankaj Singh");