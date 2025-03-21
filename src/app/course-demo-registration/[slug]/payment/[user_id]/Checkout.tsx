"use client";
import CoursePreviewPayment from '@/components/courses/CoursePreviewPayment'
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { aadharFinalResponse, APIResponse, CurrentStatusResponse } from '@/types/responses'
import { Button, Card, Container, TextField, Typography } from '@mui/material'
import { siteConfigs } from 'next.config';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
    slug: string,
    courseData: CourseDataType,
    userData: CurrentStatusResponse,
    userId: string
}

function Checkout({
    courseData,
    slug,
    userData,
    userId
}: Props) {
    const { settings, toggleLoading } = useContext(SettingContext)
    const router = useRouter()
    const [userGivenData, setUserGivenData] = useState<{
        name: string,
        email: string,
        phone: string,
        address: string,
        city: string,
        state: string,
        pincode: string
    }>()
    useEffect(() => {
        // console.log(userData);

        if (!userData) return
        const user_given_data = {
            name: userData.full_name,
            email: userData.email,
            phone: userData.phone,
            address: userData.address_line,
            city: userData.city,
            state: userData.state,
            pincode: userData.pin_code,
        }
        setUserGivenData(user_given_data)
    }, [userData])
    const [userAadharData, setUserAadharData] = useState<{
        identity: aadharFinalResponse["merchantProofOfIdentity"],
        address: aadharFinalResponse["merchantProofOfAddress"]
    }>()
    useEffect(() => {
        if (!userData) return
        const user_data_by_aadhar = {
            identity: JSON.parse(userData.aadhar_identity),
            address: JSON.parse(userData.aadhar_address)
        }
        setUserAadharData(user_data_by_aadhar)
    }, [userData])
    if (!userGivenData || !userAadharData) return <div>Loading...</div>


    async function handlePayment() {
        if(!userGivenData || !courseData) return
        toggleLoading(true)
        try {
            const response = await  fetch(`${siteConfigs.paths.createOrder()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userGivenData.name,
                    amount: courseData.demo_price,
                    mobileNumber: userGivenData.phone,
                    userId: userId,
                    courseId: courseData.course_id
                })
            })
            const result = await response.json() as APIResponse
            if(result.success) {
                router.push(result.data.url)
            }else{
                toast.error(result.message)
            }
        } catch (error) {
            console.log(error);
        }
        toggleLoading(false)
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: settings.screen == 'mobile' ? "50px" : "90px",
        }}>
            <Container>
                {
                    settings.screen !== "mobile" &&
                    <CoursePreviewPayment courseData={courseData} />
                }
                <Card style={{
                    minHeight: '50vh',
                    padding: '20px',
                }}>
                    <Typography variant="h6">User Details</Typography>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={userGivenData.name}
                            disabled
                            size='small'
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        gap: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            fullWidth
                            label="Email"
                            value={userGivenData.email}
                            disabled
                            size='small'
                        />
                        <TextField 
                            fullWidth
                            label="Phone"
                            value={userGivenData.phone}
                            disabled
                            size='small'
                        />
                    </div>
                    <Typography variant="h6">Address</Typography>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            fullWidth
                            label="Address"
                            value={userGivenData.address}
                            disabled
                            size='small'
                            multiline
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                        gap: '10px'
                    }}>
                        <TextField
                            fullWidth
                            label="City"
                            value={userGivenData.city}
                            disabled
                            size='small'
                        />
                        <TextField 
                            fullWidth
                            label="State"
                            value={userGivenData.state}
                            disabled
                            size='small'
                        />
                        <TextField 
                            fullWidth
                            label="Pincode"
                            value={userGivenData.pincode}
                            disabled
                            size='small'
                        />
                    </div>
                    <Typography variant="h6">Aadhar Details</Typography>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            fullWidth
                            label="Name as per Aadhar"
                            value={userAadharData.identity.name}
                            disabled
                            size='small'
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            fullWidth
                            label="Address as per Aadhar"
                            value={userAadharData.address.careOf + " " + userAadharData.address.house + " " + userAadharData.address.street + " " + userAadharData.address.landmark + " " + userAadharData.address.locality + " " + userAadharData.address.subDistrict + " " + userAadharData.address.district + " " + userAadharData.address.state + " " + userAadharData.address.country + " " + userAadharData.address.postOffice + " " + userAadharData.address.pincode}
                            disabled
                            multiline
                            size='small'
                        />
                    </div>
                    <Typography variant="h6">Payment Fee</Typography>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                        margin: '10px',
                        flexWrap: settings.screen == "mobile" ? 'wrap' : 'nowrap',
                    }}>
                        <TextField
                            label="Amount in ₹"
                            value={courseData.demo_price}
                            disabled
                            size='small'
                        />
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10px',
                    }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                marginTop: '20px',
                                width: 'min(100%, 200px)',
                            }}
                            onClick={handlePayment}
                        >
                            Pay ₹{courseData.demo_price}
                        </Button>

                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Checkout