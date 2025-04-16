'use client'

import { useGlobalStore } from '../../../store/useGlobalStore'
import { useTranslationKey } from 'hooks/useTranslationKey'

export default function ContactPage() {
    const theme = useGlobalStore((s) => s.theme)
    const t = useTranslationKey()
    
    return (
        <main className="p-8">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2">{t('blog.theme')} : {theme}</p>
        </main>
    )
}
