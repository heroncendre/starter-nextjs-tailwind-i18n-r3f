import { PhotoGridProps } from "."
import { Photo } from "./Photo"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:1337'

interface Photo {
    url: string
    alternativeText?: string
}

function parseGalleryLayout(layout: string): number[] {
    return layout.split('-').map((n) => parseInt(n.trim(), 10)).filter(Boolean)
}


export function PhotoGrid({ photos, layout, title }: PhotoGridProps) {
    const layoutStructure = parseGalleryLayout(layout)
    let photoIndex = 0

    console.log(`Photo grid, layout: ${layout}, photos: ${photos.length}, rows: ${layoutStructure.length}`)

    return (
        <div className="w-full space-y-2">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}

            {layoutStructure.map((cols, rowIdx) => {
                const rowPhotos = photos.slice(photoIndex, photoIndex + cols)
                photoIndex += cols

                return (
                    <div className="w-full flex gap-2" key={`key-row-${rowIdx}`}>
                        {rowPhotos.map((photo, idx) => (
                            <div key={`key-picture-${rowIdx + idx}`} className={`flex-1 min-w-[20%] flex-shrink-0`}>  
                                <Photo src={`${SITE_URL}${photo.url}`} alt={photo.alternativeText || ''}  />
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}
