import { tasksApi } from '@entities/task/api'
import type { TaskDTO } from '@entities/task/model'
import { useQuery } from '@tanstack/react-query'
import { Task } from './Task'

export function TaskBoardBody() {
	const { data, error, isLoading } = useQuery<TaskDTO[]>({
		queryKey: ['tasks'],
		queryFn: () => tasksApi.getAllTasks()
	})

	console.log({ data })

	if (error) {
		return <div>{error.message}</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className='flex flex-wrap gap-4'>
			{data?.map(task => (
				<Task key={task.id} {...task} />
			))}
		</div>
	)
}
