'use client'

import SettingContextProvider from '@/contexts/SettingContext'
import ConfiguredThemeProvider from '@/theme/ThemeProvider'

type Props = {
    children: React.ReactNode
}

export default function ContextProviders({ children }: Props) {
    return (
        <>
            <SettingContextProvider>
                <ConfiguredThemeProvider>{children}</ConfiguredThemeProvider>
            </SettingContextProvider>
        </>
    )
}
