'use client'

import * as Switch from '@radix-ui/react-switch'
import clsx from 'clsx'

interface ThemeSwitchProps {
    checked: boolean
    onChange: (value: boolean) => void
    label?: string
}

export const ThemeSwitch = ({ checked, onChange, label = 'Dark Mode' }: ThemeSwitchProps) => {
    return (
        <div className="flex items-center gap-3">
            <label htmlFor="theme-switch" className="text-sm">
                {label}
            </label>
            <Switch.Root
                id="theme-switch"
                className={clsx(
                    'w-10 h-6 rounded-full relative',
                    'bg-gray-300 data-[state=checked]:bg-black transition'
                )}
                checked={checked}
                onCheckedChange={onChange}
            >
                <Switch.Thumb
                    className={clsx(
                        'block w-4 h-4 bg-white rounded-full transition-transform',
                        'translate-x-1 data-[state=checked]:translate-x-5'
                    )}
                />
            </Switch.Root>
        </div>
    )
}
