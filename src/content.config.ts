import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/works' }),
	schema: () =>
		z.object({
			title: z.string(),
			summary: z.string(),
			technologies: z.array(z.string()).min(1),
			order: z.number().int().positive(),
			draft: z.boolean().default(false),
			links: z
				.object({
					live: z.string().url().optional(),
					source: z.string().url().optional(),
					sources: z
						.array(
							z.object({
								label: z.string(),
								url: z.string().url(),
							}),
						)
						.optional(),
				})
				.default({}),
			cover: z.string().optional(),
			coverLayout: z.enum(['default', 'portrait']).default('default'),
			coverAlt: z.string().optional(),
			coverCaption: z.string().optional(),
			coverWidth: z.number().int().positive().optional(),
			coverHeight: z.number().int().positive().optional(),
		}),
});

export const collections = { works };
