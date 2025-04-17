import type { Config } from 'tailwindcss'
import {config as baseConfig} from '../../packages/ui/tailwind.config'

const config: Config = {
    ...baseConfig,
    content: [
        '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/*.{js,ts,jsx,tsx}',
        '../../packages/lib/components/**/*.{js,ts,jsx,tsx}',
        '../../packages/lib/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}'
    ]
}

export default config

