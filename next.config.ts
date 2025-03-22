import type { NextConfig } from 'next'
const isDevelopment = process.env.NODE_ENV === 'development'
export const siteConfigs = {
    self: isDevelopment
        ? 'http://localhost:7000'
        : 'https://cybersecurity.connectingcybernetworks.co.in',
    paths: {
        getCourseData: (slug: string) => '/api/get-course-data/' + slug,
        getCourses: () => `/api/get-courses`,
        createUser: () => `/api//create-user`,
        sendEmailOTP: () => `/api/send-email-otp`,
        verifyEmailOTP: () => `/api/verify-email-otp`,
        sendPhoneOTP: () => `/api/send-phone-otp`,
        verifyPhoneOTP: () => `/api/verify-phone-otp`,
        sendAadharOTP: () => `/api/send-aadhar-otp`,
        verifyAadharOTP: () => `/api/verify-aadhar-otp`,
        getCurrentStatus: () => `/api/get-current-status`,
        createOrder: () => `/api/create-order`,
    },
    frontendPaths: {
        ROOT: () => '/',
        COURSE_DEMO_REGISTRATION: {
            ROOT: (slug: string) => '/course-demo-registration/' + slug,
            AADHAR_VERIFICATION: (slug: string) =>
                '/course-demo-registration/aadhar-verification/' + slug,
            CREATE_PROFILE: (slug: string) =>
                '/course-demo-registration/create-profile/' + slug,
            PAYMENT: (slug: string, user_id: string) =>
                '/course-demo-registration/' + slug + '/payment/' + user_id,
            PAYMENT_SUCCESS: (slug: string, user_id: string) =>
                '/course-demo-registration/' +
                slug +
                '/payment-success/' +
                user_id,
            PAYMENT_FAILED: (slug: string, user_id: string) =>
                '/course-demo-registration/' +
                slug +
                '/payment-failed/' +
                user_id,
            REGISTRATION: (slug: string, user_id: string) =>
                '/course-demo-registration/' +
                slug +
                '/registration/' +
                user_id,
            ALREADY_STARTED: (slug: string) =>
                '/course-demo-registration/' +
                slug +
                '/already-started-verification',
            REGISTRATION_SUCCESS: (slug: string, user_id: string) =>
                '/course-demo-registration/' +
                slug +
                '/registration-success/' +
                user_id,
        },
    },

    databaseConfig: {
        MYSQL_HOST: process.env.MYSQL_HOST as string,
        MYSQL_USER: process.env.MYSQL_USERNAME as string,
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD as string,
        MYSQL_DATABASE: process.env.MYSQL_DATABASE as string,
        MYSQL_PORT: parseInt(process.env.MYSQL_PORT as string),
    },
    s3Config: {
        bucketName: process.env.AWS_BUCKET_NAME as string,
        region: process.env.AWS_REGION as string,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
        dirName: process.env.AWS_DIR_NAME as string,
    },
    twilioConfigs: {
        accountSid: process.env.TWILIO_ACCOUNT_SID as string,
        authToken: process.env.TWILIO_AUTH_TOKEN as string,
        messagingServiceSID: process.env.TWILIO_MESSAGING_SERVICE_SID as string,
    },
    fidypayAadharHeader: {
        fidypayURL: process.env.FIDYPAY_URL as string,
        fidypayClientID: process.env.FIDYPAY_CLIENT_ID as string,
        fidypayClientSecret: process.env.FIDYPAY_CLIENT_SECRET as string,
        fidypayAuthorization: process.env.FIDYPAY_AUTHORIZATION as string,
    },
    brevoConfigs: {
        brevoAPIKey: process.env.BREVO_API_KEY as string,
        brevoSendingEmail: process.env.BREVO_SENDING_EMAIL as string,
    },
    phonePeConfig: {
        phonePE_API_KEY: process.env.PHONEPE_API_KEY as string,
        phonePE_MERCHANT_ID: process.env.PHONEPE_MERCHANT_ID as string,
        phonePE_REDIRECT_URL: process.env.PHONEPE_REDIRECT_URL as string,
        phonePE_BASE_URL: process.env.PHONEPE_BASE_URL as string,
        phonePE_STATUS_URL: process.env.PHONEPE_STATUS_URL as string,
    },
}
// console.log(siteConfigs);

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    env: {
        bucketName: process.env.AWS_BUCKET_NAME as string,
        region: process.env.AWS_REGION as string,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
        dirName: process.env.AWS_DIR_NAME as string,
    },
}

export default nextConfig
