'use client'

import Footer from '@/layouts/main/Footer'
import Header from '@/layouts/main/Header'
// import BlogsHero from '@/sections/landing-page/BlogsHero'
import ContactHero from '@/sections/landing-page/ContactHero'
// import CourseHero from '@/sections/landing-page/CourseHero'
import HomeHero from '@/sections/landing-page/HomeHero'
import PlacementHero from '@/sections/landing-page/PlacementHero'
// import ServicesHero from '@/sections/landing-page/Services'
import USPSectionHero from '@/sections/landing-page/USPSectionHero'
import BottomBranding from '@/sections/landing-page/BottomBranding'
import RecurringPopup from '@/sections/landing-page/RecurringPopup'
import Pricing from '@/sections/landing-page/Pricing'
import PlacementPartners from '@/sections/landing-page/PlacementPartners'
import RoadmapHero from '@/sections/landing-page/Roadmap'

export default function Home() {
    return (
        <>
            <BottomBranding />
            <Header />
            <HomeHero />
            <RecurringPopup />
            <Pricing />
            {/* <CourseHero /> */}
            {/* <ServicesHero /> */}
            <USPSectionHero />
            <RecurringPopup />
            <RoadmapHero />
            <PlacementHero />
            <PlacementPartners />
            <RecurringPopup />
            {/* <BlogsHero /> */}
            <ContactHero />
            <Footer />
        </>
    )
}
