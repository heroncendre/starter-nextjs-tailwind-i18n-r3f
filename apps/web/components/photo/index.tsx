import { PhotoCarousel } from './PhotoCarousel'
import { PhotoGrid } from './PhotoGrid'

export {
    PhotoCarousel,
    PhotoGrid
}

export interface Photo {
    url: string
    alternativeText?: string
}

export interface PhotoCarouselProps {
    photos: Photo[]
    title?: string
    delay: number
    loop: boolean
    autoPlay: boolean
}

export interface PhotoGridProps {
    photos: Photo[]
    layout: string // ex: "3-1-2"
    title?: string
}
