import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type Props = {}

function RecurringPopup({ }: Props) {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#2962FF',
      zIndex: 1000,
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
            <b>Next Batch Starting soon  </b>
          </span>
        </Typography>
        <Button size='small' color='warning' variant='contained' style={{
          width: '150px',
          margin: '0.5rem',
          padding: '0.5rem 1rem',
          fontWeight: 'bolder',
        }}><Link href="/course-demo-registration/create-profile/cyber-security-associate">
            Join Now
          </Link>
        </Button>
      </Container>
    </div>
  )
}

export default RecurringPopup