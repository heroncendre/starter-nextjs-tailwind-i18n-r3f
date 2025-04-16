// apps/web/store/useControls.ts
import { create } from 'zustand'

type State = {
    rotating: boolean
    toggle: () => void
}

export const useControls = create<State>((set) => ({
    rotating: true,
    toggle: () => set((state) => ({ rotating: !state.rotating }))
}))
