import { SettingContext } from '@/contexts/SettingContext'
import React, { useContext } from 'react'


function RoadmapHero() {
    const { settings } = useContext(SettingContext)
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
                }}>Reasons to Join</h1>
                <h6 style={{
                    color: "#2962FF",
                    fontSize: '1rem',
                    maxWidth: "min(100%, 600px)",
                    textAlign: 'center',
                }}>Embark on a journey from foundational knowledge to advanced skills in cybersecurity. Secure your future with our comprehensive, step-by-step guide to mastering this critical domain.</h6 >
            </div>
            <img src="https://www.connectingcybernetworks.com/images/placement/placement-14.png" style={{
                width: '100%',
                height: 'auto',
                filter: settings.themeMode=='light'?'invert(1)' : 'invert(0)'
            }} alt="" />
        </div>
    )
}

export default RoadmapHero