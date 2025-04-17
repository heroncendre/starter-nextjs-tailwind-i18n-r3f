'use client'

import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'

interface ThemeSwitchProps {
    checked: boolean
    onChange: (value: boolean) => void
    label?: string
}

export function ThemeSwitch({ checked, onChange, label = 'Dark mode' }: ThemeSwitchProps) {
    return (
        <div className="flex items-center gap-4 text-primary text-sm">
            <label htmlFor="theme-switch">{label}</label>
            <Switch.Root
                id="theme-switch"
                className={clsx(
                    'w-10 h-6 rounded-full relative transition',
                    'bg-secondary/40 data-[state=checked]:bg-primary'
                )}
                checked={checked}
                onCheckedChange={onChange}
            >
                <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform translate-x-1 data-[state=checked]:translate-x-5" />
            </Switch.Root>
        </div>
    )
}