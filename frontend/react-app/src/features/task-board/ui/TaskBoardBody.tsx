import { tasksApi } from '@entities/task/api'
import { useDebounce } from '@shared/hooks/useDebounce'
import { useAppSelector } from '@shared/store'
import { useQuery } from '@tanstack/react-query'
import { Task } from './Task'

export function TaskBoardBody() {
	const searchQuery = useAppSelector(state => state.tasks.filters.searchQuery)
	const status = useAppSelector(state => state.tasks.filters.status)
	const debouncedSearchQuery = useDebounce<string>(searchQuery, 1000)

	const { data, error, isLoading } = useQuery({
		...tasksApi.getAllTasksQueryOptions({
			search: debouncedSearchQuery,
			status: status.value
		})
	})

	if (error) {
		return <div>{error.message}</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (data?.length === 0) {
		return <div>No tasks found</div>
	}

	return (
		<div className='flex flex-wrap gap-4'>
			{data?.map(task => (
				<Task key={task.id} {...task} />
			))}
		</div>
	)
}
