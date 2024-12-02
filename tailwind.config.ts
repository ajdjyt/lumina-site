import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				prim1: 'var(--prim1)',
				prim2: 'var(--prim2)',
				acc1: 'var(--acc1)',
				acc2: 'var(--acc2)',
				acc3: 'var(--acc3)'
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;
