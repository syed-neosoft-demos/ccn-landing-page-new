import { CourseDataType } from "@/types/data-responses"
import { siteConfigs } from "next.config"
import CreateProfileComponent from "./CreateProfileComponent"


export default async function CreateProfilePage({
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
            <CreateProfileComponent slug={slug} courseData={data[0]} />
        </div>
    )
}
