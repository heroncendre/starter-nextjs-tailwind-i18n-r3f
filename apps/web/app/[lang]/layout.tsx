'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '../context/LanguageContext'
import { HydrationBoundary } from '@ui/core'
import { AppShell } from '../../components/layout/AppShell'
import { usePathname } from 'next/navigation'

export default function LangLayout({children}: {children: ReactNode}) {
    const pathname = usePathname()
    const locale = pathname.split('/')[1] || 'fr'

    return (
        <LanguageProvider lang={locale as 'fr' | 'en'}>
            <HydrationBoundary>
                <AppShell>{children}</AppShell>
            </HydrationBoundary>
        </LanguageProvider>
    )
}
