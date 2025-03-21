"use client";
import { SettingContext } from '@/contexts/SettingContext';
import { CurrentStatusResponse } from '@/types/responses'
import { Button } from '@mui/material'
import { siteConfigs } from 'next.config'
import { usePathname, useRouter } from 'next/navigation'
import React, { use, useContext, useEffect } from 'react'

type Props = {
    courseSlug: string
}

function CourseProgressTopBarComponent({
    courseSlug
}: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const [progressStatus, setProgressStatus] = React.useState({
        personal: false,
        verification: false,
        payment: false,
        aadhaar: false,
    })
    const [currentStatus, setCurrentStatus] = React.useState<CurrentStatusResponse>()
    const [userId, setUserId] = React.useState<string>()
    const { settings, toggleLoading } = useContext(SettingContext)
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (!!userId) {
            setUserId(userId)
        }
    }, [])
    async function getProgressStatus() {
        if (!userId) return
        toggleLoading(true)
        try {

            const response = await fetch(`${siteConfigs.paths.getCurrentStatus()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, courseId: courseSlug })
            })
            const data = await response.json()
            // console.log(data)
            if (data.success) {
                const user = data.data[0] as CurrentStatusResponse
                setCurrentStatus(user)

                // console.log(user);
                // console.log({
                //     personal: !!user.full_name && !!user.email && !!user.phone,
                //     verification: !!user.is_email_verified && !!user.is_phone_verified,
                //     payment: !!user.payment_id,
                //     aadhaar: !!user.aadhar_id
                // });
                setProgressStatus({
                    personal: !!user.full_name && !!user.email && !!user.phone,
                    verification: !!user.is_email_verified && !!user.is_phone_verified,
                    payment: !!user.payment_id,
                    aadhaar: !!user.aadhar_id
                })
                if ((!user.email)) {
                    if (!pathname.includes('create-profile')) {
                        localStorage.removeItem('userId')
                        localStorage.removeItem('user-data')
                        router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.CREATE_PROFILE(courseSlug))
                    }
                    return
                }
                // else if (!user.aadhar_id) {
                //     if (!pathname.includes('aadhar-verification'))
                //         router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.AADHAR_VERIFICATION(courseSlug))
                //     return
                // }
                // else if (user.status != 'COMPLETED') {
                //     if (!pathname.includes('payment'))
                //         router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.PAYMENT(courseSlug, userId))
                //     return
                // }
                else if (!!user.email) {
                    router.push(siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.REGISTRATION_SUCCESS(courseSlug, userId))
                    return
                }
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            toggleLoading(false)
        }
    }
    useEffect(() => {
        // console.log("userId", userId);

        if (userId) {
            getProgressStatus()
        }
    }, [userId])
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={{
                border: '2px solid green',
                flexGrow: 1,
                borderRadius: '10px',
            }} />
            <div>
                <Button>
                    <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" style={{
                        width: settings.screen == "mobile" ? "15px" : "20px",
                        opacity: progressStatus.personal ? 1 : 0.5
                    }} alt="" />
                </Button>

            </div>
            <div style={{
                border: progressStatus.personal ? '2px solid green' : '0.2px solid #FFFFFF55',
                flexGrow: 1,
            }} />
            {/* <div>
                <Button disabled={!progressStatus.personal}>

                    <img src="https://cdn-icons-png.flaticon.com/512/912/912023.png" style={{
                        width: settings.screen == "mobile" ? "15px" : "20px",
                        opacity: progressStatus.personal ? 1 : 0.5
                    }} alt="" />
                </Button>
            </div>
            <div style={{
                border: progressStatus.verification ? '2px solid green' : '0.2px solid #FFFFFF55',
                flexGrow: 1,
            }} />
            <div>
                <Button disabled={!progressStatus.verification}>
                    <img src="https://cdn-icons-png.freepik.com/256/326/326975.png?semt=ais_hybrid" style={{
                        width: settings.screen == "mobile" ? "15px" : "20px",
                        opacity: progressStatus.verification ? 1 : 0.5
                    }} alt="" />
                </Button>
            </div>
            <div style={{
                border: progressStatus.aadhaar ? '2px solid green' : '0.2px solid #FFFFFF55',
                flexGrow: 1,
            }} />
            <div>
                <Button disabled={!progressStatus.aadhaar}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4108/4108843.png" style={{
                        width: settings.screen == "mobile" ? "15px" : "20px",
                        opacity: progressStatus.aadhaar ? 1 : 0.5
                    }} alt="" />
                </Button>
            </div> */}
            <div style={{
                border: progressStatus.payment ? '2px solid green' : '0.2px solid #FFFFFF55',
                flexGrow: 1,
            }} />
            <div>
                <Button disabled={!progressStatus.payment || !progressStatus.aadhaar || !progressStatus.verification || !progressStatus.personal}>

                    <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" style={{
                        width: settings.screen == "mobile" ? "15px" : "20px",
                        opacity: !(!progressStatus.payment || !progressStatus.aadhaar || !progressStatus.verification || !progressStatus.personal) ? 1 : 0.5
                    }} alt="" />
                </Button>
            </div>
            <div style={{
                border: '0.2px solid #FFFFFF55',
                flexGrow: 1,
            }} />
        </div>
    )
}

export default CourseProgressTopBarComponent