import { useI18n } from '../app/context/LanguageContext'

/**
 * Permet d'accéder à une clé de traduction dynamiquement, par chemin type "nav.items.blog"
 * Retourne undefined si la clé n'existe pas.
 */
export function useTranslationKey() {
    const t = useI18n()

    return function translate(keyPath: string): string | undefined {
        return keyPath
            .split('.')
            .reduce((acc: any, key: string) => (acc && acc[key] !== undefined ? acc[key] : undefined), t)
    }
}
