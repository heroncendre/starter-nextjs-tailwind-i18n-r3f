import { Metadata } from 'next'
import Link from 'next/link'

import { fetchArticlesStatic, fetchArticles } from '../../../lib/api'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:1337'

// ✨ Générer les params statiques
export async function generateStaticParams() {
    return [] // Pas besoin ici car page /blog ne dépend pas d'un param dynamique (slug)
}

// ✨ SEO pour l'accueil du blog
export async function generateMetadata({ params }: { params: { lang: 'fr' | 'en' } }): Promise<Metadata> {
    const { lang } = await params

    return {
        title: lang === 'fr' ? 'Blog' : 'Blog',
        description: lang === 'fr' ? 'Bienvenue sur notre blog' : 'Welcome to our blog',
        alternates: {
            canonical: `${SITE_URL}/${lang}/blog`
        },
        robots: {
            index: true,
            follow: true
        }
    }
}

// ✨ Page d'accueil du blog
export default async function BlogHomePage({ params }: { params: { lang: 'fr' | 'en' } }) {
    const { lang } = await params
    const articles = await fetchArticles(lang)

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-4xl font-bold mb-8">
                {lang === 'fr' ? 'Nos derniers articles' : 'Our latest articles'}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <div
                        key={article.id}
                        className="border rounded-lg overflow-hidden shadow-md bg-white flex flex-col"
                    >
                        {article.cover && (
                            <img
                                src={`http://localhost:1337${article.cover.url}`}
                                alt={article.cover.alternativeText || article.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>

                            <div className="mt-auto">
                                <Link
                                    href={`/${lang}/blog/${article.slug}`}
                                    className="inline-block mt-4 text-primary font-semibold hover:underline"
                                >
                                    {lang === 'fr' ? 'Voir plus →' : 'Read more →'}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
