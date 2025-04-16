'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
const R3FScene = dynamic(() => import('./R3FScene'), { ssr: false })


export const R3FLayout = ({ children }: { children: React.ReactNode }) => {  
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <div ref={ref} className="relative w-full h-full overflow-auto touch-auto">
            {children}
            <R3FScene eventSource={ref} eventPrefix='client'/> 
        </div>
    )
}
