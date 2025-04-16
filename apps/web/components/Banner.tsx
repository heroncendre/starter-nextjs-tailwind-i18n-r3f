'use client'

import { usePersistentState } from '../hooks/usePersistentState'
import { useTranslationKey } from '../hooks/useTranslationKey'

export function Banner() {
    const [dismissed, setDismissed] = usePersistentState<boolean>('banner-dismissed', false)
    const t = useTranslationKey()

    if (dismissed) return null

    return (
        <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
            <p>{t('banner.message')}</p>
            <button
                onClick={() => setDismissed(true)}
                className="ml-4 text-sm underline hover:text-gray-200"
            >
                {t('banner.dismiss')}
            </button>
        </div>
    )
}
