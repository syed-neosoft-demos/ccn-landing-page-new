import { CourseDataType } from '@/types/data-responses'
import { siteConfigs } from 'next.config'
import React from 'react'
import AadharVerification from './AadharVerification'
import Header from '@/layouts/main/Header'
import Footer from '@/layouts/main/Footer'

async function AadharVerificationPage({
    params,
}: Readonly<{
    params: Promise<{ slug: string }>
}>) {
    const { slug } = await params
    // console.log(slug)
    const response = await fetch(`${siteConfigs.self}${siteConfigs.paths.getCourseData(slug)}`)
    const data = await response.json() as CourseDataType[]
    // console.log(data)
    return (
        <div>
            <Header />
            <AadharVerification courseData={data[0]} />
            <Footer />
        </div>
    )
}

export default AadharVerificationPage