'use client'

import { usePersistentState } from 'hooks/usePersistentState'
import { useTranslationKey } from 'hooks/useTranslationKey'
import { useEffect, useRef, useState } from 'react'

export function Banner() {
    const [dismissed, setDismissed] = usePersistentState<boolean>('banner-dismissed', false)
    const [closing, setClosing] = useState(false)
    const [tempClosed, setTempClosed] = useState(false)
    const t = useTranslationKey()
    const ref = useRef<HTMLDivElement>(null)

    // Clic à l’extérieur : fermeture temporaire
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setTempClosed(true)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Masquer complètement après animation
    const shouldHide = dismissed || tempClosed

    if (shouldHide) return null

    const handleDismiss = () => {
        setClosing(true)
        setTimeout(() => setDismissed(true), 300)
    }

    return (
        <div
            ref={ref}
            className={`
                fixed top-0 left-0 w-full z-50
                bg-blue-500 text-white p-4 flex items-center justify-between
                shadow-md animate-in slide-in-from-top duration-300
                ${closing ? 'animate-out slide-out-to-top' : ''}
            `}
        >
            <p>{t('banner.message')}</p>
            <button
                onClick={handleDismiss}
                className="ml-4 text-sm underline hover:text-gray-200"
            >
                {t('banner.dismiss')}
            </button>
        </div>
    )
}
