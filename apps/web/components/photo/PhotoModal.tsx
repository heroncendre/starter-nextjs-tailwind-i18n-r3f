'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface PhotoModalProps {
    src: string
    alt?: string
    onClose: () => void
}

export function PhotoModal({ src, alt = '', onClose }: PhotoModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        const handleScroll = () => {
            document.body.style.overflow = 'hidden'
        }
        const handleRestore = () => {
            document.body.style.overflow = ''
        }

        document.addEventListener('keydown', handleKey)
        handleScroll()

        return () => {
            document.removeEventListener('keydown', handleKey)
            handleRestore()
        }
    }, [onClose])

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={handleBackgroundClick}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition"
                aria-label="Fermer"
            >
                ×
            </button>

            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-scale-in">
                <Image
                    src={src}
                    alt={alt}
                    width={1440}
                    height={960}
                    className="object-contain w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                    priority
                />
            </div>
        </div>
    )
}
