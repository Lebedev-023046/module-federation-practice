import { queryClient } from '@app/Providers/react-query'
import { tasksApi } from '@entities/task/api'
import { useMutation } from '@tanstack/react-query'

export function useDeleteTask() {
	return useMutation({
		mutationFn: tasksApi.deleteTask,
		async onSuccess() {
			console.log('Deleted successfully!')
		},
		async onError(error) {
			throw new Error(error.message)
		},
		onSettled: async () => {
			await queryClient.invalidateQueries(tasksApi.getAllTasksQueryOptions())
		}
	})
}
