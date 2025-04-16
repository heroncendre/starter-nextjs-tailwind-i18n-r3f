'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'

const supportedLangs = ['fr', 'en'] as const

export function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    const currentLang = pathname.split('/')[1] || 'fr'

    const slug = useMemo(() => {
        const parts = pathname.split('/')
        return '/' + parts.slice(2).join('/')
    }, [pathname])

    const handleChange = (lang: string) => {
        const newPath = `/${lang}${slug}`
        router.push(newPath)
    }

    return (
        <div className="flex gap-2 text-sm">
            {supportedLangs.map((lang) => (
                <button
                    key={lang}
                    onClick={() => handleChange(lang)}
                    className={`px-2 py-1 rounded ${lang === currentLang ? 'font-bold underline' : 'hover:underline'}`}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    )
}
