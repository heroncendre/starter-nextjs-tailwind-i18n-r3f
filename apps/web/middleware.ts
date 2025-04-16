import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const supportedLocales = ['fr', 'en']
const defaultLocale = 'fr'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // Ignorer fichiers statiques / API
    if (
        pathname.startsWith('/api') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/favicon') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return
    }

    // Redirection automatique si on arrive sur `/` sans langue
    const pathnameIsMissingLocale = supportedLocales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
    }

    return
}

export const config = {
    matcher: ['/((?!_next|favicon|robots\\.txt|sitemap\\.xml).*)']
}
