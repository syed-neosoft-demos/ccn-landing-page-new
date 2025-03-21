import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { Button, Card, Container, Typography } from '@mui/material'
import { siteConfigs } from 'next.config'
import Link from 'next/link'
import React, { useContext } from 'react'

type Props = {
    courseData: CourseDataType
}

function CourseDataComponent({ courseData }: Props) {
    const { settings } = useContext(SettingContext)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: "50px"
        }}>
            <Container>

                <Card style={{
                    padding: '20px',
                    borderRadius: '20px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: settings.screen === "desktop" ? 'nowrap' : "wrap",
                    }}>
                        <img src={courseData.thumbnail} style={{
                            width: 'min(100%, 400px)',
                            height: 'auto',
                            borderRadius: '20px'
                        }} alt="" />
                        <div style={{
                            margin: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                            <Typography variant="h4" style={{
                                // textAlign: 'center',
                                marginTop: '20px'
                            }}>{courseData.name}</Typography>

                            <p style={{
                                margin: '20px 0px'
                            }}>{courseData.description}</p>
                            <h3>Duration: {courseData.course_duration} days</h3>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end',
                        flexWrap: 'wrap'
                    }}>
                        <Button variant="contained" color="secondary" style={{
                            margin: '20px',
                            padding: '10px 50px',
                            borderRadius: '10px'
                        }}>
                            <Link href={`${siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.CREATE_PROFILE(courseData.course_slug)}`}>
                                Register for Demo
                            </Link>
                        </Button>
                        <Button color="secondary" style={{
                            margin: '20px'
                        }}  >

                            <Link href={`${siteConfigs.frontendPaths.COURSE_DEMO_REGISTRATION.ALREADY_STARTED(courseData.course_slug)}`}>

                                Start from where you left
                            </Link>
                        </Button>
                    </div>
                </Card>

            </Container>
        </div>
    )
}

export default CourseDataComponent