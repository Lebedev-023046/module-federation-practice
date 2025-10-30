import { TaskBoardBody } from './TaskBoardBody'
import { TaskBoardHeader } from './TaskBoardHeader'

export function TaskBoard() {
	return (
		<section className='flex flex-col gap-4 px-6 py-4'>
			<TaskBoardHeader />
			<TaskBoardBody />
		</section>
	)
}
