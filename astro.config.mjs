// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://adenafilfirmansah.my.id',
	trailingSlash: 'ignore',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Ubuntu',
			cssVariable: '--font-ubuntu',
			weights: [400, 500, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
	],
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !/^\/404\/?$/.test(new URL(page).pathname),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
