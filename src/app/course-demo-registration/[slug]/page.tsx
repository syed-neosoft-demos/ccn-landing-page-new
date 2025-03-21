import React from 'react'
import RegistrationInitialsPage from './RegistrationInitialsPage'
import { siteConfigs } from 'next.config'
import { CourseDataType } from '@/types/data-responses'


async function page({
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
          <RegistrationInitialsPage slug={slug} courseData={data[0]} />
      </div>
  )
}

export default page