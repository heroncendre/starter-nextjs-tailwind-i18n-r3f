import { fetchArticleBySlug, fetchArticlesStatic } from '../../../../lib/api'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlocksContent } from 'components/blog/BlocksContent'
import { extractVimeoId } from 'lib/helpers'
import { PhotoCarousel, PhotoCarouselProps, PhotoGrid, PhotoGridProps, Photo } from 'components/photo'

// Domaine du site (à personnaliser pour ton futur déploiement)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:1337'

interface ArticleContentBlock {
    __component: string
    [key: string]: any
}

interface Article {
    title: string
    slug: string
    content: ArticleContentBlock[]
}


// Génère toutes les pages statiques
export async function generateStaticParams() {
    const locales = ['fr', 'en']
    const allParams: { lang: string; slug: string }[] = []

    for (const locale of locales) {
        const articles = await fetchArticlesStatic(locale)
        articles.forEach(article => {
            allParams.push({
                lang: locale,
                slug: article.slug
            })
        })
    }

    return allParams
}


// SEO par article
export async function generateMetadata({ params }: { params: { lang: 'fr' | 'en', slug: string } }): Promise<Metadata> {
    const { slug, lang } = await params
    const article = await fetchArticleBySlug(slug, lang)

    if (!article) {
        return {
            title: 'Article introuvable',
            description: 'Cet article n’existe pas ou a été supprimé.',
            robots: {
                index: false,
                follow: false
            }
        }
    }

    const url = article.cover ? `${SITE_URL}${article.cover.url}` : undefined
    const alt = article.cover?.alternativeText || article.title 
    const canonicalUrl = `${SITE_URL}/${lang}/blog/${slug}`

    return {
        title: article.title,
        description: article.title,
        alternates: { canonical: canonicalUrl },
        robots: { index: true, follow: true },
        openGraph: {
            type: 'article',
            title: article.title,
            description: article.title,
            images: url ? [{ url, alt }] : [],
            locale: lang,
            url: canonicalUrl,
            publishedTime: article.publishedAt,
            modifiedTime: article.publishedAt
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.title,
            images: url ? [url] : []
        }
    }
}

// Page d'un article
export default async function ArticlePage({ params }: { params: { lang: 'fr' | 'en', slug: string } }) {
    const { lang, slug } = await params
    const article = await fetchArticleBySlug(slug, lang)

    // console.log('Article:', article)

    if (!article) {
        notFound()
    }

    return (
        <div className="p-8 space-y-4 w-4/12 flex flex-row items-center justify-center mx-auto">
            <div className="flex flex-col items-center justify-between mb-4">

                <h1 className="text-3xl font-bold">{article.title}</h1>

                {article.cover && (
                    <img
                        src={`${SITE_URL}${article.cover.url}`}
                        alt={article.cover.alternativeText || article.title}
                        className="rounded-lg shadow-md mt-4"
                    />
                )}

                {article.content && (
                    <div className="prose prose-lg max-w-none mt-8 flex flex-col items-center justify-center gap-8">
                        {article.content.map((block, index) => {
                                switch ((block as unknown as ArticleContentBlock).__component) {

                                    case 'article-content.text-block':
                                        return <BlocksContent key={index} content={((block as unknown) as ArticleContentBlock)?.text || ''} />

                                    case 'article-content.video-block':
                                        {
                                            const id = extractVimeoId((block as unknown as { video: { url: string } }).video.url)
                                            return <div key={index} className='w-full flex flex-col items-center justify-center'>
                                                        <iframe
                                                            src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&autoplay=0&height=720`}
                                                            className="w-[720px] h-[480px]"
                                                            allow="fullscreen; picture-in-picture"
                                                            allowFullScreen
                                                            title="L'atelier dans les nuages"
                                                        ></iframe>
                                                    </div>
                                        }

                                    case 'article-content.image-block':
                                        return (
                                            <img
                                                key={index}
                                                src={`${SITE_URL}${(block as { image: { url: string } }).image.url}`}
                                                alt={(block as { image: { alternativeText?: string } }).image.alternativeText || ''}
                                                className="rounded-lg shadow-md w-full"
                                            />
                                        )

                                    case 'article-content.photo-carousel':
                                        {
                                            const { photos, title, delay, loop, autoPlay } = block as unknown as PhotoCarouselProps
                                            return (
                                                <PhotoCarousel
                                                    key={index}
                                                    title={title}
                                                    delay={delay}
                                                    loop={loop}
                                                    autoPlay={autoPlay}
                                                    photos={photos.map((photo) => ({
                                                        url: photo.url,
                                                        alternativeText: photo.alternativeText
                                                    }))}
                                                />
                                            )
                                        }

                                    case 'article-content.photo-gallery':
                                        {
                                            const { photos, title, layout } = block as unknown as PhotoGridProps
        
                                            return <PhotoGrid
                                                key={index}
                                                layout={layout!}
                                                photos={photos.map((photo) => ({
                                                    url: photo.url,
                                                    alternativeText: photo.alternativeText
                                                }))}>
                                            </PhotoGrid>
                                        }

                                    default:
                                        return null
                                }
                            })}


                    </div>
                )}
        </div>
        </div>

    )
}
