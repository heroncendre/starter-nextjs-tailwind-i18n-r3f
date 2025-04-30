import { R3FLayout } from 'components/three/R3F/R3FLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import {Toaster} from '@ui/toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Starter',
    description: 'Starter monorepo multilingue'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={`${inter.className}`}>
                <R3FLayout>
                    {children}
                </R3FLayout>
                <Toaster
                    position="top-center"
                    richColors
                    duration={2000}
                />
            </body>
        </html>
    )
}
