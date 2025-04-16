import { z } from '@lib/core'

const homeSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    banner: z.object({
        message: z.string(),
        dismiss: z.string()
    })
})

const contactSchema = z.object({
    title: z.string()
})

const blogSchema = z.object({
    title: z.string()
})

const footerSchema = z.object({
    rights: z.string(),
    legal: z.string()
})

export const translationSchema = z.object({
    home: homeSchema,
    contact: contactSchema,
    blog: blogSchema,
    footer: footerSchema
})

export type Translation = z.infer<typeof translationSchema>
