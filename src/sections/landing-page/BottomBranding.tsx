"use client";
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'

type Props = {}

function BottomBranding({ }: Props) {
    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            zIndex: 99999999,
            backgroundColor: '#2962FF',
        }}>
            <Container style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                color: 'white',
                borderRadius: '5px',
            }}>

                <Typography variant="h6" style={{
                    padding: '0.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <span style={{
                        fontSize: '0.8rem',
                    }}>
                        Only Limited Seats Available
                    </span>
                    <Typography style={{
                        color: 'red',
                        fontWeight: 'bold',
                        animation: 'blink 1s infinite',
                    }}>

                        High Demand
                    </Typography>
                </Typography>
                <Button size='small' color='warning' variant='contained' style={{
                    width: '150px',
                    margin: '0.5rem 0',
                    padding: '0.5rem 0rem',
                    fontWeight: 'bolder',
                }}><Link href="/course-demo-registration/create-profile/cyber-security-associate">

                        Register Now
                    </Link>
                </Button>
            </Container>
        </div>
    )
}

export default BottomBranding