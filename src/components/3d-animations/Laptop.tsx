import { SettingContext } from '@/contexts/SettingContext'
import React, { useContext } from 'react'



function Laptop3DComponent() {
    const { settings } = useContext(SettingContext)
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                settings.themeMode == "dark" ? <iframe src="/3d-animations/laptop-dark/index.html" style={{
                    width: '100%',
                    height: '100%',
                }} ></iframe> : <iframe src="/3d-animations/laptop-light/index.html" style={{
                    width: '100%',
                    height: '100%',
                }} ></iframe>
            }
        </div>
    )
}

export default Laptop3DComponent