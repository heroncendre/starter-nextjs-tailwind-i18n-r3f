'use client'

import { useHydrated } from '../../lib/hooks/useHydrated'

interface Props {
    children: React.ReactNode
    fallback?: React.ReactNode
}

/**
 * Wrapper qui attend la fin de l'hydratation côté client
 * avant d'afficher son contenu.
 */
export function HydrationBoundary({ children, fallback = null }: Props) {
    const hydrated = useHydrated()
    return hydrated ? <>{children}</> : <>{fallback}</>
}
