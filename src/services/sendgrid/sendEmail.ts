import sgMail from '@sendgrid/mail'
sgMail.setApiKey("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");
export function sendOTPOnMail(userEmailId: string, userName: string, OTP: string) {
    const msg = {
        to: [userEmailId],
        from: {
            name: "CCN",
            email: 'info@connectingcybernetworks.com'
        },
        subject: 'Your OTP for Verification',
        text: `${OTP} is you OTP for verification`,
        html: `<html><body>Hello ${userName},<br/>${OTP} is you OTP for verification<br/>From CCN</body></html>`,
    }

    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            // console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(JSON.stringify(error))
        })
}

export function sendRegistrationSuccessMail(userEmailId: string, userName: string, registartionId: string) {
    const msg = {
        to: [userEmailId],
        from: {
            name: "CCN-Team",
            email: 'info@connectingcybernetworks.com'
        },
        subject: 'Your registration is successful',
        text: `Your registration is successful with registration ID ${registartionId}`,
        html: `<html><body>Hello ${userName},<br/>Your registration is successful with registration ID ${registartionId}<br/>From CCN<br/><img src="https://www.connectingcybernetworks.com/images/logo%20try-01.png" alt="CCN Logo" width="200px" height="100px" /></body></html>`,
    }
    console.log(msg);


    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0])
            // console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(JSON.stringify(error))
        })
}

export function sendQueryEMail(userEmailId: string, userName: string, ticketId: string) {
    const msg = {
        to: [userEmailId],
        from: {
            name: "CCN-Team",
            email: 'info@connectingcybernetworks.com'
        },
        subject: 'We received your query',
        text: `We received your query, we raised ticket with no.  ${ticketId}`,
        html: `<html><body>Hello ${userName},<br/> We received your query, we raised ticket with no.  ${ticketId}<br/>We will contact you soon<br/>From CCN<br/><img src="https://www.connectingcybernetworks.com/images/logo%20try-01.png" alt="CCN Logo" width="200px" height="100px" /></body></html>`,
    }
    console.log(msg);


    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0])
            // console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(JSON.stringify(error))
        })
}
