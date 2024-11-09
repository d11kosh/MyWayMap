import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		strictPort: true,
		port: 5200,
		host: true
	},
	plugins: [
		sveltekit(),
	]
});
