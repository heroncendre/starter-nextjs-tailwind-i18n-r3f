/**
 * Hook personnalisé pour gérer un état local persistant dans le localStorage.
 *
 * 📌 Objectif :
 * Permettre à n’importe quel composant React de conserver un état entre les rechargements,
 * sans dépendre d’un store global comme Zustand.
 *
 * ✅ Use cases typiques :
 * - Mémoriser un choix d'utilisateur dans un composant (onglet actif, bannière fermée…)
 * - Gérer un état isolé réutilisable (ex. onboarding step)
 * - Prototyper ou isoler un comportement sans polluer le store global
 * - Utilisable dans des bibliothèques partagées indépendamment de Zustand
 *
 * ⚠️ À éviter :
 * - Pour des états globaux transversaux → privilégier Zustand
 * - Pour des données sensibles (non chiffrées)
 *
 * Exemple :
 * const [value, setValue] = usePersistentState('onboarding-step', 1)
 */

import { useEffect, useState } from 'react'

export function usePersistentState<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') return defaultValue
        try {
            const stored = localStorage.getItem(key)
            return stored ? JSON.parse(stored) as T : defaultValue
        } catch {
            return defaultValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch {}
    }, [key, value])

    return [value, setValue] as const
}
