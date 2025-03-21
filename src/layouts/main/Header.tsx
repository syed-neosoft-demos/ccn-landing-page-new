'use client'
import { SettingContext } from '@/contexts/SettingContext'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Typography,
} from '@mui/material'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SwippleDrawer from '@/components/mui/SwippleDrawer'
import Navbar from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const { settings } = useContext(SettingContext)
    if (settings.screen == 'mobile') return <MobileHeader />
    else return <DesktopHeader />
}

export function DesktopHeader() {
    const { settings, toggleTheme } = useContext(SettingContext)
    const pathname = usePathname()
    return (
        <AppBar enableColorOnDark color="transparent" sx={{
            backdropFilter: 'blur(10px)',
            zIndex: 99999999
        }}>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 1,
                }}
            >
                <Box>
                    <Typography variant="h4">
                        <Link href="/">
                            <Image
                                src="/logos/logo-white-bg.jpg"
                                alt="logo"
                                width={150}
                                height={50}
                                priority={true}
                                style={{
                                    borderRadius: '5px',
                                }}

                            />
                        </Link>
                    </Typography>
                </Box>

                <Box>
                    {pathname == '/' && (
                    <Button variant="contained" color='secondary'>
                        <Link href="/course-demo-registration/create-profile/cyber-security-associate">
                            Start Learning
                        </Link>
                    </Button>
                    )}
                    {/* <Button
                        color="secondary"
                        onClick={() => {
                            toggleTheme()
                        }}
                    >
                        {settings.themeMode == 'dark' ? (
                            <Sun color="#e0c200" />
                        ) : (
                            <Moon />
                        )}
                    </Button> */}
                </Box>
            </Container>
        </AppBar>
    )
}

export function MobileHeader() {
    const { settings, toggleTheme } = useContext(SettingContext)
    const [sideBarOpen, setSideBarOpen] = useState(false)
    return (
        <AppBar color="default">
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 1,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4">
                        <Image
                            src="/logos/logo-white-bg.jpg"
                            alt="logo"
                            width={180}
                            height={50}
                            priority={true}
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                    </Typography>
                </Box>
                {/* <Box>
                    <Button
                        color="secondary"
                        onClick={() => {
                            toggleTheme()
                        }}
                    >
                        {settings.themeMode == 'dark' ? (
                            <Sun color="#e0c200" />
                        ) : (
                            <Moon />
                        )}
                    </Button>
                </Box> */}
            </Container>
        </AppBar>
    )
}

export default Header
