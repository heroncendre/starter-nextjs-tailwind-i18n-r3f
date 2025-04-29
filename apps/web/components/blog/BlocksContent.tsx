'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'

interface BlocksContentProps {
    content: any
}

export function BlocksContent({ content }: BlocksContentProps) {
    return (
        <div className="prose prose-lg max-w-none">
            <BlocksRenderer
                content={content}
                blocks={{
                    paragraph: ({ children }) => <p className="text-neutral-900">{children}</p>,
                    heading: ({ children, level }) => {
                        const Tag = `h${level}` as keyof JSX.IntrinsicElements
                        return <Tag className="mt-6 mb-2 font-bold text-primary">{children}</Tag>
                    },
                    link: ({ children, url }) => (
                        <Link href={url} className="text-primary underline hover:text-primary/80">
                            {children}
                        </Link>
                    )
                }}
            />
        </div>
    )
}
