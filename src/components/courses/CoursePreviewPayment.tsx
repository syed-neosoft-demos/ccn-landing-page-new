"use client";
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { Card, Typography } from '@mui/material'
import React, { useContext } from 'react'

type Props = {
    courseData: CourseDataType
}

function CoursePreviewPayment({ courseData }: Props) {
    const { settings } = useContext(SettingContext)
    return (
        <Card style={{
            overflow: "visible",
            margin: '5px',
            padding: '10px',
        }}>
            <div style={{
                display: settings.screen == "mobile" ? 'flex' : "grid",
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateColumns: '180px auto',
                flexDirection: settings.screen == "mobile" ? 'column' : 'row',
            }}>
                <div style={{
                    width: settings.screen == "mobile" ? '100%' : "160px",
                }}>
                    <img src={courseData.thumbnail} style={{
                        width: settings.screen == "mobile" ? '100%' : "160px",
                        height: 'auto',
                        borderRadius: '20px'
                    }} alt="" />
                    <h3 style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        fontSize: '1rem'
                    }}>Duration: {courseData.course_duration} days</h3>

                </div>
                <div style={{
                    margin: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png" style={{
                        width: "30px",
                        position: 'absolute',
                        top: '-30px',
                    }} alt="" />
                    <Typography variant="h6" style={{
                        // textAlign: 'center',
                    }}>{courseData.name}</Typography>

                    <p style={{
                        margin: '5px 0px',
                        textAlign: 'justify',
                        fontSize: '0.6rem'
                    }}>{courseData.description}</p>
                </div>
            </div>
        </Card>
    )
}

export default CoursePreviewPayment