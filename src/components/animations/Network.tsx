'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'



function NetworkIllustration() {
    return (
        <div
            style={{
                maxWidth: '280px',
            }}
        >
            <DotLottieReact
                src="/animations/network.lottie"
                loop
                autoplay
            />
        </div>
    )
}

export default NetworkIllustration