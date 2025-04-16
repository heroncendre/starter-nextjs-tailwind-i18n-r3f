'use client'

import React, { createContext, useContext } from 'react'
import fr from '../../i18n/fr.json'
import en from '../../i18n/en.json'
import { z, translationSchema, Translation } from '@lib/core'

type Lang = 'fr' | 'en'

function validateLocale(locale: Lang, data: unknown): Translation | null {
    const result = translationSchema.safeParse(data)
    if (!result.success) {
        console.warn(`[i18n] Invalid translation for "${locale}":`, result.error.format())
        return null
    }
    return result.data
}

const enValid = validateLocale('en', en)
if (!enValid) throw new Error('FATAL: en.json is invalid and cannot be used as fallback')

const fallback = enValid

const translations: Record<Lang, Translation> = {
    fr: validateLocale('fr', fr) ?? fallback,
    en: fallback
}

const LanguageContext = createContext<Translation>(fallback)

export const useI18n = () => useContext(LanguageContext)

interface LanguageProviderProps {
    children: React.ReactNode
    lang?: Lang
}

export const LanguageProvider = ({ children, lang = 'en' }: LanguageProviderProps) => {
    const value = translations[lang] ?? fallback

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}
