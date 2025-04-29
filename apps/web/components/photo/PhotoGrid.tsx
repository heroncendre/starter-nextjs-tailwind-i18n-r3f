import { PhotoGridProps } from "."
import { Photo } from "./Photo"

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
        <div className="space-y-2">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}

            {layoutStructure.map((cols, rowIdx) => {
                const rowPhotos = photos.slice(photoIndex, photoIndex + cols)
                photoIndex += cols

                return (
                    <div className="flex gap-2" key={`key-row-${rowIdx}`}>
                        {rowPhotos.map((photo, idx) => (
                            <div className="flex-1" key={`key-picture-${rowIdx + idx}`}>
                                <Photo src={`http://localhost:1337${photo.url}`} alt={photo.alternativeText || ''}  />
                                {/* <img
                                    src={`http://localhost:1337${photo.url}`}
                                    alt={photo.alternativeText || ''}
                                    className="w-full h-full object-cover rounded-xl"
                                /> */}
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}
