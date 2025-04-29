import { fetcher } from './fetcher'
import { type BlocksContent } from '@strapi/blocks-react-renderer'


export interface Article {
    id: number
    title: string
    slug: string
    content: BlocksContent
    publishedAt: string
    cover?: {
        url: string
        alternativeText: string | null
    }
}

/**
 * Récupère tous les articles pour un locale donné
 */
export async function fetchArticles(locale: string = 'fr'): Promise<Article[]> {
    console.log(`Fetching articles for locale: ${locale}`)
    const articles = await fetcher<Article[]>(`/api/articles?locale=${locale}&populate=cover`)
    return articles.map(article => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        content: article.content,
        publishedAt: article.publishedAt,
        cover: article.cover
    }))
}

/**
 * Récupère les slugs uniquement pour la génération statique
 */
export async function fetchArticlesStatic(locale: string = 'fr'): Promise<Article[]> {
    const articles = await fetcher<Article[]>(`/api/articles?locale=${locale}`)
    return articles.map(article => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        content: article.content,
        publishedAt: article.publishedAt,
        cover: article.cover
    }))
}

/**
 * Récupère un article par son slug
 */
export async function fetchArticleBySlug(slug: string, locale: string = 'fr'): Promise<Article | null> {
    const url = `
        /api/articles?locale=${locale}
        &filters[slug][$eq]=${slug}
        &populate[content][on][article-content.text-block][populate]=*
        &populate[content][on][article-content.image-block][populate]=*
        &populate[content][on][article-content.video-block][populate]=*
        &populate[content][on][article-content.photo-gallery][populate][0]=photos
        &populate[content][on][article-content.photo-carousel][populate][0]=photos
        `.replace(/\s/g, '')

    const data = await fetcher<Article[]>(url)
    // console.log(data)
    return data.length > 0 ? data[0] : null
}
