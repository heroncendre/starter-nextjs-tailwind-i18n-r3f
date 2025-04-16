'use client'

import Link from 'next/link'
import { LanguageSwitcher } from 'components/LanguageSwitcher'
import { useTranslationKey } from 'hooks/useTranslationKey'

export function Header() {
    const t = useTranslationKey()

    return (
        <header className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-xl font-bold">
                🧩 {t('header.title')}
            </Link>

            <div className="flex items-center gap-2">
                <LanguageSwitcher />
            </div>
        </header>
    )
}
