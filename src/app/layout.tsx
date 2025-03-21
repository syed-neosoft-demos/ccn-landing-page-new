import type { Metadata } from 'next'
import './globals.css'
import ContextProviders from './providers'
import Head from 'next/head'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
    icons: [
        {
            href: 'favicon.ico',
            rel: 'icon',
            type: 'image/x-icon',
            url: 'favicon.ico',
        },
        {
            href: 'favicon.ico',
            rel: 'icon',
            type: 'image/png',
            url: 'favicon.ico',
        },
    ],
    title: 'Connecting Cyber Networks: The Best Ethical Hacking And Cyber Security Institute in Mumbai',
    description:
        'Enroll in job-guaranteed programs at Connecting Cyber Networks. Master IT skills in cybersecurity, networking, and more, with 100% placement assistance in Mumbai.',
    keywords:
        'job guaranteed programs, IT career programs, cybersecurity training, networking courses, 100% job placement, job guarantee courses Mumbai, IT training',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://cybersecurity.connectingcybernetworks.co.in',
        title: 'The Best Ethical Hacking And Cyber Security Institute in Mumbai',
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" data-lt-installed="true" cz-shortcut-listen="true">
            <head>
                <link rel="icon" href="https://www.connectingcybernetworks.com/images/CCN%20Fevicon.ico" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <GoogleAnalytics gaId="AW-472706553" />
                <GoogleTagManager gtmId="GTM-T6HDX25" />
            </head>
            <body>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6HDX25"
                    height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
                <ContextProviders>{children}</ContextProviders>
            </body >
        </html >
    )
}


/*

Add this code in head section of landing page:
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-472706553"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-472706553');
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T6HDX25');</script>
<!-- End Google Tag Manager -->

Add this code in the body section of landing pages:
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6HDX25"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->



*/