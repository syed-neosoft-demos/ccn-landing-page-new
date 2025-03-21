'use client'
import { SettingContext } from '@/contexts/SettingContext'
import { Container } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'



function Footer() {
    const { settings } = useContext(SettingContext)

    return <div style={{
        background: settings.themeMode !== "dark" ? "#2962FF" : undefined,
        color: settings.themeMode !== "dark" ? "#fff" : "#fff",
        marginTop: '2rem',
        borderTop: '1px solid #2962FF',
    }}>
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
                // minHeight: '400px',
            }}

        >
            <div style={{
                display: "grid",
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '5rem',
                justifyContent: 'center',
                // alignItems: 'center',
            }}>
                <div style={{
                    gridColumn: "1/ span 2"
                }}>
                    <Image
                        src="/logos/logo-white-bg.jpg"
                        alt="logo"
                        width={200}
                        height={30}
                        style={{
                            borderRadius: '5px',
                        }}
                    />
                    <h6 style={{
                        textAlign: "justify",
                        fontSize: "0.8rem",
                        marginTop: '1rem',
                    }}>
                        Since its inception in November 2019, Connecting Cyber Networks has been committed to providing the highest quality, needs-based training interventions to its clients, both locally and internationally.
                    </h6>
                    <h6 style={{
                        textAlign: "justify",
                        fontSize: "0.8rem",
                        marginTop: '1rem',
                    }}>
                        Vaastu Darshan, B-602, Gundawali Azad Rd, near BMC Ward Office, Azad Nagar, Andheri East, Mumbai, Maharashtra 400069
                    </h6>

                    <div style={{
                        display: "grid",
                        maxWidth: "150px",
                        gridTemplateColumns: 'repeat(auto-fit, minmax(15px, 1fr))',
                        gap: '1rem',
                        marginTop: '1rem',
                    }}>
                        <img  src="https://cdn-icons-png.flaticon.com/512/2374/2374418.png" alt="" />
                        <img  src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
                        <img  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                        <img  src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="" />
                        <img  src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png" alt="" />
                    </div>
                </div>
                <div>
                    <h4 style={{
                        color: settings.themeMode !== "dark" ? "#fff" : "#2962FF",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{
                        color: settings.themeMode !== "dark" ? "#fff" : "#2962FF",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}>Services</h4>
                    <ul>
                        <li>Job Guarantee Programs</li>
                        <li>Networking</li>
                        <li>Cyber Security</li>
                        <li>Ethical Hacking</li>
                        <li>IT Services</li>
                    </ul>
                </div>
                <div>
                    <h4 style={{
                        color: settings.themeMode !== "dark" ? "#fff" : "#2962FF",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}>Let&apos;s talk!</h4>
                    <ul>
                        <li>Have questions? Contact a CCN Training Specialist today!</li>
                        <li>
                            <a href="tel:+918591130192"> +918591130192</a>
                        </li>
                        <li>
                            <a href="tel:+917777097791"> +917777097791</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
        <hr style={{
            border: '1px solid #2962FF',
        }} />
        <div style={{
            padding: '1rem',
            background: settings.themeMode !== "dark" ? "#2962FF" : undefined,
            color: settings.themeMode !== "dark" ? "#fff" : "#fff",
        }}>
            <p style={{
                textAlign: 'center',
                fontSize: '0.8rem',
            }}>
                © {(new Date).getFullYear()} Connecting Cyber Networks. All Rights Reserved.
            </p>
        </div>
    </div>
}

export default Footer
