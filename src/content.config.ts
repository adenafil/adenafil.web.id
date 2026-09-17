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
				})
				.default({}),
			cover: z.string().optional(),
			coverAlt: z.string().optional(),
		}),
});

export const collections = { works };
