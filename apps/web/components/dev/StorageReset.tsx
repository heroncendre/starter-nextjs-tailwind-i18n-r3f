'use client'

import { useEffect } from 'react'

export function StorageReset() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)

        if (params.get('clearStorage') === 'true') {
            // redirection différée pour laisser React tranquille
            setTimeout(() => {
                console.warn('%c[Dev] localStorage reset triggered by URL param', 'color: orange; font-weight: bold')
                localStorage.removeItem('global-store')
                localStorage.removeItem('banner-dismissed')
    
                params.delete('clearStorage')
                const cleanUrl = `${window.location.pathname}?${params.toString()}`.replace(/\?$/, '')
    
                window.location.replace(cleanUrl)
            }, 100)
        }
    }, [])

    return null
}