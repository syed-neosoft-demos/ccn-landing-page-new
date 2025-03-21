"use client";
import { SettingContext } from '@/contexts/SettingContext'
import { CourseDataType } from '@/types/data-responses'
import { aadharFinalResponse, CurrentStatusResponse } from '@/types/responses'
import { Button, Card, Container, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

type Props = {
    userData: CurrentStatusResponse
    courseData: CourseDataType,
}

function InvoiceComponent({
    userData,
    courseData
}: Props) {
    const { settings } = useContext(SettingContext)

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            marginTop: settings.screen == 'mobile' ? "50px" : "90px",
        }}>
            <Container style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '20px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" style={{
                        maxWidth: "100px"
                    }} alt="" />
                    <h4 style={{
                        color: "green",
                        fontWeight: "bold"
                    }}>
                        Registration Successful
                    </h4>
                </div>
                {
                    settings.screen == 'mobile' ?
                        <MobileInvoiceComponent userData={userData} courseData={courseData} />
                        :
                        <DesktopInvoiceComponent userData={userData} courseData={courseData} />
                }

            </Container>
        </div>
    )
}


function MobileInvoiceComponent({
    userData,
    courseData
}: Props) {
    const [userAadharData, setUserAadharData] = useState<{
        identity: aadharFinalResponse["merchantProofOfIdentity"],
        address: aadharFinalResponse["merchantProofOfAddress"]
    }>()
    useEffect(() => {
        if (!userData) return
        const user_data_by_aadhar = {
            identity: JSON.parse(userData.aadhar_identity),
            address: JSON.parse(userData.aadhar_address)
        }
        setUserAadharData(user_data_by_aadhar)
    }, [userData])

    function downloadInvoice() {
        const invoice = document.getElementById('desktop-invoice')
        if (invoice) {
            const pdf = new jsPDF('l', 'px', 'a4');

            pdf.html(invoice, {
                html2canvas: {
                    scale: 0.63,
                },
                width: 1000,

                callback: function (pdf) {
                    pdf.save('invoice.pdf');
                }
            });
        }
    }

    return (
        <>
            <div id='mobile-invoice' style={{
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'column',
                minHeight: '70vh',
                padding: '10px',
                // border: '1px solid #ccc',
                width: 'min(100%, 1000px)',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '10px',
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <img src="/logos/logo-white-bg.jpg" alt="" style={{
                        maxWidth: '150px',
                        borderRadius: '10px',
                    }} />
                    <h6 style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}>
                        Date: <span style={{
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}>
                            {new Date().toLocaleDateString()}
                        </span>
                    </h6>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    marginTop: '20px',
                }}>
                    <div>
                        <h4 style={{
                            fontSize: '14px',
                        }}>From</h4>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>Connecting Cyber Networks</p>
                        <p style={{
                            maxWidth: '60%',
                            fontSize: '12px',
                        }}>
                            Vaastu Darshan, B-602, Gundawali Azad Rd, near BMC Ward Office, Azad Nagar, Andheri East, Mumbai, Maharashtra 400069
                        </p>
                    </div>
                    <div>
                        <h4 style={{
                            fontSize: '14px',
                        }}>To</h4>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>
                            {
                                userAadharData ? userAadharData?.identity.name : userData.full_name
                            }
                        </p>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>
                            {userAadharData ? <>{

                                userAadharData.address.careOf + " " + userAadharData.address.house + " " + userAadharData.address.street + " " + userAadharData.address.landmark + " " + userAadharData.address.locality + " " + userAadharData.address.subDistrict + " " + userAadharData.address.district + " " + userAadharData.address.state + " " + userAadharData.address.country + " " + userAadharData.address.postOffice + " " + userAadharData.address.pincode
                            }
                            </> : <>
                                {userData.address_line + " " + userData.city + " " + userData.state + " " + userData.country + " " + userData.pin_code}
                            </>
                            }
                        </p>
                        <p style={{
                            maxWidth: '60%',
                            fontSize: '12px',
                        }}>
                            {userData.email}
                        </p>
                    </div>
                </div>
                {/* <hr style={{
                    marginTop: '20px',
                    marginBottom: '10px',
                    width: '100%',
                }} /> */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    marginTop: '40px',
                    gap: '10px',
                }}>
                    <h4>
                        Description
                    </h4>
                    <h4 style={{
                        textAlign: 'end'
                    }}>
                        Quantity
                    </h4>
                    <hr style={{
                        gridColumn: '1 / span 3',
                    }} />
                    <p style={{
                        color: "gray",
                        // textAlign:"end"
                    }}>
                        {courseData.name} course Demo
                    </p>
                    <p style={{
                        color: "gray",
                        textAlign: "end"
                    }}>
                        1
                    </p>

                    <hr style={{
                        gridColumn: '1 / span 3',
                    }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        alignItems: 'center',
                        paddingLeft: '20px',
                        gridColumn: '1 / span 3',
                        fontSize: '1.5rem',
                    }}>
                        <h4>
                            Total
                        </h4>
                        <p style={{
                            fontWeight: 'bold',
                        }}>
                            {courseData.demo_price}
                        </p>
                    </div>

                    <div>
                        <div style={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '10px',
                        }}>

                            <span style={{
                                color: 'gray',
                                fontSize: '12px',
                            }}>
                                Paid using
                            </span>
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}>

                                {userData.payment_mode.toUpperCase()}
                            </span>
                        </div>
                        <div style={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '10px',
                        }}>

                            <span style={{
                                color: 'gray',
                                fontSize: '12px',
                            }}>
                                Transaction ID
                            </span>
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}>
                                {userData.payment_id}
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4272/4272841.png" style={{
                            maxWidth: '100px',
                        }} alt="" />
                    </div>
                </div>
            </div>

            <Button onClick={downloadInvoice} style={{
                padding: '10px 20px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '20px',
            }}>
                Download Invoice
            </Button>
        </>
    )
}

function DesktopInvoiceComponent({
    userData,
    courseData
}: Props) {
    const [userAadharData, setUserAadharData] = useState<{
        identity: aadharFinalResponse["merchantProofOfIdentity"],
        address: aadharFinalResponse["merchantProofOfAddress"]
    }>()
    useEffect(() => {
        if (!userData) return
        const user_data_by_aadhar = {
            identity: JSON.parse(userData.aadhar_identity),
            address: JSON.parse(userData.aadhar_address)
        }
        setUserAadharData(user_data_by_aadhar)
    }, [userData])

    function downloadInvoice() {
        const invoice = document.getElementById('desktop-invoice')
        if (invoice) {
            const pdf = new jsPDF('l', 'px', 'a4');

            pdf.html(invoice, {
                html2canvas: {
                    scale: 0.63,
                },
                width: 1000,

                callback: function (pdf) {
                    pdf.save('invoice.pdf');
                }
            });
        }
    }

    return (
        <>
            <div id='desktop-invoice' style={{
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'column',
                minHeight: '70vh',
                padding: '20px',
                // border: '1px solid #ccc',
                width: 'min(100%, 1000px)',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '10px',
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <img src="/logos/logo-white-bg.jpg" alt="" style={{
                        maxWidth: '150px',
                        borderRadius: '10px',
                    }} />
                    <h6 style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}>
                        Date: <span style={{
                            fontWeight: 'bold',
                            fontSize: '15px',
                        }}>
                            {new Date().toLocaleDateString()}
                        </span>
                    </h6>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    marginTop: '20px',
                }}>
                    <div>
                        <h4 style={{
                            fontSize: '14px',
                        }}>From</h4>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>Connecting Cyber Networks</p>
                        <p style={{
                            maxWidth: '60%',
                            fontSize: '12px',
                        }}>
                            Vaastu Darshan, B-602, Gundawali Azad Rd, near BMC Ward Office, Azad Nagar, Andheri East, Mumbai, Maharashtra 400069
                        </p>
                    </div>
                    <div>
                        <h4 style={{
                            fontSize: '14px',
                        }}>To</h4>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>
                            {
                                userAadharData ? userAadharData?.identity.name : userData.full_name
                            }
                        </p>
                        <p style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}>
                            {userAadharData ? <>{

                                userAadharData.address.careOf + " " + userAadharData.address.house + " " + userAadharData.address.street + " " + userAadharData.address.landmark + " " + userAadharData.address.locality + " " + userAadharData.address.subDistrict + " " + userAadharData.address.district + " " + userAadharData.address.state + " " + userAadharData.address.country + " " + userAadharData.address.postOffice + " " + userAadharData.address.pincode
                            }
                            </> : <>
                                {userData.address_line + " " + userData.city + " " + userData.state + " " + userData.country + " " + userData.pin_code}
                            </>
                            }
                        </p>
                        <p style={{
                            maxWidth: '60%',
                            fontSize: '12px',
                        }}>
                            {userData.email}
                        </p>
                    </div>
                </div>
                {/* <hr style={{
                    marginTop: '20px',
                    marginBottom: '10px',
                    width: '100%',
                }} /> */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr',
                    marginTop: '40px',
                    gap: '10px',
                }}>
                    <h4>
                        Description
                    </h4>
                    <h4 style={{
                        textAlign: 'end'
                    }}>
                        Quantity
                    </h4>
                    <h4 style={{
                        textAlign: 'end'
                    }}>
                        Price
                    </h4>
                    <hr style={{
                        gridColumn: '1 / span 3',
                    }} />
                    <p style={{
                        color: "gray",
                        // textAlign:"end"
                    }}>
                        {courseData.name} course Demo
                    </p>
                    <p style={{
                        color: "gray",
                        textAlign: "end"
                    }}>
                        1
                    </p>
                    <p style={{
                        color: "gray",
                        textAlign: "end"
                    }}>
                        {courseData.demo_price}
                    </p>
                    <hr style={{
                        gridColumn: '1 / span 3',
                    }} />
                    <div>

                    </div>
                    <div>

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '20px',
                    }}>
                        <h4>
                            Total
                        </h4>
                        <p>
                            {courseData.demo_price}
                        </p>
                    </div>
                    <div>
                        <div style={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '10px',
                        }}>

                            <span style={{
                                color: 'gray',
                                fontSize: '12px',
                            }}>
                                Paid using
                            </span>
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}>

                                {userData.payment_mode.toUpperCase()}
                            </span>
                        </div>
                        <div style={{
                            display: 'flex',
                            // justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '10px',
                        }}>

                            <span style={{
                                color: 'gray',
                                fontSize: '12px',
                            }}>
                                Transaction ID
                            </span>
                            <span style={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}>
                                {userData.payment_id}
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/4272/4272841.png" style={{
                            maxWidth: '100px',
                        }} alt="" />
                    </div>
                </div>
            </div>

            <Button onClick={downloadInvoice} style={{
                padding: '10px 20px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '20px',
            }}>
                Download Invoice
            </Button>
        </>
    )
}

export default InvoiceComponent