'use client'

import { useTranslationKey } from 'hooks/useTranslationKey'
import { useGlobalStore } from '../../../store/useGlobalStore'

export default function BlogPage() {
    const theme = useGlobalStore((s) => s.theme)
    const t = useTranslationKey()
    
    return (
        <main className="p-8">
        <h1 className="text-2xl font-bold">Blog</h1>
        <p className="mt-2">{t('blog.theme')} : {theme}</p>
        </main>
    )
}
