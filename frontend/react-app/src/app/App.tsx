import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import { Header } from '@shared/ui/layout/Header'

function App() {
	return (
		<div className='flex flex-col'>
			<Header />
			<TaskBoard />
		</div>
	)
}

export default App
