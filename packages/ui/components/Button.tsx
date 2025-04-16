'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const button = cva(
    'inline-flex items-center justify-center rounded px-4 py-2 font-medium transition',
    {
        variants: {
        intent: {
            primary: 'bg-black text-white hover:bg-gray-800',
            secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-100'
        },
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        }
        },
        defaultVariants: {
        intent: 'primary',
        size: 'md'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button = ({ className, intent, size, ...props }: ButtonProps) => (
    <button className={clsx(button({ intent, size }), className)} {...props} />
)
