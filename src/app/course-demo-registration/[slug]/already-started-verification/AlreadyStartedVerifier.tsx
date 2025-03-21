"use client";
import CoursePreviewPayment from '@/components/courses/CoursePreviewPayment';
import CourseProgressTopBarComponent from '@/components/courses/CourseProgress';
import { SettingContext } from '@/contexts/SettingContext';
import { CourseDataType } from '@/types/data-responses';
import { APIResponse } from '@/types/responses';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button, Card, Container, TextField, Typography } from '@mui/material';
import { siteConfigs } from 'next.config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
    courseData: CourseDataType
}

function AlreadyStartedVerifier({
    courseData
}: Props) {
    const [email, setEmail] = React.useState("")
    const [emailOTP, setEmailOTP] = React.useState("")
    const [isEmailSent, setIsEmailSent] = React.useState(false)
    const [isEmailVerified, setIsEmailVerified] = React.useState(false)
    const [isEmailError, setIsEmailError] = React.useState(false)
    const { settings, toggleLoading } = useContext(SettingContext)
    const [userId, setUserId] = useState<string>()
    const router = useRouter()
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (!!userId) {
            setUserId(userId)
        }
    }, [])
    async function sendOTP() {
        if (!email.includes('@') || !email.includes('.')) {
            setIsEmailError(true)
            toast.error("Please enter a valid Email")
            return
        }
        toggleLoading(true)
        try {

            const response = await fetch(`${siteConfigs.paths.sendEmailOTP()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    user_id: userId
                })
            })
            const data = await response.json()
            // console.log(data)
            if (data.success) {
                toast.success(data.message)
                setIsEmailSent(true)
            } else {
                toast.error("Email not found")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        toggleLoading(false)
    }
    async function verifyOTP() {
        if (emailOTP.length != 6) {
            toast.error("Please enter a valid OTP")
            return
        }
        toggleLoading(true)
        try {
            const response = await fetch(`${siteConfigs.paths.verifyEmailOTP()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: localStorage.getItem('userId'),
                    otp: emailOTP,
                    email: email
                })
            })
            const data = await response.json() as APIResponse
            // console.log(data)
            if (data.success) {
                toast.success(data.message)
                const userData = data.data[0] as {
                    email: string
                    user_id: string
                }
                if (userData.email !== email) {
                    localStorage.setItem('userId', userData.user_id)
                }
                setIsEmailVerified(true)
                setTimeout(() => {
                    router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.AADHAR_VERIFICATION(courseData.course_id))
                }, 2000)
            } else {
                toast.error("OTP not found")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
        toggleLoading(false)
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: settings.screen == 'mobile' ? "35px" : "90px",
            flexDirection: 'column',
        }}>
            {
                settings.screen !== "mobile" &&
                <CoursePreviewPayment courseData={courseData} />
            }
            <CourseProgressTopBarComponent courseSlug={courseData.course_id} />
            <Container style={{
                minHeight: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Card style={{
                    padding: '20px',
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: settings.screen == "mobile" ? '100%' : '50%',

                }}>

                    {
                        isEmailVerified ? <>

                            <div
                                style={{
                                    maxWidth: 'min(100%,300px)',
                                }}
                            >
                                <DotLottieReact
                                    src="/animations/id-verified.lottie"
                                    autoplay
                                />
                            </div>
                            <h2 style={{
                                color: "#2962FF",
                                margin: '20px'
                            }}>
                                Email Verified Successfully
                            </h2>



                        </> : <>


                            <Typography variant="h5">Email Verification</Typography>
                            <Image src="https://cdn-icons-png.flaticon.com/512/3617/3617161.png" style={{
                                width: "min(100px, 100%)",
                                // position: 'absolute',
                                // top: '-30px',
                            }} alt="" height={100} width={100} />
                            <TextField
                                label="Email address"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    margin: '20px 10px',
                                    width: '100%'
                                }}
                                required
                                error={isEmailError}
                            />
                            {
                                isEmailSent ?
                                    <TextField
                                        type='number'
                                        label="Email OTP"
                                        variant="outlined"
                                        value={emailOTP}
                                        onChange={(e) => setEmailOTP(e.target.value)}
                                        style={{
                                            margin: '10px',
                                            width: '100%'
                                        }}
                                    /> : null
                            }
                            {
                                isEmailSent ?
                                    <Button
                                        variant="contained"
                                        onClick={verifyOTP}
                                        style={{
                                            margin: '10px',
                                            width: '100%'
                                        }}
                                    >Verify OTP</Button> :
                                    <Button
                                        variant="contained"
                                        onClick={sendOTP}
                                        style={{
                                            margin: '10px',
                                            width: '100%'
                                        }}
                                    >Send OTP</Button>
                            }

                        </>
                    }

                </Card>




            </Container>

        </div>
    )
}

export default AlreadyStartedVerifier