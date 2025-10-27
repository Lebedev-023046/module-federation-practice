import { mockedTasks } from '@shared/mocks/tasks'
import { Task } from './Task'

export function Column() {
	return (
		<section className='flex flex-col gap-4'>
			<div>Название колонки</div>
			<div className='flex flex-col gap-4 rounded-xl'>
				{mockedTasks.map(task => (
					<Task key={task.id} {...task} />
				))}
			</div>
		</section>
	)
}
