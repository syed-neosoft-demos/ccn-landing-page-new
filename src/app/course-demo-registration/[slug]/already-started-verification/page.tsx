import Header from '@/layouts/main/Header'
import { CourseDataType } from '@/types/data-responses'
import { siteConfigs } from 'next.config'
import React from 'react'
import AlreadyStartedVerifier from './AlreadyStartedVerifier'
import Footer from '@/layouts/main/Footer'

type Props = {}

async function AlreadyStartedPage({
    params,
}: Readonly<{
    params: Promise<{ slug: string }>
}>) {

    const { slug } = await params
    const response = await fetch(`${siteConfigs.self}${siteConfigs.paths.getCourseData(slug)}`)
    const data = await response.json() as CourseDataType[]
    return (
        <div>
            <Header />
            <AlreadyStartedVerifier courseData={data[0]} />
            <Footer />
        </div>
    )
}

export default AlreadyStartedPage