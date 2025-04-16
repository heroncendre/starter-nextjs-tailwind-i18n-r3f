/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    pretty: true,
    exclude: ['/404'],
    sitemapSize: 5000,
    alternateRefs: [
        {
            href: 'https://www.example.com/fr',
            hreflang: 'fr'
        },
        {
            href: 'https://www.example.com/en',
            hreflang: 'en'
        }
    ],
    transform: async (config, path) => {
        // par défaut, path = /contact, /blog, / etc.
        const defaultLocale = 'fr'
        const otherLocales = ['en']

        const baseEntry = {
            loc: `${config.siteUrl}${path}`,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
            alternateRefs: [
                {
                    href: `${config.siteUrl}/fr${path}`,
                    hreflang: 'fr'
                },
                {
                    href: `${config.siteUrl}/en${path}`,
                    hreflang: 'en'
                }
            ]
        }

        if (path === '/blog') {
            const fetchArticlesFromStrapi = async () => {
                if (process.env.NODE_ENV !== 'production') {
                    console.warn('⚠️  [sitemap] Données mockées utilisées pour les articles. Remplacer fetchArticlesFromStrapi() avant mise en prod.')
                }
                
                return [
                    { slug: 'first-article', updatedAt: '2024-04-10T12:00:00.000Z' },
                    { slug: 'second-article', updatedAt: '2024-04-13T09:30:00.000Z' }    
                ]
            }

            const articles = await fetchArticlesFromStrapi()
            return articles.flatMap((article) => {
                return [
                    {
                        loc: `${config.siteUrl}/fr/blog/${article.slug}`,
                        lastmod: article.updatedAt,
                        changefreq: 'monthly',
                        priority: 0.6
                    },
                    {
                        loc: `${config.siteUrl}/en/blog/${article.slug}`,
                        lastmod: article.updatedAt,
                        changefreq: 'monthly',
                        priority: 0.6
                    }
                ]
            })
        }    

        return baseEntry
    }
}
