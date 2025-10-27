import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: 5174,
		cors: true
	},
	plugins: [
		react(),
		federation({
			mode: 'development',
			name: 'react_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/app/mount.tsx'
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
		}),
		tsconfigPaths()
	],
	build: {
		target: 'esnext',
		sourcemap: false,
		modulePreload: false,
		minify: true,
		cssCodeSplit: true
	}
})
