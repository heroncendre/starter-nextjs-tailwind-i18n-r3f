'use client'

import { useGlobalStore } from '../../store/useGlobalStore'
import { Navigation } from '../Navigation'
import { Banner } from '../Banner'
import { useI18n } from '../../app/context/LanguageContext'
import { Header } from './Header'
import { StorageReset } from 'components/dev/StorageReset'

interface Props {
    children: React.ReactNode
}

export function AppShell({ children }: Props) {
    const theme = useGlobalStore((s) => s.theme)
    const t = useI18n()

    return (
        <div className={`flex flex-col justify-between h-full ${theme === 'dark' ? 'text-white bg-slate-900' : 'text-black bg-slate-100'}`}>  
            <div className='flex flex-col flex-grow'>
                <StorageReset />
                <Header />
                <Banner />
                <Navigation />  
                {children}
            </div>
            <footer className="p-4 text-center text-xs text-gray-500 border-t mt-8">
                {t.footer.rights}
            </footer>
        </div>
    )
}
