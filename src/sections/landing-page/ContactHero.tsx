'use client'
import React, { useState, ChangeEvent, useContext, useEffect } from 'react';
import { Container, Grid, TextField, Button, Card } from '@mui/material';
import { SettingContext } from '@/contexts/SettingContext';
import { toast } from 'react-toastify';



interface FormData {
    name: string;
    email: string;
    phone: string;
    query: string;
}


function ContactHero() {
    const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
    useEffect(() => {
        const isSubmitted = localStorage.getItem('isSubmitted');
        if (isSubmitted) {
            setIsAlreadySubmitted(true);
        }
    }, []);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        query: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const { settings } = useContext(SettingContext)
    const handleSubmit = async () => {
        if (!formData.name) {
            alert('Name is required')
            return
        }
        if (!formData.email) {
            alert('Email is required')
            return
        }
        if (!formData.phone) {
            alert('Phone is required')
            return
        }
        if (!formData.query) {
            alert('Query is required')
            return
        }
        try {

            const response = await fetch('/api/submit-query', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('isSubmitted', 'true');
                setIsAlreadySubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    query: '',
                });
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('Not able to submit query')
        }
    };
    return (
        <div>
            <div className="containerHeadings" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '3rem 0'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '-0.5rem'
                }}>Get in touch
                </h1>

            </div>
            {
                isAlreadySubmitted ? <>
                    <Card style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '3rem auto',
                        width: 'min(90%, 600px)',
                        padding: '2rem',
                    }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4522/4522283.png" style={{
                            maxWidth:"min(70%, 200px)"
                        }} alt="" />
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: '-0.5rem'
                        }}>Thank you for submitting your query
                        </h1>
                        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '1rem' }}>We will get back to you soon</p>


                    </Card>
                </> : <>
                    <Container style={{ marginTop: '32px' }}>
                        <Grid container spacing={1} sx={{
                            boxShadow: 5,
                            border: '1px solid #2962FF',
                            borderRadius: '10px',
                        }}>
                            <Grid item xs={12} md={6}>

                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                    <img src="/images/illustrations/contact-us.png" style={{
                                        maxWidth: '70%',
                                    }} alt="" />

                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                padding: '2rem',
                            }}>
                                <Grid container spacing={3} sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    marginTop: '1rem',
                                    margin: "0",
                                    padding: 0
                                }}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            fullWidth
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Query"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            name="query"
                                            value={formData.query}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: settings.screen == "mobile" ? "center" : 'end' }}>
                                        <Button
                                            onClick={handleSubmit}
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            style={{ marginTop: '16px', padding: '8px 104px' }}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            }


        </div>
    );
}

export default ContactHero