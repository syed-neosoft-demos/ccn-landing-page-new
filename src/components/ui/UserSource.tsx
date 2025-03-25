'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const UserSource = () => {
    const searchParams = useSearchParams()
    useEffect(() => {
        // Extract GCLID from URL
        const source_user = searchParams.get('source_user')
        if (source_user) {
            // Store in localStorage
            localStorage.setItem('source_user', source_user)
        }
    }, [searchParams]) // Re-run if URL params change
    return null // This component doesn't render UI
}
export default UserSource
