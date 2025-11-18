import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

const deps = require('./package.json').dependencies

export default defineConfig({
	server: {
		port: 5173,
		cors: true
	},
	plugins: [
		react(),
		federation({
			name: 'host',
			remotes: {
				react_app: {
					type: 'module',
					name: 'react_app',
					entry: 'http://localhost:5174/remoteEntry.js',
					entryGlobalName: 'react_app',
					shareScope: 'default'
				},
				vue_app: {
					type: 'module',
					name: 'vue_app',
					entry: 'http://localhost:5175/remoteEntry.js',
					entryGlobalName: 'vue_app',
					shareScope: 'default'
				}
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
		})
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
})
