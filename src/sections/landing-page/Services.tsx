'use client'
import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid2';
import { SettingContext } from '@/contexts/SettingContext';




const features = [
    "We feed you with industry demands.",
    "Industrial Exposure Sessions by professionals.",
    "We know what industry demands.",
    "Boot camps for grooming session.",
    "Interview Drives.",
    "Discover Your Behavioral Style, Learn Strategies For Recognizing And Working With People Of Different Style With Confidence",
    "We Place you!",
]




function ServicesHero() {
    const { settings } = useContext(SettingContext)
    return (
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
                    }}>Services</h1>
                    <h6 style={{
                        color: "#2962FF",
                        fontSize: '1rem',
                        maxWidth: "min(100%, 600px)",
                        textAlign: 'center',
                    }}>Our blog is where we share our latest projects, tips and tricks, and best practices to help you make the most of your job site.</h6 >
                </div>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 2,
                    my: 4
                }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', border: '3px solid #2962FF', borderRadius: 2, p: 2, gridRow: '1 / span 2' }}  >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 4 }}>
                            Job Guarantee Programs
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '0.8rem' }}>
                            We prepare the students for an IT career and helping them take their distinctive initial move towards a remunerating Career in Technology Industry. There will be ‘n’ number of line ups until you get placed. Dedicated Talent Management Team will be helping for any queries regarding – Placements, Career, Resume, Training, HR related questions as to make your career smooth and stable.
                        </Typography>

                        <img src="https://cdn-icons-png.flaticon.com/512/6214/6214011.png" style={{
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            // filter: 'invert(1)', 
                        }} alt="" />

                        <Box>
                            {
                                features.map((feature, index) => (
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        margin: '0.5rem 0',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: '50%',
                                            background: settings.themeMode != "dark" ? 'black' : "white",
                                            color: settings.themeMode == "dark" ? 'black' : "white",
                                            marginRight: '1rem',
                                        }}>
                                            {index + 1}
                                        </Box>
                                        <Typography variant="h6" sx={{
                                            fontWeight: 'bold',
                                            fontSize: '0.8rem',
                                            width: '80%',
                                        }}>
                                            {feature}
                                        </Typography>
                                    </Box>
                                ))
                            }



                        </Box>

                        <Button endIcon={<ArrowForwardIcon />} sx={{ mt: 2, borderRadius: 2 }} variant="outlined" color="secondary">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', border: '3px solid #2962FF', borderRadius: 2, p: 2, }} >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 4 }}>
                            Networking
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '0.8rem' }}>
                            Our CCN certification ensures that our students are thoroughly furnished with such information to ace the competition. One common application of networking is the connection of numerous computers within an organisation for the purpose of sharing data, hardware, and software. If you wish to make use of the Internet along with other networking technologies as your career growth, you must have a firm grasp of the underlying technology and networking concepts.
                        </Typography>
                        <img src="https://cdn-icons-png.flaticon.com/512/974/974061.png" style={{
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            // filter: 'invert(1)',
                        }} alt="" />
                        <Button endIcon={<ArrowForwardIcon />} sx={{ mt: 2, borderRadius: 2 }} variant="outlined" color="secondary">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', border: '3px solid #2962FF', borderRadius: 2, p: 2, }} >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 4 }}>
                            Cyber Security
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '0.8rem' }}>
                            Since every potential cyber security analyst has different wants and needs; we design our cyber security classes to be flexible enough to accommodate a wide variety of scenarios. With 100% placement guarantee, we ensure that you will be placed in the most notable companies across the world. CCN is proud to offer its clients cyber security solutions which improve their organisation safety in every way.

                        </Typography>
                        <img src="https://cdn-icons-png.flaticon.com/512/6783/6783360.png" style={{
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            // filter: 'invert(1)',
                        }} alt="" />
                        <Button endIcon={<ArrowForwardIcon />} sx={{ mt: 2, borderRadius: 2 }} variant="outlined" color="secondary">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', border: '3px solid #2962FF', borderRadius: 2, p: 2, }} >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 4 }}>
                            Ethical Hacking
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '0.8rem' }}>
                            Since its inception, we have maintained our dedication to serving clients from all over the world by offering them with innovative training solutions. At CCN, we are always improving and changing to accommodate emerging technologies and industry trends, guaranteeing that its programs are always cutting edge.
                        </Typography>
                        <img src="https://cdn-icons-png.flaticon.com/512/18133/18133354.png" style={{
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            // filter: 'invert(1)',
                        }} alt="" />
                        <Button endIcon={<ArrowForwardIcon />} sx={{ mt: 2, borderRadius: 2 }} variant="outlined" color="secondary">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', border: '3px solid #2962FF', borderRadius: 2, p: 2, }} >
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 4 }}>
                            IT Services
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '0.8rem' }}>
                            We provide a complete package of assistance for IT projects – we plan, design, implement and continuously support technology-powered solutions. Boosting and simplifying the process, production and technology, seamlessly. We help our clients to grow their business with all the IT solutions from establishing an Infrastructure to expansion of established entity and securing from unexpected risks.

                        </Typography>
                        <img src="https://cdn-icons-png.flaticon.com/512/5030/5030162.png" style={{
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            // filter: 'invert(1)',
                        }} alt="" />
                        <Button endIcon={<ArrowForwardIcon />} sx={{ mt: 2, borderRadius: 2 }} variant="outlined" color="secondary">
                            Learn More
                        </Button>
                    </Grid>
                </Box>





            </Container>
            {/* <img src="https://www.connectingcybernetworks.com/images/placement/placement-14.png" style={{
                width: '100%',
                height: 'auto',
                margin: 'auto',
                filter: settings.themeMode=="dark"?"initial": 'invert(1)',
            }} alt="" /> */}
        </div>
    )
}

export default ServicesHero