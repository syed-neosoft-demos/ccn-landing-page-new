
import { CourseDataType } from '@/types/data-responses';
import { siteConfigs } from 'next.config';
import React from 'react'
import Header from '@/layouts/main/Header';
import Footer from '@/layouts/main/Footer';
import { redirect } from 'next/navigation';
import { APIResponse, CurrentStatusResponse } from '@/types/responses';
import PaymentFailedComponent from './PaymentFailedComponent';


async function PaymentCheckoutPage({
    params,
}: Readonly<{
    params: Promise<{ slug: string, user_id: string }>
}>) {
    // console.log(await params);
    const { slug, user_id } = await params
    // console.log(slug)
    const response = await fetch(`${siteConfigs.self}${siteConfigs.paths.getCourseData(slug)}`)
    const data = await response.json() as CourseDataType[]
    // console.log(data)
    const user_response = await fetch(`${siteConfigs.self}${siteConfigs.paths.getCurrentStatus()}`, {
        method: 'POST',
        body: JSON.stringify({ userId: user_id, courseId: slug }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (user_response.status !== 200) {
        return redirect('/404')
    }
    const userData = await user_response.json() as APIResponse
    // console.log(userData);

    return (
        <div>
            <Header />
                <PaymentFailedComponent userId={user_id} courseId={slug} />
            <Footer />
        </div>
    )
}

export default PaymentCheckoutPage