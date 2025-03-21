"use client";
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { CurrentStatusResponse } from '@/types/responses'
import { Button, Card, Container, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useRouter } from 'next/navigation';
import { siteConfigs } from 'next.config';

type Props = {
    userData: CurrentStatusResponse
    courseData: CourseDataType,
}

function RecieptComponent({
    userData,
    courseData
}: Props) {
    const { settings } = useContext(SettingContext)
    const router = useRouter()
    function downloadReciept() {
        const invoice = document.getElementById('invoice')


        if (invoice) {
            const pdf = new jsPDF('p', 'px', 'a4');

            pdf.html(invoice, {
                html2canvas: {
                    scale: 0.7,
                },
                width: 700,

                callback: function (pdf) {
                    pdf.save('reciept.pdf');
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
                    boxShadow: '0 0 10px 0 #ccc',
                    color: "black",
                    backgroundColor: "white",
                }}>
                    <div id='invoice' style={{
                        width: 'min(100%, 700px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        color: "black",
                        backgroundColor: "white",
                    }} >
                        <div>
                            <h1 style={{
                                color: 'green',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                marginBottom: '20px',
                                textAlign: 'center',
                            }}>Reciept</h1>
                            <p style={{ marginBottom: '10px' }}><b>Name:</b> {userData.full_name}</p>
                            <p style={{ marginBottom: '10px' }}><b>Transaction ID:</b> {userData.payment_id}</p>
                            <p style={{ marginBottom: '10px' }}><b>Payment Status:</b> {userData.status}</p>
                            <p style={{ marginBottom: '10px' }}><b>Course Name:</b> {courseData.name}</p>
                            <p style={{ marginBottom: '10px' }}><b>Course Fee:</b> {courseData.demo_price}</p>
                            <p style={{ marginBottom: '10px' }}><b>Payment Mode:</b> {userData.payment_mode}</p>
                            <p style={{ marginBottom: '10px' }}><b>Payment Date:</b> {new Date().toLocaleDateString()}</p>
                            <img src="/logos/logo-white-bg.jpg" alt="" style={{
                                maxWidth: '150px',
                                marginTop: '60px',
                            }} />
                        </div>
                    </div>

                </Card>
                <div>

                    <Button onClick={downloadReciept} style={{
                        padding: '10px 20px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>Download Reciept</Button>
                    <Button variant='outlined' style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '5px',
                    }} onClick={() => {
                        router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.REGISTRATION(courseData.course_id, userData.user_id))
                    }}>View Registration</Button>
                </div>

            </Container>
        </div>
    )
}

export default RecieptComponent