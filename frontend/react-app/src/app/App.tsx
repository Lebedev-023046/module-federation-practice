import { TaskBoard } from '@features/task-board/ui/TaskBoard'
import { Header } from '@shared/ui/layout/Header'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
	useEffect(() => {
		const _fetch = async () => {
			const response = await fetch('http:/localhost:3000/api/tasks')
			const result = await response.json()
			console.log(result)
			return result
		}

		_fetch()
	}, [])

	return (
		<div className='flex flex-col'>
			<Header />
			<TaskBoard />
			<ToastContainer />
		</div>
	)
}

export default App
