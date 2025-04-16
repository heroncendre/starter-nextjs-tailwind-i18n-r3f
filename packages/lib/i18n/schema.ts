import { z } from '@lib/core'

export const translationSchema = z.object({
    header: z.object({
        title: z.string()
    }),
    footer: z.object({
        rights: z.string()
    }),
    banner: z.object({
        message: z.string(),
        dismiss: z.string()
    }),
    nav: z.object({
        items: z.object({
            home: z.string(),
            contact: z.string(),
            blog: z.string()
        })
    }),
    theme: z.object({
        dark: z.string(),
        light: z.string()
    }),
    home: z.object({
        title: z.string(),
        theme: z.string(),
        cubeTitle: z.string(),
        coneTitle: z.string()
    }),
    contact: z.object({
        title: z.string(),
        theme: z.string()
    }),
    blog: z.object({
        title: z.string(),
        theme: z.string()
    })
})

export type Translation = z.infer<typeof translationSchema>
