import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).optional(),
			github: z.string().url().optional(),
			demo: z.string().url().optional(),
		}),
});

const page1 = defineCollection({
	loader: glob({ base: './src/content/page1', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		date: z.coerce.date(),
		projects: z.array(z.string()),
		description: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

const page2 = defineCollection({
	loader: glob({ base: './src/content/page2', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
		github: z.string().url().optional(),
		marketplace: z.string().url().optional(),
	}),
});

export const collections = { pages, page1, page2 };
