'use client'
import { Box, Button, Card, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SettingContext } from '@/contexts/SettingContext'
import Image from 'next/image'
import Link from 'next/link'


const features = [
    "100% Job Placement",
    "Career Consultation For Lifetime",
    "Practice on Real Time Devices",
    "Complete Guidance with Grooming Sessions for Employability",
    "Industrial Expert & Certified Faculty"
]

function CourseHero() {
    const { settings } = useContext(SettingContext)
    return <Typography component={'div'} style={{
        // minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5rem 0',
    }}>
        <Container
            sx={{
            }}
        >
            <Card sx={{
                // padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                // minHeight: '50vh',
                borderRadius: 2,
                boxShadow: "0px 0px 10px 10px rgba(00,100,100,0.5)",
                background: "url(/images/backgrounds/background1.png)",
                backgroundSize: 'cover',

            }}>

                <Box sx={{
                    padding: settings.screen !== "mobile" ? 4 : 0,
                    display: settings.screen !== "mobile" ? "grid" : 'flex',
                    gridTemplateColumns: '7fr 6fr',
                    flexDirection: 'column-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    // minHeight: '50vh',
                    borderRadius: 2,
                }}>

                    <Box sx={{
                        // backdropFilter: 'blur(10px)',
                        // padding: 4,
                        // borderRadius: 2,
                        // color: 'white',
                    }}>
                        {
                            settings.screen !== "mobile" && <>
                                <div style={{
                                    position: 'absolute',
                                    right: '40%',
                                    width: '150px',
                                    // filter: 'invert(1)',
                                }}>

                                    <img src="/images/illustrations/thinking.png" alt="" style={{
                                        // position: 'absolute',
                                        // right: '40%',
                                        width: '150px',
                                        filter: 'invert(1)',
                                    }} />
                                    <p style={{
                                        fontSize: '0.8rem',
                                        position: 'absolute',
                                        top: '40px',
                                        left: '20px',
                                        color: 'white',
                                        fontWeight: 'bolder',
                                    }}>
                                        How to become an expert?
                                    </p>
                                </div>

                                <img src="/images/illustrations/boy-with-laptop.svg" style={{
                                    width: '80%',
                                    height: '50%',
                                }} alt="" />
                            </>
                        }
                        <Button variant="contained" color="secondary" sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            textAlign: 'center',
                            margin: '2rem 0',
                            padding: '0.6rem 2rem',
                            borderRadius: 3
                        }}>
                            <Link href="/course-demo-registration/create-profile/cyber-security-associate">
                                Register for Demo
                            </Link>
                        </Button>
                    </Box>
                    <Box sx={{
                        backdropFilter: 'blur(10px)',
                        padding: 4,
                        borderRadius: 2,
                        color: 'white',
                    }}>
                        <Image src="/images/illustrations/cybersecurity.gif" alt='Cyber Security'
                            height={50}
                            width={50}
                            style={{
                                borderRadius: 5,
                            }}
                        />
                        <Typography variant="h1" sx={{
                            fontWeight: 'bold',
                            fontSize: '2.2rem',
                            // textAlign: 'center',
                        }}>
                            Learn Cyber Security
                        </Typography>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            margin: '2rem 0',
                            fontSize: '0.8rem',
                            // textAlign: 'center',
                        }}>
                            Our Job Guarantee Programs in cybersecurity offer you the skills and hands-on experience needed to secure a rewarding career. With expert-led training and real-world projects, we ensure you’re job-ready and equipped to tackle the challenges of the digital age. Join today and get the job you deserve!
                        </Typography>
                        <Box>
                            {
                                features.map((feature, index) => (
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        margin: '1rem 0',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: '50%',
                                            background: 'white',
                                            color: 'black',
                                            marginRight: '1rem',
                                        }}>
                                            {index + 1}
                                        </Box>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 'bold',
                                            fontSize: '0.8rem',
                                        }}>
                                            {feature}
                                        </Typography>
                                    </Box>
                                ))
                            }



                        </Box>

                    </Box>

                </Box>

            </Card>

        </Container>




    </Typography>
}

export default CourseHero
