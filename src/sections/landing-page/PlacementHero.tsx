import { SettingContext } from '@/contexts/SettingContext'
import { Card, Container } from '@mui/material'
import React, { useContext } from 'react'

type Props = {}


const placementData = [
    {
        "name": "Talha Khan",
        "company": "VIBS Infosol",
        "image": "https://ccnstorage.s3.amazonaws.com/Talha_Khan_2_b29f1e02b0.jpg"
    },
    {
        "name": "Harsh Pandey",
        "company": "DigitalTrack",
        "image": "https://ccnstorage.s3.amazonaws.com/Harsh_Pandey_1_bf7308f837.jpg"
    },
    {
        "name": "Pranit Kondaskar",
        "company": "Allied Digital",
        "image": "https://ccnstorage.s3.amazonaws.com/Pranit_Kondaskar_b1bfe00a59.jpg"
    },
    {
        "name": "Owais Anssari",
        "company": "COMnet",
        "image": "https://ccnstorage.s3.amazonaws.com/Owais_Anssari_910f6ee22c.png"
    },
    {
        "name": "Vatan Tiwari",
        "company": "COMnet",
        "image": "https://ccnstorage.s3.amazonaws.com/Vatan_Tiwari_5e4cd54e7d.jpg"
    },
    {
        "name": "Aditya Pawar",
        "company": "TechFlex",
        "image": "https://ccnstorage.s3.amazonaws.com/Aditya_Pawar_d02aa80436.jpg"
    },
    {
        "name": "Pradeep Singh",
        "company": "Fluent",
        "image": "https://ccnstorage.s3.amazonaws.com/Pradeep_Singh_18ab890053.jpg"
    },
    {
        "name": "Mansi Mhatre",
        "company": "Wysetek",
        "image": "https://ccnstorage.s3.amazonaws.com/Mansi_Mhatre_612edacd8b.png"
    },
    {
        "name": "Abhishek Dubey",
        "company": "COMnet",
        "image": "https://ccnstorage.s3.amazonaws.com/Abhishek_Dubey_dd3b126931.jpg"
    },
    {
        "name": "Arya Shinde",
        "company": "Network Techlab",
        "image": "https://ccnstorage.s3.amazonaws.com/Arya_Shinde_network_techlab_eb7a875650.png"
    },
    {
        "name": "Yash Nishad",
        "company": "Netplace",
        "image": "https://ccnstorage.s3.amazonaws.com/Yash_Nishad_1d5a9ab3e3.png"
    },
    {
        "name": "Himani Panchal",
        "company": "Netplace",
        "image": "https://ccnstorage.s3.amazonaws.com/Himani_Panchal_aa3c3d3045.png"
    }
]




function PlacementHero({ }: Props) {
    // write a code to auto scroll placement data in repeated manner
    const { settings } = useContext(SettingContext)

    const scrollerDiv = React.useRef<HTMLDivElement>(null)
    // React.useEffect(() => {
    //     if (scrollerDiv.current) {
    //         if (settings.screen === "mobile") {

    //             const interval = setInterval(() => {
    //                 if (scrollerDiv.current) {
    //                     // console.log(scrollerDiv.current.scrollLeft);

    //                     scrollerDiv.current.scrollTo({
    //                         left: scrollerDiv.current.scrollLeft + 100,
    //                         behavior: 'smooth'
    //                     })
    //                     // console.log(scrollerDiv.current.scrollLeft , scrollerDiv.current.scrollWidth - scrollerDiv.current.clientWidth);

    //                     if (scrollerDiv.current.scrollLeft >= scrollerDiv.current.scrollWidth - scrollerDiv.current.clientWidth - 5) {
    //                         scrollerDiv.current.scrollTo({
    //                             left: 0,
    //                             behavior: 'smooth'
    //                         })
    //                     }
    //                 }
    //             }, 100)
    //             return () => clearInterval(interval)
    //         } else {
    //             const interval = setInterval(() => {
    //                 if (scrollerDiv.current) {
    //                     // console.log(scrollerDiv.current.scrollLeft);

    //                     scrollerDiv.current.scrollTo({
    //                         left: scrollerDiv.current.scrollLeft + 1,
    //                         behavior: 'smooth'
    //                     })
    //                     // console.log(scrollerDiv.current.scrollLeft , scrollerDiv.current.scrollWidth - scrollerDiv.current.clientWidth);

    //                     if (scrollerDiv.current.scrollLeft >= scrollerDiv.current.scrollWidth - scrollerDiv.current.clientWidth - 5) {
    //                         scrollerDiv.current.scrollTo({
    //                             left: 0,
    //                             behavior: 'smooth'
    //                         })
    //                     }
    //                 }
    //             }, 1)
    //             return () => clearInterval(interval)
    //         }
    //     }
    // }, [scrollerDiv, settings])
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
                }}>
                    Placement
                </h1>
                <h6 style={{
                    color: "#2962FF",
                    fontSize: '1rem',
                    maxWidth: "min(100%, 600px)",
                    textAlign: 'center',
                }}>Congratulations to All the Placed Students of "CCN"</h6 >
            </div>



            <Container>




                <div ref={scrollerDiv} className="row" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    // flexWrap: 'wrap',
                    gap: '2rem',
                    overflowX: 'auto',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '2rem',
                    }} className='wrapper'>

                        {placementData.map((data, index) => {
                            return (
                                <Card className="item" key={index} sx={{
                                    borderRadius: '1rem',
                                    padding: '0.5rem',
                                    width: 300,
                                    margin: '1rem',
                                    animationDelay: `calc(30s / ${placementData.length} * (${placementData.length} - ${index + 1}) * -1)`,
                                    left:`max(calc(300px * ${placementData.length}), 100%)`
                                }}>

                                    <div key={index} className="col-md-4" style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}>
                                        <img src={data.image} alt={data.name} style={{
                                            width: '300px',
                                            // height: '200px',
                                            borderRadius: '10px'
                                        }} />
                                        <h4 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {data.name}
                                        </h4>
                                        <p style={{
                                            fontSize: '1rem',
                                            color: '#6c757d'
                                        }}>
                                            {data.company}
                                        </p>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>










            </Container>







        </div>
    )
}

export default PlacementHero