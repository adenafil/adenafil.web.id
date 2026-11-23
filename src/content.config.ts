import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/works' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			lang: z.enum(['en', 'id']).default('en'),
			technologies: z.array(z.string()).min(1),
			order: z.number().int().positive(),
			draft: z.boolean().default(false),
			links: z
				.object({
					live: z.url().optional(),
					source: z.url().optional(),
					sources: z
						.array(
							z.object({
								label: z.string(),
								url: z.url(),
							}),
						)
						.optional(),
				})
				.default({}),
			cover: image().optional(),
			coverLayout: z.enum(['default', 'portrait']).default('default'),
			coverAlt: z.string().optional(),
			coverCaption: z.string().optional(),
		}),
});

export const collections = { works };
