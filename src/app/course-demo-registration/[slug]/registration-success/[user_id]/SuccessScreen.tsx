"use client";
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { CurrentStatusResponse } from '@/types/responses'
import { Button, Card, Container, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { jsPDF } from "jspdf";
import { useRouter } from 'next/navigation';
import { siteConfigs } from 'next.config';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type Props = {
    userData: CurrentStatusResponse
    courseData: CourseDataType,
}

function SuccessScreen({
    userData,
    courseData
}: Props) {
    const { settings } = useContext(SettingContext)
    const router = useRouter()
    function downloadRegistrationDetails() {
        const registration = document.getElementById('registration')


        if (registration) {
            const pdf = new jsPDF('p', 'px', 'a4');

            pdf.html(registration, {
                html2canvas: {
                    scale: 0.6,
                },
                width: 700,

                callback: function (pdf) {
                    pdf.save('registration.pdf');
                }
            });
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: settings.screen == 'mobile' ? "50px" : "90px",
        }}>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '20px',
            }}>


               



                <Card style={{
                    padding: '20px',
                    marginBottom: '20px',
                    width: 'min(100%, 700px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px -10px #ccc',
                    // color: "black",
                    // backgroundColor: "white",
                }}>
                     <div
                    style={{
                        maxWidth: 'min(70%,300px)',
                    }}
                >
                    <DotLottieReact
                        src="/animations/registration-success.lottie"
                        autoplay
                    />
                </div>
                    <div id='registration' style={{
                        width: 'min(100%, 700px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        // color: "black",
                        // backgroundColor: "white",
                        padding: '20px',
                    }} >
                        <div>
                            <h1 style={{
                                color: 'green',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                marginBottom: '20px',
                                textAlign: 'center',
                            }}>Registration Success</h1>
                            <p style={{ marginBottom: '10px' }}><b>Name:</b> {userData.full_name}</p>
                            <p style={{ marginBottom: '10px' }}><b>Registration ID:</b> {userData.registration_id}</p>
                            <p style={{ marginBottom: '10px' }}><b>Course Details:</b> </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: settings.screen=="mobile"? "column":"row",
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px',
                                marginBottom: '20px',
                                gap: '20px',
                            }}>
                                {/* <img src="https://ccn-demo.s3.ap-south-1.amazonaws.com/course-images/cyber-security-associate.png" alt="" style={{
                                    maxWidth: settings.screen=="mobile"? "80%":"150px",
                                    maxHeight: '150px',
                                    borderRadius: '5px',
                                }} /> */}
                                <div>
                                    <p style={{ marginBottom: '10px', fontWeight: "bolder", fontSize: "20px" }}> {courseData.name}</p>
                                    <p style={{ marginBottom: '10px' }}> {courseData.description.split(".").slice(-2).join("")}</p>
                                </div>
                            </div>
                            <img src="https://ccn-demo.s3.ap-south-1.amazonaws.com/assets/logo-white-bg.jpg" alt="" style={{
                                maxWidth: '150px',
                                marginTop: '60px',
                                borderRadius: '5px',
                            }} />
                        </div>
                    </div>

                </Card>
                {/* <div>

                    <Button onClick={downloadRegistrationDetails} style={{
                        padding: '10px 20px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>Download Registration Details</Button>
                </div> */}

            </Container>
        </div>
    )

}

export default SuccessScreen