'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import clsx from 'clsx'

const buttonVariants = tv({
    base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none animate-in fade-in-0',
    variants: {
        variant: {
            default: 'bg-primary text-white hover:bg-primary/90',
            outline: 'border border-primary text-primary hover:bg-primary/10',
            ghost: 'bg-transparent hover:bg-primary/10 text-primary'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-8 px-3 text-sm',
            lg: 'h-12 px-6 text-lg'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button className={clsx(buttonVariants({ variant, size }), className)} {...props} />
    )
}
