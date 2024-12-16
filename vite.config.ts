import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from '@hazycora/vite-plugin-svelte-svg';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [
		sveltekit(),
		svelteSVG({
			svgoConfig: {},
			requireSuffix: true
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
