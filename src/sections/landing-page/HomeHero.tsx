'use client'
import { SettingContext } from '@/contexts/SettingContext'
import { Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Link from 'next/link'
import React, { useContext } from 'react'
import PlacementPartners from './PlacementPartners'
import NetworkIllustration from '@/components/animations/Network'
import Laptop3DComponent from '@/components/3d-animations/Laptop'

function HomeHero() {
    const { settings } = useContext(SettingContext)
    return <Typography component={'div'} >
        {
            settings.screen !== 'mobile' && <div style={{
                position: 'absolute',
                top: '0%',
                right: '0',
                width: 'min(90%,900px)',
                height: 'min(90%,900px)',
                transform: "translate(20%,10%)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1
            }}>

                <Laptop3DComponent />
            </div>
        }

        <Container maxWidth="lg" style={{
            width: '100%',
            height: settings.screen !== "mobile" ? '95dvh' : "auto",
            overflow: 'hidden',
        }}>
            <Grid container style={{
                minHeight: settings.screen !== "mobile" ? '95dvh' : "40dvh",
            }}>
                <Grid size={{
                    xs: 12,
                    md: 6
                }} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                    zIndex: settings.screen === "mobile" ? -1 : 99999,
                    marginTop: settings.screen === "mobile" ? '150px' : 0,
                }}>

                    <Typography variant="h2" sx={{
                        fontWeight: 700,
                        fontSize: 'clamp(3.3rem, 8vw, 4rem)',
                    }}>
                        Want to become an Expert?
                    </Typography>
                    <Typography component="p" style={{
                        width: 'min(100%, 800px)',
                    }}>
                        Zero Job Offer During Campus Placement? Don't Worry! Join CCN to Get Placed Within 6 Months!
                    </Typography>
                    {/* <div style={{
                        display: 'flex',
                        justifyContent: settings.screen == "mobile" ? 'center' : "start",
                        alignItems: 'center',
                        width: '100%',

                    }}>

                        <img src="/images/illustrations/security-guard.png" alt="" />

                    </div> */}
                    {
                        settings.screen !== 'mobile' &&
                        <div style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '0%',

                            zIndex: -1,
                        }}>

                            <NetworkIllustration />
                        </div>
                    }
                </Grid>
                <Grid size={{
                    xs: 12,
                    md: 5,
                }} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: "visible",
                    zIndex: -1,
                }}>
                    {
                        settings.screen === 'mobile' &&
                        <div style={{
                            width: '100%',
                            height: '500px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Laptop3DComponent />
                        </div>
                    }
                </Grid>

            </Grid>

        </Container>

    </Typography>
}

export default HomeHero
