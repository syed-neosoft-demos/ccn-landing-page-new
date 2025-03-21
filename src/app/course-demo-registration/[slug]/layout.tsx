import type { Metadata } from 'next'
import RegistrationInitialsPage from './RegistrationInitialsPage'
import { CourseDataType } from '@/types/data-responses'
import { siteConfigs } from 'next.config'


export const metadata: Metadata = {
    title: 'Register for free demo of job-guaranteed programs at Connecting Cyber Networks',
    description:
        'Master IT skills in cybersecurity, networking, and more, with 100% placement assistance in Mumbai.',
    keywords:
        'job guaranteed programs, IT career programs, cybersecurity training, networking courses, 100% job placement, job guarantee courses Mumbai, IT training',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://cybersecurity.connectingcybernetworks.co.in',
        title: 'Register for free demo of job-guaranteed programs at Connecting Cyber Networks',
        description:
            'Enroll in job-guaranteed programs at Connecting Cyber Networks. Master IT skills in cybersecurity, networking, and more, with 100% placement assistance in Mumbai.',
        countryName: 'India',
        images: [
            {
                url: 'https://www.connectingcybernetworks.com/images/CCN%20Fevicon.png',
                width: 800,
                height: 600,
                alt: 'CCN',
            },
        ],
    },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    return (
        <div>
            {children}
        </div>
    )

}
