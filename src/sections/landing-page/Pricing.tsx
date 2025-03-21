import { Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';
import React from 'react';

type Props = {}

function Pricing({ }: Props) {
    return (
        <Typography component={'div'}>
            <div>
                <Container>
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
                        }}>Packages</h1>
                        <h6 style={{
                            color: "#2962FF",
                            fontSize: '1rem',
                            maxWidth: "min(100%, 600px)",
                            textAlign: 'center',
                        }}>Don't let Budget be a path-blocker! Select one option as per your budget!
                        </h6 >
                    </div>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card style={{
                                borderRadius: '1rem'
                            }}>
                                <Typography variant="h5" component="div" style={{
                                    backgroundColor: "#2962FF",
                                    padding: '1rem',
                                }}>
                                    Cyber Security Associate
                                </Typography>
                                <CardContent style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <Typography variant="h6" color="text.secondary" style={{
                                        fontWeight: 'bold'
                                    }}>
                                        Duration:- 6 months

                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CCNA
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CEH
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Security Cisco ASA Firewall + VPN
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Checkpoint Firewall (CCSA)
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Palo Alto Firewall (PCNSA)
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Maximum 5 Interviews
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        100% placement guaranteed on bond
                                    </Typography>
                                    {/* <Button variant="outlined" style={{
                                        padding: "10px 0"
                                    }} color="secondary" fullWidth>
                                        Choose Plan
                                    </Button> */}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card elevation={4} style={{
                                borderRadius: '1rem'
                            }}>
                                <Typography variant="h5" component="div" style={{
                                    backgroundColor: "#2962FF",
                                    padding: '1rem',
                                }}  >
                                    Cyber Security Professional
                                </Typography>
                                <CardContent style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <Typography variant="h6" color="text.secondary" style={{
                                        fontWeight: 'bold'
                                    }}>
                                        Duration:- 10 months


                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CCNA
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CEH
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CCNP Security
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Checkpoint Firewall (CCSA)
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Palo Alto Firewall (PCNSA)
                                    </Typography>

                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        N no. of Interviews
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        100% placement guaranteed on bond
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Lifetime Consultation Programme
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Soft Skill + Mock Interview Preparation
                                    </Typography>
                                    {/* <Button variant="outlined" style={{
                                        padding: "10px 0"
                                    }} color="secondary" fullWidth>
                                        Choose Plan
                                    </Button> */}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card style={{
                                borderRadius: '1rem'
                            }}>
                                <Typography variant="h5" component="div" style={{
                                    backgroundColor: "#2962FF",
                                    padding: '1rem',
                                }}  >
                                    Cyber Security Expert
                                </Typography>
                                <CardContent style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <Typography variant="h6" color="text.secondary" style={{
                                        fontWeight: 'bold'
                                    }}>
                                        Duration:- 12 months+

                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CCNA
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CEH
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        CCNP Security
                                    </Typography>

                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Checkpoint Firewall (CCSA)
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Palo Alto Firewall (PCNSA)
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Forensic Investigation
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Bug Bounty
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        N no. of Interviews
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        100% placement guaranteed on bond
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Lifetime Consultation Programme
                                    </Typography>
                                    <Typography variant="body2" style={{
                                        display: "flex",
                                        margin: "5px 0"
                                    }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/656/656801.png" style={{
                                            width: "15px",
                                            marginRight: "10px"
                                        }} alt="" />
                                        Soft Skills + Mock Interviews training Included
                                    </Typography>
                                    {/* <Button variant="outlined" style={{
                                        padding: "10px 0"
                                    }} color="secondary" fullWidth>
                                        Choose Plan
                                    </Button> */}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Typography>
    );
}

export default Pricing;