import { mockedTasks } from '@shared/mocks/tasks'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Task } from './Task'
import { TaskFilters } from './TaskFilter'
import { TaskSortSelect } from './TaskSort'

export function TaskBoard() {
	return (
		<section className='flex flex-col gap-4 px-6 py-4'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>
				<h2 className='self-start text-2xl font-bold'>Tasks</h2>
				<div
					className='flex flex-wrap justify-end gap-4 w-full lg:w-1/2 & > *:grow'
					id='controls'
				>
					<Input placeholder='search' />
					<TaskFilters />
					<TaskSortSelect />
					<Button className='shrink'>Add</Button>
				</div>
			</div>
			<div className='flex flex-wrap gap-4'>
				{mockedTasks.map(task => (
					<Task key={task.id} {...task} />
				))}
			</div>
		</section>
	)
}
