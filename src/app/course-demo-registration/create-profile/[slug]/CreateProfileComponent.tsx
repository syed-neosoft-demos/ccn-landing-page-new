import Footer from '@/layouts/main/Footer'
import Header from '@/layouts/main/Header'
import { CourseDataType } from '@/types/data-responses'
import React from 'react'
import CreateProfile from './CreateProfile'


type Props = {
    slug: string,
    courseData: CourseDataType
}


function CreateProfileComponent({
    slug,
    courseData
}: Props) {
    return (
        <div>
            <Header />
            {/* <h1>{courseData.name}</h1> */}
            <CreateProfile courseData={courseData} />
            <Footer />
        </div>
    )
}

export default CreateProfileComponent