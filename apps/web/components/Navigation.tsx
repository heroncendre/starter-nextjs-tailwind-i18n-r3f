'use client'

import { useTranslationKey } from 'hooks/useTranslationKey'
import Link from 'next/link'

export function Navigation() {
    const t = useTranslationKey()

    return (
        <nav className="flex gap-6 border-b p-4 mb-6">
        <Link href="/" className="hover:underline">{t('nav.items.home')}</Link>
        <Link href="/contact" className="hover:underline">{t('nav.items.contact')}</Link>
        <Link href="/blog" className="hover:underline">{t('nav.items.blog')}</Link>
        </nav>
    )
}
