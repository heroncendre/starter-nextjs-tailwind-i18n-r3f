import { Suspense } from "react"
import { PerspectiveCamera } from 'node_modules/@react-three/drei/index.js'

interface CommonProps {
    color: string
    fov?: number
}

export const Common = ({ color, fov=45 }: CommonProps) => (
    <Suspense fallback={null}>
        {color && <color attach='background' args={[color]} />}
        <ambientLight />
        <PerspectiveCamera makeDefault fov={fov} position={[0, 0, 6]} />
    </Suspense>
)
