"use client"
import { Button } from '@mui/material'
import { siteConfigs } from 'next.config'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    userId: string
    courseId: string
}

function PaymentFailedComponent({
    userId,
    courseId
}: Props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            width: '100vw',
            flexDirection: 'column'
        }}>
            <img src="/images/illustrations/payment-failed.jpg" alt="" style={{
                width: "min(100%, 400px)",
                height: 'auto'
            }} />
            <Button variant="contained" color="primary" onClick={() => redirect(`${siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.PAYMENT(courseId, userId)}`)} style={{
                width: "min(100%, 300px)",
            }}>Try Again</Button>
        </div>
    )
}

export default PaymentFailedComponent