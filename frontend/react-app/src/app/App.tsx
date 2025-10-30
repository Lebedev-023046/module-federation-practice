import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import { Header } from '@shared/ui/layout/Header'
import { ToastContainer } from 'react-toastify'
import { Providers } from './Providers'

function App() {
	return (
		<Providers>
			<div className='flex flex-col'>
				<Header />
				<TaskBoard />
				<ToastContainer />
			</div>
		</Providers>
	)
}

export default App
