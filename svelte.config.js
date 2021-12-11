import preprocess from 'svelte-preprocess';
import path from 'path';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					'@domain': path.resolve('./src/domain'),
					'@abi': path.resolve('./src/abi'),
					'@store': path.resolve('./src/store'),
					'@services': path.resolve('./src/services'),
					'@utils': path.resolve('./src/utils'),
					$lib: path.resolve('./src')
				}
			}
		}
	}
};

export default config;
