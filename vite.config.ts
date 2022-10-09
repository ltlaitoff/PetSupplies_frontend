/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin(),
		svgLoader({
			defaultImport: 'component'
		})
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					homePage: ['./src/pages/HomePage/HomePage.vue'],
					catalogPage: ['./src/pages/CatalogPage/CatalogPage.vue'],
					shoppingCart: ['./src/pages/ShoppingCart/ShoppingCart.vue'],
					notFoundPage: ['./src/pages/NotFoundPage/NotFoundPage.vue']
				}
			}
		}
	},
	test: {
		globals: true,
		environment: 'happy-dom'
	}
})
