// import federation from '@originjs/vite-plugin-federation'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const deps = require('./package.json').dependencies

export default defineConfig({
	server: {
		port: 5174,
		cors: true
	},
	plugins: [
		react(),
		federation({
			name: 'react_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/app/mount.tsx',
				'./Button': './src/shared/ui/button'
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: deps.react
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom']
				}
			}
		}),
		tsconfigPaths()
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
})
