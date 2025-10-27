import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 5173,
		cors: true,
		hmr: {
			protocol: 'ws',
			host: 'localhost',
			clientPort: 5173,
			overlay: false
		}
	},
	plugins: [
		react(),
		federation({
			name: 'host',
			remotes: {
				react_app: 'http://localhost:5174/assets/remoteEntry.js'
				// vue_app: 'http://localhost:5175/assets/remoteEntry.js'
			},
			shared: {
				react: {
					singleton: true,
					eager: false,
					requiredVersion: '^19.1.1'
				} as any,
				'react-dom': {
					singleton: true,
					eager: false,
					requiredVersion: '^19.1.1'
				} as any
			}
		})
	],
	build: {
		target: 'esnext',
		sourcemap: false,
		modulePreload: false,
		minify: true,
		cssCodeSplit: true
	}
})
