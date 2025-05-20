// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://kw042.github.io',
    base: '/',
    markdown: {
        rehypePlugins: [
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
        ]
    }
});