'use client'

import { Canvas } from '@react-three/fiber'
import { r3fPortal } from './R3F'

import * as THREE from 'three'
import { Preload } from 'node_modules/@react-three/drei/index.js'

export default function R3FScene({...props}: any) {
    return (
        <div className="fixed top-0 left-0 inset-0 z-10 w-screen h-screen pointer-events-none">
            <Canvas {...props} onCreated={(state) => (state.gl.toneMapping = THREE.ACESFilmicToneMapping)}>
                <r3fPortal.Out />
                <Preload all />
            </Canvas>
        </div>

    )
}
