const SITE_API = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

async function fetchArticlesForSitemap() {
    const locales = ['fr', 'en']
    const allArticles = []

    for (const locale of locales) {
        const res = await fetch(`${SITE_API}/api/articles?locale=${locale}`)
        const data = await res.json()

        if (data.data) {
            for (const article of data.data) {
                allArticles.push({
                    lang: locale,
                    slug: article.attributes.slug,
                    lastmod: article.attributes.updatedAt || article.attributes.publishedAt
                })
            }
        }
    }

    return allArticles
}

module.exports = { fetchArticlesForSitemap }
