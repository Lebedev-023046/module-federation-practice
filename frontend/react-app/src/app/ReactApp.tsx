import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import { Providers } from './Providers'
import './main.css'

function ReactApp() {
	return (
		<Providers>
			<TaskBoard />
		</Providers>
		// <div>Hello From React Remote!</div>
	)
}

export default ReactApp
