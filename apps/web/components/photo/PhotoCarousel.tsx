'use client'

import useEmblaCarousel from 'embla-carousel-react' 
import Autoplay from 'embla-carousel-autoplay'

import { PhotoCarouselProps } from '.'
import { useRef } from 'react'
import { Photo } from './Photo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:1337'


export function PhotoCarousel({ photos, title, delay, loop, autoPlay }: PhotoCarouselProps) {
    const autoplayRef = useRef(
        Autoplay({ delay: delay * 1000, stopOnInteraction: false, stopOnMouseEnter: true })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop },
        autoPlay ? [autoplayRef.current] : []
    )

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="">
            {title && (
                <h2 className="text-2xl font-bold text-black">{title}</h2>
            )}

            <div className="relative overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                    {photos.map((photo, index) => (
                        <div className="flex-[0_0_100%] relative" key={index}>
                            <img
                                src={`${SITE_URL}${photo.url}`}
                                alt={photo.alternativeText || ''}
                            />
                        </div>
                    ))}
                </div>

                {/* Chevrons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full shadow transition"
                    aria-label="Previous"
                >
                &nbsp;‹&nbsp;
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full shadow transition"
                    aria-label="Next"
                >
                &nbsp;›&nbsp;
                </button>
            </div>

            
        </div>
    )
}
