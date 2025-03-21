"use client";
import CoursePreviewPayment from '@/components/courses/CoursePreviewPayment';
import CourseProgressTopBarComponent from '@/components/courses/CourseProgress';
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { aadharResponse } from '@/types/responses';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material'
import { siteConfigs } from 'next.config';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';


type Props = {
    courseData: CourseDataType
}

function AadharVerification({
    courseData
}: Props) {
    const { settings, toggleLoading } = useContext(SettingContext)
    const [isDetailsSubmitted, setIsDetailsSubmitted] = useState(false);
    const [aadharNumber, setAadharNumber] = useState("")
    const [aadharOTP, setAadharOTP] = useState("")
    const [isAdharOTPSent, setIsAdharOTPSent] = useState(false)
    const [isAadharVerified, setIsAadharVerified] = useState(false)
    const [aadharOTPResponse, setAadharOTPResponse] = useState<aadharResponse>()
    const [userId, setUserId] = useState<string>()
    const [isValidAadhar, setIsValidAadhar] = useState(true)
    const [isReSendOTPRequired, setIsReSendOTPRequired] = useState(false)
    const router = useRouter()
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (!!userId) {
            setUserId(userId)
        }
    }, [])
    async function sendOTP() {
        if (!userId) {
            toast.error("User not found")
            return
        }
        if (aadharNumber.length != 12) {
            setIsValidAadhar(false)
            toast.error("Please enter a valid aadhar number")
            return
        }
        toggleLoading(true)
        try {
            const response = await fetch(`${siteConfigs.paths.sendAadharOTP()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ aadharNumber })
            })
            const data = await response.json()
            // console.log(data)
            if (data.success) {
                toast.success(data.message)
                setIsAdharOTPSent(true)
                setAadharOTPResponse(data.data)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
        toggleLoading(false)
    }
    async function verifyOTP() {
        if (!userId) {
            toast.error("User not found")
            return
        }
        if (aadharOTP.length != 6 || !aadharOTPResponse) {
            toast.error("Please enter a valid OTP")
            return
        }
        toggleLoading(true)
        try {

            const response = await fetch(`${siteConfigs.paths.verifyAadharOTP()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: localStorage.getItem('userId'),
                    OTP: aadharOTP,
                    merchantTxnRefId: aadharOTPResponse.merchantTxnRefId,
                    aadharNumber
                })
            })
            const data = await response.json()
            // console.log(data)
            if (data.success) {
                toast.success(data.message)
                setIsAadharVerified(true)
                setTimeout(() => {
                    router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.REGISTRATION_SUCCESS(courseData.course_id, userId))
                }, 2000)
            } else {
                toast.error(data.message)
                setTimeout(() => {
                    setIsReSendOTPRequired(true)
                }, 30000)

            }
        } catch (error) {
            toast.error("Something went wrong")
            setIsReSendOTPRequired(true)
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
                        isAadharVerified ? <>

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
                                Aadhar Verified Successfully
                            </h2>



                        </> : <>


                            <Typography variant="h5">Aadhar Verification</Typography>
                            <Image src="/images/aadhar-icon.svg" style={{
                                width: "min(300px, 100%)",
                                // position: 'absolute',
                                // top: '-30px',
                            }} alt="" height={100} width={100} />
                            <TextField
                                label="Aadhar Number (12 digit)"
                                type='number'
                                variant="outlined"
                                value={aadharNumber}
                                onChange={(e) => setAadharNumber(e.target.value)}
                                style={{
                                    margin: '20px 10px',
                                    width: '100%'
                                }}
                                required
                                error={!isValidAadhar}
                            />
                            <p style={{
                                color: 'gray',
                                fontSize: '12px',
                                textAlign: 'center'
                            }}>
                                After an OTP is sent to your registered mobile number, resend will be available after 30 seconds.
                            </p>
                            {
                                isAdharOTPSent ?
                                    <TextField
                                        type='number'
                                        label="Aadhar OTP"
                                        variant="outlined"
                                        value={aadharOTP}
                                        onChange={(e) => setAadharOTP(e.target.value)}
                                        style={{
                                            margin: '10px',
                                            width: '100%'
                                        }}
                                    /> : null
                            }
                            {
                                isAdharOTPSent ?
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
                            {
                                isAdharOTPSent && isReSendOTPRequired && !isAadharVerified &&
                                <Button
                                    variant="contained"
                                    color='warning'
                                    onClick={sendOTP}
                                    style={{
                                        margin: '10px',
                                        width: '100%'
                                    }}
                                >Resend OTP</Button>

                            }
                        </>
                    }

                </Card>




            </Container>

        </div>
    )
}


export default AadharVerification