'use client'

import dynamic from 'next/dynamic'

import { ThemeSwitch } from '@ui/core'
import { useGlobalStore } from '../../store/useGlobalStore'
import { useTranslationKey } from 'hooks/useTranslationKey'
import { Suspense } from 'react'

const R3FView = dynamic(() => import('components/three/R3F/R3FView').then((mod) => mod.R3FView), { ssr: false}) 
const Cube = dynamic(() => import('components/three/Cube').then((mod) => mod.Cube), { ssr: false}) 
const Cone = dynamic(() => import('components/three/Cone').then((mod) => mod.Cone), { ssr: false}) 
const Common = dynamic(() => import('components/three/Common').then((mod) => mod.Common), { ssr: false}) 

export default function HomePage() {
    const theme = useGlobalStore((s) => s.theme)
    const toggleTheme = useGlobalStore((s) => s.toggleTheme)
    const t = useTranslationKey()

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">{t('home.title')}</h1>
            <ThemeSwitch
                checked={theme === 'dark'}
                label={theme === 'dark' ? t('theme.dark') : t('theme.light')}
                onChange={toggleTheme}
            />
            <p className="mt-4 text-sm">{t('home.theme')} : {theme === 'dark' ? t('theme.dark') : t('theme.light')}</p>

            <div className='flex flex-row justify-start gap-24 p-6'>
                <div className='flex flex-col justify-center gap-2 items-center'>
                    <h2 className='font-bold leading-none'>{t('home.cubeTitle')}</h2>

                    <R3FView className='h-96 w-96 p-6 rounded-xl'>
                        <Suspense fallback={null}>
                            <Common fov={75} color={'lightpink'} />
                            <Cube />
                        </Suspense>
                    </R3FView>
                </div>
                
                <div className='flex flex-col justify-center gap-2 items-center'>
                    <h2 className='font-bold leading-none'>{t('home.coneTitle')}</h2>

                    <R3FView orbit className='h-96 w-96 p-6 rounded-xl'>
                        <Suspense fallback={null}>
                            <Common fov={40} color={'lightblue'}/>
                            <Cone />
                        </Suspense>
                    </R3FView>
                </div>
            </div>
            
        </main>
    )
}
