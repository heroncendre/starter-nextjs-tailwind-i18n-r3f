'use client'

import { create } from 'zustand'
import { storage } from '../lib/storage'

type Theme = 'light' | 'dark'

type GlobalState = {
    theme: Theme
    toggleTheme: () => void
}

const defaultTheme: Theme =
    typeof window !== 'undefined'
        ? storage.get().theme || 'light'
        : 'light'

export const useGlobalStore = create<GlobalState>((set) => ({
    theme: defaultTheme,
    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light'
            storage.set({ theme: newTheme })
            return { theme: newTheme }
        })
}))
