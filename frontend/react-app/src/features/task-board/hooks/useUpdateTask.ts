import { queryClient } from '@app/Providers/react-query'
import { tasksApi } from '@entities/task/api'
import { useMutation } from '@tanstack/react-query'

export function useUpdateTask() {
	return useMutation({
		mutationFn: tasksApi.updateTask,
		async onSuccess() {
			console.log('Updated successfully!')
		},
		async onError(error) {
			throw new Error(error.message)
		},

		onSettled: async () => {
			await queryClient.invalidateQueries(tasksApi.getAllTasksQueryOptions())
		}
	})
}
