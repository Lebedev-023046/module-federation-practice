import { queryClient } from '@app/Providers/react-query'
import { tasksApi } from '@entities/task/api'
import { useAppSelector } from '@shared/store'
import { useMutation } from '@tanstack/react-query'

export function useCreateTask() {
	const searchQuery = useAppSelector(state => state.tasks.filters.searchQuery)
	const status = useAppSelector(state => state.tasks.filters.status)

	return useMutation({
		mutationFn: tasksApi.createTask,
		async onSuccess() {
			await queryClient.invalidateQueries(
				tasksApi.getAllTasksQueryOptions({
					search: searchQuery,
					status: status.value
				})
			)
			console.log('Created successfully!')
		},
		async onError(error) {
			throw new Error(error.message)
		}
	})
}
