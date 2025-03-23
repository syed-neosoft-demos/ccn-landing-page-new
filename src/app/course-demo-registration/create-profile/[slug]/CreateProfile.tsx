'use client'
import CoursePreviewPayment from '@/components/courses/CoursePreviewPayment'
import CourseProgressTopBarComponent from '@/components/courses/CourseProgress'
import ContentDialogBox from '@/components/mui/ContentDialogBox'
import { SettingContext } from '@/contexts/SettingContext'
import { uploadFileOnS3 } from '@/services/S3Storage/Upload'
import { CourseDataType } from '@/types/data-responses'
import {
    Button,
    Card,
    Container,
    Grid,
    TextField,
    Typography,
} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-toastify'
import OtpInput from 'react-otp-input'
import { siteConfigs } from 'next.config'
import { APIResponse, CreateUserData } from '@/types/responses'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG', 'SVG', 'HEIC']

type Props = {
    courseData: CourseDataType
}

function CreateProfile({ courseData }: Props) {
    const { settings, toggleLoading } = useContext(SettingContext)
    const [image, setImage] = React.useState<string | null>(null)
    const [isImageWindowOpen, setIsImageWindowOpen] = React.useState(true)
    const [formData, setFormData] = useState<{
        name: string
        email: string
        phone: string
        address_line: string
        country: string
        state: string
        city: string
        pin_code: string
    }>({
        name: '',
        email: 'not-taken',
        phone: '',
        address_line: 'not-taken',
        country: 'not-taken',
        state: 'not-taken',
        city: '',
        pin_code: 'not-taken',
    })
    const [formErrors, setFormErrors] = useState({
        name: false,
        phone: false,
        city: false,
    })
    const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false)
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const router = useRouter()

    const handleFileChange = async (file: File) => {
        toggleLoading(true)
        const extension = file.name.split('.').pop()
        const newName = `${Date.now()}`
        // console.log(file, extension, newName);
        if (!!file) {
            // console.log(file);
            try {
                const response = (await uploadFileOnS3(file, newName)) as {
                    location: string
                    bucket: string
                    key: string
                }
                // console.log(response);
                if (!!response.location) {
                    setImage(response.location)
                    setIsImageWindowOpen(false)
                    toast.info('Image uploaded successfully')
                }
            } catch (error) {
                console.log(error)
            }
        }
        toggleLoading(false)
    }
    function isInvalidValidForm() {
        let isInvalid = false
        for (const key in formData) {
            if (formData[key as keyof typeof formData] === '') {
                setFormErrors((preValue) => {
                    return {
                        ...preValue,
                        [key]: true,
                    }
                })
                isInvalid = true
            } else {
                setFormErrors((preValue) => {
                    return {
                        ...preValue,
                        [key]: false,
                    }
                })
            }
        }

        if (formData.phone.length !== 10) {
            toast.error('Invalid Phone Number')
            setFormErrors((preValue) => {
                return {
                    ...preValue,
                    phone: true,
                }
            })
            isInvalid = true
        }
        return isInvalid
    }
    async function handleSubmit() {
        toggleLoading(true)
        if (!isInvalidValidForm()) {
            if (!recaptchaToken) {
                toast.error('Please complete the reCAPTCHA verification')
                toggleLoading(false)
                return
            }

            try {
                const response = await fetch(
                    `${siteConfigs.paths.createUser()}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...formData,
                            profile_photo: image,
                            recaptcha_token: recaptchaToken,
                            sourceUser: localStorage.getItem('source_user'),
                        }),
                    }
                )
                const data = (await response.json()) as APIResponse
                // console.log(data);
                if (data.success) {
                    setIsDetailsSubmitted(true)
                    const response_user = data.data as CreateUserData
                    localStorage.setItem('userId', response_user.user_id)
                    localStorage.setItem(
                        'user-data',
                        JSON.stringify(response_user)
                    )
                    router.push(
                        siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.REGISTRATION_SUCCESS(
                            courseData.course_id,
                            response_user.user_id
                        )
                    )
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
        toggleLoading(false)
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
                marginTop: '90px',
                flexDirection: 'column',
            }}
        >
            {settings.screen !== 'mobile' && (
                <CoursePreviewPayment courseData={courseData} />
            )}
            <CourseProgressTopBarComponent courseSlug={courseData.course_id} />
            <Container>
                <br />
                <Card
                    style={{
                        padding: '20px',
                        borderRadius: '20px',
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '20px',
                    }}
                >
                    {/* <div style={{
                        margin: "10px 0",
                        width: "100%",
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        minHeight: "200px",
                    }}>
                        <p>
                            Upload Your Passport Size photo
                        </p>
                        {
                            isImageWindowOpen ?
                                <FileUploader multiple={false} handleChange={handleFileChange} name="file" types={fileTypes} style={{ width: "min(200px,90%)", }} classes="file_uploader" /> : image && <img onClick={() => {
                                    setIsImageWindowOpen(true)
                                }} src={image} alt="" style={{
                                    maxWidth: "200px",
                                }} />
                        }
                    </div> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                error={formErrors.name}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                required
                                error={formErrors.email}
                            />
                        </Grid> */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                paddingLeft: '16px',
                                gap: '10px',
                                width: '100%',
                                margin: '10px 0',
                            }}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    error={formErrors.phone}
                                />
                            </Grid>
                        </div>
                        {/* <Grid item xs={12}>
                            <TextField
                                label="Address Line"
                                name="address_line"
                                value={formData.address_line}
                                onChange={handleChange}
                                fullWidth
                                required
                                error={formErrors.address_line}
                            />
                        </Grid> */}
                        {/* <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            paddingLeft: '16px',
                            gap: '10px',
                            width: '100%',
                            margin: '10px 0'
                        }}>

                            <Grid item xs={12}>
                                <TextField
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    error={formErrors.country}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    error={formErrors.state}
                                />
                            </Grid>
                        </div> */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                paddingLeft: '16px',
                                gap: '10px',
                                width: '100%',
                            }}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    error={formErrors.city}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <TextField
                                    label="Pin Code"
                                    name="pin_code"
                                    value={formData.pin_code}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    error={formErrors.pin_code}
                                />
                            </Grid> */}
                        </div>
                        {/* Add reCAPTCHA component */}
                        <Grid item xs={12}>
                            <ReCAPTCHA
                                sitekey={
                                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                                }
                                onChange={(token) => setRecaptchaToken(token)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => {
                                    handleSubmit()
                                }}
                            >
                                Register for Demo
                            </Button>
                        </Grid>
                    </Grid>
                </Card>

                {/* <ContentDialogBox
                    isOpen={isDetailsSubmitted}
                    title="Details Submitted"
                    content={
                        <div>
                            <Typography style={{
                                color: 'green',
                            }}>
                                Your details have been submitted successfully.
                            </Typography>
                            <OTPVerificationComponent email={formData.email} phone={formData.phone} courseSlug={courseData.course_id} />
                        </div>
                    }
                    onClose={() => {

                    }}
                /> */}
            </Container>
        </div>
    )
}

function OTPVerificationComponent({
    email,
    phone,
    courseSlug,
}: {
    email: string
    phone: string
    courseSlug: string
}) {
    const [emailOTP, setEmailOTP] = React.useState('')
    const [phoneOTP, setPhoneOTP] = React.useState('')
    const [isEmailVerified, setIsEmailVerified] = React.useState(false)
    const [isPhoneVerified, setIsPhoneVerified] = React.useState(false)
    const { settings, toggleLoading } = useContext(SettingContext)
    const router = useRouter()
    async function verifyEmailOTP() {
        if (emailOTP.length !== 6) {
            toast.error('Invalid Email OTP')
            return
        }
        toggleLoading(true)
        try {
            const response = await fetch(
                `${siteConfigs.paths.verifyEmailOTP()}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        otp: emailOTP,
                    }),
                }
            )
            const data = (await response.json()) as APIResponse
            // console.log(data);
            if (data.success) {
                setIsEmailVerified(true)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
        toggleLoading(false)
    }
    async function verifyPhoneOTP() {
        if (phoneOTP.length !== 6) {
            toast.error('Invalid Phone OTP')
            return
        }
        toggleLoading(true)
        try {
            const response = await fetch(
                `${siteConfigs.paths.verifyPhoneOTP()}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phone,
                        otp: phoneOTP,
                    }),
                }
            )
            const data = (await response.json()) as APIResponse
            // console.log(data);
            if (data.success) {
                setIsPhoneVerified(true)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
        toggleLoading(false)
    }
    useEffect(() => {
        if (isEmailVerified && isPhoneVerified) {
            toast.success('Email and Phone Verified Successfully')
            router.push(
                `${siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.AADHAR_VERIFICATION(courseSlug)}`
            )
        }
    }, [isEmailVerified, isPhoneVerified])
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
            }}
        >
            {isEmailVerified ? (
                <>
                    <div
                        style={{
                            maxWidth: 'min(70%,200px)',
                        }}
                    >
                        <DotLottieReact
                            src="/animations/email-verification.lottie"
                            autoplay
                        />
                    </div>
                    <h4>Email Verified Successfully</h4>
                </>
            ) : (
                <>
                    <Typography
                        style={{
                            marginTop: '50px',
                        }}
                    >
                        Enter the OTP sent to your {email}
                    </Typography>
                    <OtpInput
                        value={emailOTP}
                        onChange={setEmailOTP}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            border: '1px solid #00000033',
                            padding: '10px 10px',
                            margin: '0 2px',
                            width: '40px',
                            borderRadius: '5px',
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            verifyEmailOTP()
                        }}
                    >
                        Verify Email
                    </Button>
                </>
            )}
            {isPhoneVerified ? (
                <>
                    <div
                        style={{
                            maxWidth: 'min(70%,200px)',
                        }}
                    >
                        <DotLottieReact
                            src="/animations/number-verified.lottie"
                            autoplay
                        />
                    </div>
                    <h4>Phone Verified Successfully</h4>
                </>
            ) : (
                <>
                    <Typography
                        style={{
                            marginTop: '50px',
                        }}
                    >
                        Enter the OTP sent to your {phone}
                    </Typography>
                    <OtpInput
                        value={phoneOTP}
                        onChange={setPhoneOTP}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            border: '1px solid #00000033',
                            padding: '10px 10px',
                            margin: '0 2px',
                            width: '40px',
                            borderRadius: '5px',
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            verifyPhoneOTP()
                        }}
                    >
                        Verify Phone
                    </Button>
                </>
            )}
            {isEmailVerified && isPhoneVerified && (
                <Button color="primary">Going to Next Section.....</Button>
            )}
        </div>
    )
}

export default CreateProfile
