'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

import { useControls } from '../../hooks/useControls'
import { useCursor } from 'node_modules/@react-three/drei/index.js'

export function Cone(...props: any) {
    const ref = useRef<any>(null)
    const { rotating } = useControls()

    const [hovered, hover] = useState(false)
    useCursor(hovered)
    
    useFrame(() => {
        if (rotating && ref.current) {
            ref.current.rotation.y -= 0.01
        }
    })
    
    return (
        <mesh ref={ref} scale={[0.5, 0.5, 0.5]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            {...props}>
            <coneGeometry args={[2, 5, 8]} /> 
            <meshNormalMaterial wireframe={hovered} />
        </mesh> 
    )
}
