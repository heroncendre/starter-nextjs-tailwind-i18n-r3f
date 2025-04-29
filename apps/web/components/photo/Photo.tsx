'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhotoModal } from './PhotoModal'

interface PhotoProps {
    src: string
    alt?: string
    className?: string
    objectFit?: 'cover' | 'contain'
    width?: number
    height?: number
}

export function Photo({
    src,
    alt = '',
    className = '',
    objectFit = 'cover',
    width = 1200,
    height = 800
}: PhotoProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className={`relative overflow-hidden rounded-lg group cursor-zoom-in ${className}`}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading="lazy"
                    className={`w-full h-full object-${objectFit} transition-transform duration-300 ease-in-out group-hover:scale-105`}
                />
            </div>

            {isOpen && <PhotoModal src={src} alt={alt} onClose={() => setIsOpen(false)} />}
        </>
    )
}
