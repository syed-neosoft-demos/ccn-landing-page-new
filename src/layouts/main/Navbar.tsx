'use client'
import {  useEffect } from 'react'
import { NavbarConfig } from './NavbarConfig'
import { usePathname } from 'next/navigation'
import { Button } from '@mui/material'
import Link from 'next/link'




function Navbar() {
    const pathname = usePathname()
    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    return (
        <>
            {
                NavbarConfig.desktop.map((item, index) => {
                    if (item.path == pathname) {
                        return (
                            <Button variant='outlined' key={index}>
                                <Link
                                    href={item.path}
                                    passHref
                                >

                                    {item.name}
                                </Link>
                            </Button>
                        )
                    }
                    return (
                        <div key={index}>
                            <Link
                                href={item.path}
                                passHref
                            >

                                {item.name}
                            </Link>
                        </div>
                    )
                }
                )
            }
        </>
    )
}


export default Navbar