'use client'
import { SettingContext } from '@/contexts/SettingContext';
import { Card, Tooltip } from '@mui/material'
import React, { useContext } from 'react'



const partners = [
    { name: "Netplace", logo: "https://ccnstorage.s3.amazonaws.com/netplace_f7c05a5c22.png" },
    { name: "IBM", logo: "https://ccnstorage.s3.amazonaws.com/IBM_21cfa27577.png" },
    { name: "Cisco", logo: "https://ccnstorage.s3.amazonaws.com/cisco_png_logo_3774_5bda491450.png" },
    { name: "NTT", logo: "https://ccnstorage.s3.amazonaws.com/ntt_49026f40e3.png" },
    { name: "Inventa", logo: "https://ccnstorage.s3.amazonaws.com/inventa_49be7d6a62.jpg" },
    { name: "Airtel", logo: "https://ccnstorage.s3.amazonaws.com/airtel_cd9369ddf8.jpg" },
    { name: "AKS", logo: "https://ccnstorage.s3.amazonaws.com/aks_6634e8a1de.jpg" },
    { name: "IPCA", logo: "https://ccnstorage.s3.amazonaws.com/IPCA_b76690ce5b.png" },
    { name: "Checkpoint", logo: "https://ccnstorage.s3.amazonaws.com/checkpoint_logo_stacked_large_blk_afb7826e32.png" },
    { name: "ESSEN", logo: "https://ccnstorage.s3.amazonaws.com/ESSEN_6b3be7ab96.png" },
    { name: "Microland", logo: "https://ccnstorage.s3.amazonaws.com/microland_0c6b2d80e2.png" },
    { name: "IIFL", logo: "https://ccnstorage.s3.amazonaws.com/IIFL_585e45d3fc.png" },
    { name: "Securelink", logo: "https://ccnstorage.s3.amazonaws.com/securelink_f3ccb4861a.png" },
    { name: "Sewretek", logo: "https://ccnstorage.s3.amazonaws.com/sewretek_44e72b5fcc.png" },
    { name: "Anuta", logo: "https://ccnstorage.s3.amazonaws.com/anuta_10f21a9b2a.png" },
    { name: "Velocis", logo: "https://ccnstorage.s3.amazonaws.com/velocis_de4493db89.png" },
    { name: "Worksqaure", logo: "https://ccnstorage.s3.amazonaws.com/worksqaure_780c52f4f1.png" },
    { name: "Network Tech Lab", logo: "https://ccnstorage.s3.amazonaws.com/networktechlab_ac2be234d9.png" },
    { name: "Netplace", logo: "https://ccnstorage.s3.amazonaws.com/netplace_8b426f874d.png" },
    { name: "Konverge", logo: "https://ccnstorage.s3.amazonaws.com/konverge_5d55dd168e.png" },
    { name: "Inventa", logo: "https://ccnstorage.s3.amazonaws.com/inventa_2f6701566d.png" },
    { name: "Galaxy", logo: "https://ccnstorage.s3.amazonaws.com/GALAXY_7eaa3ff8b7.png" },
    { name: "DT", logo: "https://ccnstorage.s3.amazonaws.com/dt_Logo_a567c98f44.png" },
    { name: "Doyen", logo: "https://ccnstorage.s3.amazonaws.com/doyen_1cc78a6730.png" },
    { name: "Cowrks", logo: "https://ccnstorage.s3.amazonaws.com/Cowrks_d71003a6c5.png" },
    { name: "Black Box Network Services", logo: "https://ccnstorage.s3.amazonaws.com/Black_Box_Network_Services_f7caa48dc9.png" },
    { name: "Brisk Technovision", logo: "https://ccnstorage.s3.amazonaws.com/Brisk_technovision_pvt_794ed14595.png" },
    { name: "AKS", logo: "https://ccnstorage.s3.amazonaws.com/aks_c1f47bfca7.png" },
    { name: "ACL", logo: "https://ccnstorage.s3.amazonaws.com/acl_12d39b6aa8.png" },
    { name: "G TECH", logo: "https://ccnstorage.s3.amazonaws.com/G_TECH_c53555add0.png" },
    { name: "Galentic", logo: "https://ccnstorage.s3.amazonaws.com/GALENTIC_ee4b858308.png" },
    { name: "Wysetek", logo: "https://ccnstorage.s3.amazonaws.com/wysetek_e3881b6d06.png" },
    { name: "Wordline", logo: "https://ccnstorage.s3.amazonaws.com/wordline_4fff204b33.png" },
    { name: "Talent", logo: "https://ccnstorage.s3.amazonaws.com/talent_3be72be821.png" },
    { name: "Softcell", logo: "https://ccnstorage.s3.amazonaws.com/softcell_4d195908f0.png" },
    { name: "Synoptics", logo: "https://ccnstorage.s3.amazonaws.com/synoptics_f12d2563f2.png" },
    { name: "RTNetworks", logo: "https://ccnstorage.s3.amazonaws.com/rtnetworks_2d35ef1f0c.png" },
    { name: "OA", logo: "https://ccnstorage.s3.amazonaws.com/OA_251aaa5e0e.png" },
    { name: "Wyred", logo: "https://ccnstorage.s3.amazonaws.com/wyred_e964092b54.png" }
];


function PlacementPartners() {
    const [isHovered, setIsHovered] = React.useState(false)
    const scrollerDiv = React.useRef<HTMLDivElement>(null)
    const { settings } = useContext(SettingContext)

    return (
        <>

            <h6 style={{
                // position: 'absolute',
                textAlign: 'center',
                width: '100%',
                fontWeight: 700,
                height: '100%',
                minHeight: '25px',
                display: 'flex',
                justifyContent: 'center',
                // alignItems: 'center',
                zIndex: -1,
                color: "#64748b"
            }}>
                {
                    isHovered && <>
                        Our Top Placement Partner
                    </>
                }
            </h6>
            <div onMouseEnter={() => {
                setIsHovered(true)
            }} onMouseLeave={() => {
                setIsHovered(false)
            }} style={{
                display: 'flex',
                // gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
                gap: '1rem',
                justifyContent: 'space-around',
                alignItems: 'center',
                // padding: '2rem',
                zIndex: 100,
                position: 'relative',
                margin: '2rem 0',
                height: '100px',
            }}>

                {/* <div ref={scrollerDiv} className="row" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    // flexWrap: 'wrap',
                    gap: '2rem',
                    overflowX: 'auto',
                }}> */}

                <div className='wrapper' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    // flexWrap: 'wrap',
                    gap: '5rem',
                }}>

                    {
                        partners.map((partner, index) => (
                            <Card className="reverse-item" key={index} sx={{
                                borderRadius: '1rem',
                                padding: '0.5rem',
                                width: 150,
                                height: 100,
                                margin: '1rem',
                                animationDelay: `calc(30s / ${partners.length} * (${partners.length} - ${index + 1}) * -1)`,
                                left: `max(calc(150px * ${partners.length}), 100%)`,
                                // border: "1px solid #000",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                <Tooltip title={partner.name} arrow>
                                    <img src={partner.logo} alt={partner.name} style={{
                                        width: "100px",
                                        borderRadius: '10px'
                                    }} />
                                </Tooltip>
                            </Card>
                        ))
                    }
                </div>
            </div>


            {/* </div> */}
        </>
    )
}

export default PlacementPartners