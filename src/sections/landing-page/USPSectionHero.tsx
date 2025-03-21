import { SettingContext } from '@/contexts/SettingContext'
import { Card, Container, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'

type Props = {}

const USPData = [
    {
        text: "Unlike other Training Centers, We don't give verbal Job Placement Guarantees.",
        image: "/images/illustrations/job.png",
    },
    {
        text: "We offer a 💯% Job Placement Guarantee on a Written and Signed agreement, or you can get your fees refunded.",
        image: "/images/illustrations/agreement.png",
    },
    {
        text: " Lifetime Placement Guarantee (NO additional Charges for lifetime Placement)",
        image: "/images/illustrations/guarentee.png ",
    },
    {
        text: "The candidate will have N number of interviews until they get placed.",
        image: "/images/illustrations/interview.png",
    },
    {
        text: " Onsite Soft Skills(English)+ Technical Interview preparation.",
        image: "/images/illustrations/soft-skill.png",
    },
    {
        text: "Lifetime Course  upgradation (NO charges for Course upgradation)",
        image: "/images/illustrations/upgrade.png",
    },
    {
        text: " There are no charges for repeating the batch.",
        image: "/images/illustrations/batch.png",
    },
    {
        text: "Hands-on Practical labs on device (80% Practical+20% Theory)",
        image: "/images/illustrations/practical.png",
    },
    {
        text: " The CCN Centre is open 24/7 for students, allowing them to come and practice at any time. CCN Data Center available 24/7 for Students.",
        image: "/images/illustrations/24x7.png",
    },
    {
        text: "Everyday Class Video Recording",
        image: "/images/illustrations/session.png",
    }
]


function USPSectionHero({ }: Props) {
    const { settings } = useContext(SettingContext);
    if (settings.screen == "mobile")
        return (
            <Typography component={'div'} style={{
                minHeight: "100dvh",
                margin: "5rem 0",
            }} >
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
                    }}>
                        Why CCN ?
                    </h1>
                </div>
                <Container sx={{
                    height: "100%",
                }}>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "70px 4fr",

                        gap: "5px",
                        minHeight: "100%",
                    }}>
                        <div style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "relative",
                            overflow: "hidden",
                            gap: "2rem",

                        }}>
                            <HighlighterVerticalLine />
                            {
                                USPData.map((data, index) => {
                                    return (
                                        <div key={index} style={{
                                            display: "flex",
                                            gap: "1rem",
                                            alignItems: "center",
                                            border: "1px solid #2962FF",
                                            padding: "10px",
                                            width: "50px",
                                            height: "50px",
                                            justifyContent: "center",
                                            borderRadius: "10px",
                                            // margin: "2rem 0rem",
                                            color: "#2962FF",
                                            fontWeight: "700",
                                            boxShadow: "0px 0px 10px 0px #2962FF",
                                            fontSize: "1.5rem",
                                            zIndex: 999,
                                            background: "#0B101A",
                                        }}>
                                            {index + 1}
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div style={{
                            display: "grid",
                            gridTemplateRows: "repeat(auto-fit, 2fr)",
                            gap: "2rem",
                            // padding: "2rem",
                        }}>
                            {
                                USPData.map((data, index) => {
                                    return (
                                        <div key={index} style={{
                                            // margin: "2rem 0rem",
                                            minHeight: "350px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                        }}>
                                            <Typography variant='h6' sx={{
                                                fontWeight: "bolder"
                                            }}>
                                                {data.text}
                                            </Typography>
                                            <Card style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "1rem",
                                                borderRadius: "20px",
                                            }}>

                                                <img src={data.image} style={{
                                                    margin: "1.5rem 0rem",
                                                    maxHeight: "150px",
                                                }} alt="" />
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Container>
            </Typography>
        )
    else return (
        <Typography component={'div'} style={{
            minHeight: "100dvh",
            margin: "5rem 0",

        }} >
            <div className="containerHeadings" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5rem'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '-2rem'
                }}>
                    Why CCN?
                </h1>
            </div>
            <Container sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "4fr 70px 4fr",
                    width: "min(900px, 100%)",
                    gap: "40px",
                    minHeight: "100%",
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateRows: "repeat(auto-fit, 2fr)",
                        gap: "2rem",
                        // maxWidth: "80%",
                        // padding: "2rem",
                    }}>
                        {
                            USPData.map((data, index) => {
                                if (index % 2 == 0)
                                    return (
                                        <div key={index} style={{
                                            // margin: "2rem 0rem",
                                            minHeight: "150px",
                                        }}>
                                            <Card style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "1rem",
                                                borderRadius: "20px",
                                            }}>

                                                <img src={data.image} style={{
                                                    margin: "1.5rem 0rem",
                                                    maxHeight: "150px",
                                                }} alt="" />
                                            </Card>
                                        </div>
                                    )
                                else return <div key={index} style={{
                                    // margin: "2rem 0rem",
                                    minHeight: "150px",
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: "bolder"
                                    }}>
                                        {data.text}
                                    </Typography>

                                </div>
                            })
                        }
                    </div>
                    <div style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden",
                        gap: "2rem",

                    }}>
                        <HighlighterVerticalLine />
                        {
                            USPData.map((data, index) => {
                                return (
                                    <div key={index} style={{
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "center",
                                        border: "1px solid #2962FF",
                                        padding: "10px",
                                        width: "50px",
                                        height: "50px",
                                        justifyContent: "center",
                                        borderRadius: "10px",
                                        // margin: "2rem 0rem",
                                        color: "#2962FF",
                                        fontWeight: "700",
                                        boxShadow: "0px 0px 10px 0px #2962FF",
                                        fontSize: "1.5rem",
                                        zIndex: 999,
                                        background: "#0B101A",
                                    }}>
                                        {index + 1}
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div style={{
                        display: "grid",
                        gridTemplateRows: "repeat(auto-fit, 2fr)",
                        gap: "2rem",
                        // maxWidth: "80%"

                        // padding: "2rem",
                    }}>
                        {
                            USPData.map((data, index) => {
                                if (index % 2 == 1)
                                    return (
                                        <div key={index} style={{
                                            // margin: "2rem 0rem",
                                            minHeight: "150px",
                                        }}>
                                            <Card style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "1rem",
                                                borderRadius: "20px",
                                            }}>

                                                <img src={data.image} style={{
                                                    margin: "1.5rem 0rem",
                                                    maxHeight: "150px",
                                                }} alt="" />
                                            </Card>
                                        </div>
                                    )
                                else return <div key={index} style={{
                                    // margin: "2rem 0rem",
                                    minHeight: "150px",
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: "bolder"
                                    }}>
                                        {data.text}
                                    </Typography>

                                </div>
                            })
                        }
                    </div>
                </div>
            </Container>
        </Typography>
    )
}

function HighlighterVerticalLine() {
    const pointerRef = React.useRef<HTMLDivElement>(null)
    const staticRef = React.useRef<HTMLDivElement>(null)
    const [position, setPosition] = React.useState({
        top: 0,
        left: 0,
        height: 0,
    })
    // useEffect(() => {
    //     if (pointerRef.current) {
    //         window.addEventListener("scroll", (event) => {
    //             console.log(event);
    //         })
    //         setPosition({
    //             top: pointerRef.current.offsetTop,
    //             left: pointerRef.current.offsetLeft,
    //             height: pointerRef.current.offsetHeight,
    //         })
    //     }
    // }, [pointerRef])
    useEffect(() => {
        if (pointerRef.current && staticRef.current) {
            window.addEventListener("scroll", (event) => {
                // console.log(event);
                // console.log(pointerRef.current?.offsetTop);
                // console.log(pointerRef.current?.offsetHeight);
                // console.log(window.scrollY);
                // console.log(window.scroll);
                // console.log(pointerRef.current?.);
                // console.log(pointerRef.current?.getBoundingClientRect());
                const { top, height, x, y } = pointerRef.current?.getBoundingClientRect() as DOMRect
                const { top: staticTop, height: staticHeight } = staticRef.current?.getBoundingClientRect() as DOMRect
                // console.log(top, height, x, y);
                // console.log(window.innerHeight - staticTop, staticHeight);
                setPosition({
                    top: window.innerHeight - staticTop - 250,
                    left: x,
                    height: window.innerHeight - staticTop - 250,
                })

            })
            return () => {
                window.removeEventListener("scroll", (event) => {
                    // console.log(event);
                    // console.log(pointerRef.current?.offsetTop);
                    // console.log(pointerRef.current?.offsetHeight);
                    // console.log(window.scrollY);
                    // console.log(window.scroll);
                    // console.log(pointerRef.current?.);
                    // console.log(pointerRef.current?.getBoundingClientRect());
                    const { top, height, x, y } = pointerRef.current?.getBoundingClientRect() as DOMRect
                    const { top: staticTop, height: staticHeight } = staticRef.current?.getBoundingClientRect() as DOMRect
                    // console.log(top, height, x, y);
                    // console.log(window.innerHeight - staticTop, staticHeight);
                    setPosition({
                        top: window.innerHeight - staticTop - 250,
                        left: x,
                        height: window.innerHeight - staticTop - 250,
                    })
    
                })
            }
        }
    }, [pointerRef, staticRef])
    return (<>
        <div ref={pointerRef} style={{
            position: "absolute",
            top: `${parseInt(position.top.toFixed(0))}px`,
            borderRadius: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30px",
            height: "30px",
            background: "#2962FF",
            zIndex: 1,
            transition: "top 0.001s",
            boxShadow: "0px 0px 30px 0px #2962FF",
        }}>

        </div>
        <div ref={staticRef} style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            height: `${parseInt(position.height.toFixed(0))}px`,
            background: "#2962FF",
            zIndex: 0,
        }}></div>
        <div style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            height: "100%",
            background: "gray",
            zIndex: -1,
        }}></div>
        <div style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "5px",
            height: position.height,
            background: "#2962FF",
            transition: "height 0.03s",
            zIndex: 0,
        }}></div>
    </>
    )
}




export default USPSectionHero