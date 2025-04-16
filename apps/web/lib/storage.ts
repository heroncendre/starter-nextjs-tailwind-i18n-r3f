const STORAGE_KEY = 'global-store'

type PersistedKeys = 'theme'

const allowedKeys: PersistedKeys[] = ['theme']

type GlobalStoreData = {
    theme?: 'light' | 'dark'
    // d’autres clés possibles ici
}

export const storage = {
    get(): Partial<GlobalStoreData> {
        if (typeof window === 'undefined') return {}

        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            const parsed = raw ? JSON.parse(raw) : {}
            return Object.fromEntries(
                Object.entries(parsed).filter(([key]) => allowedKeys.includes(key as PersistedKeys))
            )
        } catch {
            return {}
        }
    },

    set(partial: Partial<GlobalStoreData>) {
        if (typeof window === 'undefined') return

        const current = storage.get()
        const filtered = Object.fromEntries(
            Object.entries(partial).filter(([key]) => allowedKeys.includes(key as PersistedKeys))
        )
        const updated = { ...current, ...filtered }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }
}
