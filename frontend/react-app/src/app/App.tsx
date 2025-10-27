//@ts-ignore

import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import { Header } from '@shared/ui/layout/Header'

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<TaskBoard />
		</div>
	)
}

export default App
