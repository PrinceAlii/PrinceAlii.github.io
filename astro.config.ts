import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://ali.bonagdaran.com',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Ali Bonagdaran',
			themeColor: '#4169e1',
			openGraph: {
				home: {
					title: 'Ali Bonagdaran',
					description:
						'Sydney-based IT graduate · Cloud, DevOps, and developer platforms (AWS, Kubernetes, GitLab).',
				},
				blog: {
					title: 'Blog',
					description: 'Thoughts and writings.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
	adapter: node({
		mode: 'standalone',
	}),
});

export default config;
