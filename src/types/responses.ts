export type aadharFinalResponse = {
    merchantReferenceNumber: string
    code: string
    merchantProofOfIdentity: {
        dob: string
        hashedEmail: string
        gender: string
        name: string
        mobileNumber: string
    }
    description: string
    merchantProofOfAddress: {
        careOf: string
        country: string
        district: string
        house: string
        landmark: string
        locality: string
        pincode: string
        postOffice: string
        state: string
        street: string
        subDistrict: string
        vtc: string
    }
    status: string
}


export type aadharResponse = {
    code: string
    description: string
    merchantTxnRefId: string
    status: string
}



export type createUserResponse = {
    code: string
    description: string
    status: string
    userId: string
}


export type APIResponse = {
    success: boolean
    message: string
    data: any
}


export type CreateUserData = {
    user_id: string
    name: string
    email: string
    phone: string
}



export type CurrentStatusResponse = {
    user_id: string
    full_name: string
    email: string
    phone: string
    profile_photo: string
    is_email_verified: number
    is_phone_verified: number
    email_otp: string
    phone_otp: string
    address_id: string
    address_line: string
    city: string
    pin_code: string
    state: string
    country: string
    created_at: string
    updated_at: string
    aadhar_id: string
    aadhar_identity: string
    aadhar_address: string
    payment_id: string
    order_id: string
    status: string
    payment_mode: string
    payment_object: string
    course_id: string
    registration_id: string
}


export type PhonePeSuccessResponse = {
    success: boolean
    data: {
        success: boolean
        code: string
        message: string
        data: {
            merchantId: string
            merchantTransactionId: string
            transactionId: string
            amount: number
            state: string
            responseCode: string
            paymentInstrument: {
                type: string
                cardType: string
                pgTransactionId: string
                bankTransactionId: any
                pgAuthorizationCode: any
                arn: string
                bankId: any
                brn: string
            }
        }
    }
    message: string
}
