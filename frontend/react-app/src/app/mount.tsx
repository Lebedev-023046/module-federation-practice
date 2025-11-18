// react_app/src/app/mount.tsx
import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import ReactDOM from 'react-dom/client'
import { Providers } from './Providers'

let root: ReactDOM.Root | null = null

function mount(container: HTMLElement) {
	if (root) return

	root = ReactDOM.createRoot(container)
	root.render(
		<Providers>
			<TaskBoard />
		</Providers>
	)
}

function unmount() {
	if (!root) return
	root.unmount()
	root = null
}

export default { mount, unmount }
