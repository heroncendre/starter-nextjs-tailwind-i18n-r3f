import { useEffect, useState } from 'react'

/**
 * Hook permettant de détecter si le composant est hydraté côté client.
 * Utile pour éviter les warnings de mismatch SSR/CSR quand tu accèdes
 * à des données persistées (localStorage, Zustand, etc.)
 */
export function useHydrated(): boolean {
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    return hydrated
}
