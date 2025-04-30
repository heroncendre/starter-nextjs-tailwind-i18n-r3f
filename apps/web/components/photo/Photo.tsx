'use client'

import { useState } from 'react'
import Image from 'next/image'
import {clsx} from '../../../../packages/ui'
import { PhotoModal } from './PhotoModal'

interface PhotoProps {
    src: string
    alt?: string
    className?: string
    objectFit?: 'cover' | 'contain'
    width?: number
    height?: number
    sizes?: string
    enableModal?: boolean
}

export function Photo({
    src,
    alt = '',
    className = '',
    objectFit = 'cover',
    width = 1200,
    height = 800,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    enableModal = true
}: PhotoProps) {
    const [isOpen, setIsOpen] = useState(false)
    const wrapperClass = clsx(
        'relative overflow-hidden rounded-lg group',
        enableModal && 'cursor-zoom-in',
        className
    )

    return (
        <>
            <div
                className={wrapperClass}
                onClick={() => enableModal && setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    loading="lazy"
                    className={clsx(
                        `w-full h-auto object-${objectFit} transition-transform duration-300 ease-in-out`,
                        'group-hover:scale-105'
                    )}
                />
            </div>

            {isOpen && enableModal && (
                <PhotoModal src={src} alt={alt} onClose={() => setIsOpen(false)} />
            )}
        </>
    )
}
