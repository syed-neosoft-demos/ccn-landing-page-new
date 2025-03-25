'use client'
import { Button, Container, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useTheme } from '@mui/material/styles'

function BottomBranding() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <div
            style={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: 99999999,
                backgroundColor: '#2962FF',
            }}
        >
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    color: 'white',
                    borderRadius: '5px',
                    flexDirection: isMobile ? 'column' : 'row',
                }}
            >
                <Typography
                    variant="h6"
                    style={{
                        padding: '0.5rem',
                        textAlign: 'center',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <span
                        style={{
                            fontSize: '0.8rem',
                        }}
                    >
                        Only Limited Seats Available
                    </span>
                    <Typography
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            animation: 'blink 1s infinite',
                        }}
                    >
                        High Demand
                    </Typography>
                </Typography>

                {/* Added mobile number here */}
                <Typography
                    component="a" // Render as anchor tag
                    href="tel:+917738057188" // tel: URI with continuous number
                    style={{
                        fontWeight: 'bold',
                        margin: '0 1rem',
                        textDecoration: 'none', // Remove underline
                        color: 'inherit', // Inherit text color
                        cursor: 'pointer', // Show click cursor
                    }}
                >
                    Call: +91 77380 57188 {/* Display formatted number */}
                </Typography>

                <Button
                    size="small"
                    color="warning"
                    variant="contained"
                    style={{
                        width: '150px',
                        margin: '0.5rem 0',
                        padding: '0.5rem 0rem',
                        fontWeight: 'bolder',
                    }}
                >
                    <Link href="/course-demo-registration/create-profile/cyber-security-associate">
                        Register Now
                    </Link>
                </Button>
            </Container>
        </div>
    )
}

export default BottomBranding
