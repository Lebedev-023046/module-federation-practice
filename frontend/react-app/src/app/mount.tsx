import ReactDOM from 'react-dom/client'
import App from './App'

import './main.css'

let root: ReactDOM.Root | null = null

export function mount({ container }: { container: HTMLElement }) {
	if (root) return
	root = ReactDOM.createRoot(container)
	root.render(<App />)
}

export function unmount() {
	if (root) {
		root.unmount()
		root = null
	}
}
