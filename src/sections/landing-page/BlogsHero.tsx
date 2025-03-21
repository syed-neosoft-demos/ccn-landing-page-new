'use client'
import { SettingContext } from "@/contexts/SettingContext"
import { Button, Card, Container, Typography } from "@mui/material"
import React, { useContext } from "react"



const blogsData = [
    {
        title: "Bridging The Gap: Cybersecurity Career For Non-Technical Professionals",
        description: "In todays digital age, the importance of cybersecurity has never been more critical. With the ever-increasing number of cyber threats and attacks targeting individuals, organizations, and governments, the demand for skilled cybersecurity professionals continues to grow. However, due to a lack of technical knowledge, many non-technical professionals with valuable expertise and experience in other domains seek for the best cyber security courses to switch their careers in this impactful field. Whether you come from a business background, non-IT job profile, or another non-technical background, the professionals at an experienced ethical hacking institute can help you to make a bright career by imparting lessons from scratch. Enrolling in such an institute helps combine your expertise with the program’s comprehensive curriculum and industry support. So let’s move on to know how you can break the gap to become a successful cyber security hacker, even belonging to a non-relevant background. Also learn, how can you contribute towards a meaningful impact in protecting digital assets, mitigating cyber threats, and creating a safer digital future.",
        image: "https://www.springboard.com/blog/wp-content/uploads/2020/11/cybersecurity-skills-to-boost-or-jumpstart-your-career.png",
        link: "#"
    },
    {
        title: "Bridging The Gap: Cybersecurity Career For Non-Technical Professionals",
        description: "In todays digital age, the importance of cybersecurity has never been more critical. With the ever-increasing number of cyber threats and attacks targeting individuals, organizations, and governments, the demand for skilled cybersecurity professionals continues to grow. However, due to a lack of technical knowledge, many non-technical professionals with valuable expertise and experience in other domains seek for the best cyber security courses to switch their careers in this impactful field. Whether you come from a business background, non-IT job profile, or another non-technical background, the professionals at an experienced ethical hacking institute can help you to make a bright career by imparting lessons from scratch. Enrolling in such an institute helps combine your expertise with the program’s comprehensive curriculum and industry support. So let’s move on to know how you can break the gap to become a successful cyber security hacker, even belonging to a non-relevant background. Also learn, how can you contribute towards a meaningful impact in protecting digital assets, mitigating cyber threats, and creating a safer digital future.",
        image: "https://www.springboard.com/blog/wp-content/uploads/2020/11/cybersecurity-skills-to-boost-or-jumpstart-your-career.png",
        link: "#"
    },
    {
        title: "Bridging The Gap: Cybersecurity Career For Non-Technical Professionals",
        description: "In todays digital age, the importance of cybersecurity has never been more critical. With the ever-increasing number of cyber threats and attacks targeting individuals, organizations, and governments, the demand for skilled cybersecurity professionals continues to grow. However, due to a lack of technical knowledge, many non-technical professionals with valuable expertise and experience in other domains seek for the best cyber security courses to switch their careers in this impactful field. Whether you come from a business background, non-IT job profile, or another non-technical background, the professionals at an experienced ethical hacking institute can help you to make a bright career by imparting lessons from scratch. Enrolling in such an institute helps combine your expertise with the program’s comprehensive curriculum and industry support. So let’s move on to know how you can break the gap to become a successful cyber security hacker, even belonging to a non-relevant background. Also learn, how can you contribute towards a meaningful impact in protecting digital assets, mitigating cyber threats, and creating a safer digital future.",
        image: "https://www.springboard.com/blog/wp-content/uploads/2020/11/cybersecurity-skills-to-boost-or-jumpstart-your-career.png",
        link: "#"
    }
]

function BlogsHero() {
    const { settings } = useContext(SettingContext)
    return (
        <Typography component={'div'} >
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
                }}>BLOGS</h1>
                <h6 style={{
                    color: "#2962FF",
                    fontSize: '1rem',
                    maxWidth: "min(100%, 600px)",
                    textAlign: 'center',
                }}>Our blog is where we share our latest projects, tips and tricks, and best practices to help you make the most of your job site.</h6 >
            </div>

            <Container>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1rem',
                }}>
                    {
                        blogsData.map((blog, index) => (
                            <Card key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                padding: '1rem',
                                border: '1px solid #e0e0e055',
                                borderRadius: '5px'
                            }}
                                sx={{
                                    "&:hover": {
                                        boxShadow: settings.themeMode == "light" ? '0px 0px 10px 10px rgba(0,0,0,0.1)' : "0px 0px 10px 5px rgba(255,255,255,0.1)",
                                        scale: 1.02,
                                    }
                                }}
                            >
                                <img src={blog.image} alt={blog.title} style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px'
                                }} />
                                <Typography variant="h6" style={{
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}>{blog.title}</Typography>
                                <Typography variant="body1" component="p" sx={{
                                    color: settings.themeMode == "dark" ? "#BECBD6" : "gray"
                                }}>{blog.description.slice(0, 200)}...</Typography>
                                <Button variant='contained' color='secondary'>Read More</Button>
                            </Card>
                        ))
                    }
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                }}>
                    <Button variant='outlined' color='secondary' style={{
                        margin: '1rem 0',
                        padding: '0.2rem 4rem',
                        fontSize: '1rem',
                    }}>View All Blogs</Button>
                </div>
            </Container>
        </Typography>
    )
}

export default BlogsHero