'use client'

import tunnel from 'tunnel-rat'

export const r3fPortal = tunnel()

export const R3F = ({ children }: { children: React.ReactNode }) => {
    return <r3fPortal.In>{children}</r3fPortal.In>
}