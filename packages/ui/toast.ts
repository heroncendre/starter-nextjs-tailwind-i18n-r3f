'use client'

import { toast as sonnerToast, Toaster } from 'sonner'

export const toast = {
    success: (message: string) => sonnerToast.success(message),
    error: (message: string) => sonnerToast.error(message),
    info: (message: string) => sonnerToast(message),
}

export { Toaster }
