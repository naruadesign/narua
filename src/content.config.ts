import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'zod'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z.object({
      headline: z.string(),
      subheadline: z.string(),
      ctaPrimary: z.string(),
      ctaPrimaryHref: z.string(),
      ctaSecondary: z.string().optional(),
      ctaSecondaryHref: z.string().optional(),
    }).optional(),
    features: z.array(z.object({
      title: z.string(),
      icon: z.string().optional(),
      description: z.string(),
    })).optional(),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    author: z.string().default('Narua Team'),
    draft: z.boolean().default(false),
  }),
})

export const collections = { pages, blog }
