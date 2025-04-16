'use client'

import { ReactNode, Suspense, forwardRef, useImperativeHandle, useRef } from 'react'
import { PerspectiveCamera, OrbitControls, View as ViewImpl } from 'node_modules/@react-three/drei/index.js'

import { R3F } from './R3F'

interface R3FViewProps {
    children?: ReactNode;
    className?: string;
    orbit?: boolean;
}

export const R3FView = forwardRef(({ children, orbit, ...props }: R3FViewProps, ref) => {
    const localRef = useRef<HTMLDivElement | null>(null)
    const localRefTrack = localRef! as React.RefObject<HTMLElement>
    useImperativeHandle(ref, () => localRef.current)

    return (
        <>
        <div ref={localRef} {...props} />
        <R3F>
            <ViewImpl track={localRefTrack}>
                {children}
                {orbit && <OrbitControls />}
            </ViewImpl>
        </R3F>
        </>
    )
})


