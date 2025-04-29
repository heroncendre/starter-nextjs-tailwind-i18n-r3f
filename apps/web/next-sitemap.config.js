/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

module.exports = {
    siteUrl: SITE_URL,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    changefreq: 'weekly',
    pretty: true,
    exclude: ['/404'],
    priority: 0.7,
    sitemapSize: 5000,
    alternateRefs: [
        {
            href: `${SITE_URL}/fr`,
            hreflang: 'fr'
        },
        {
            href: `${SITE_URL}/en`,
            hreflang: 'en'
        }
    ],
    transform: async (config, path) => {
        // Ignore les assets statiques
        if (path.includes('.')) return null

        const baseEntry = {
            loc: `${config.siteUrl}${path}`,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString()
        }

        return baseEntry
    },
    additionalPaths: async (config) => {
        const { fetchArticlesForSitemap } = require('./scripts/fetch-articles-sitemap')
        const articles = await fetchArticlesForSitemap()

        return articles.flatMap(({ lang, slug, lastmod }) => ({
            loc: `${SITE_URL}/${lang}/blog/${slug}`,
            lastmod
        }))
    }
}
