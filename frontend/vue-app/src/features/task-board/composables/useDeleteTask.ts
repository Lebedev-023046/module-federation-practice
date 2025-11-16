import { tasksApi } from '@entities/task/api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useDeleteTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: tasksApi.deleteTask,
    async onSuccess() {
      console.log('Deleted successfully!')
    },
    async onError(error) {
      throw new Error(error.message)
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: tasksApi.baseTasksKey,
      })
    },
  })
}
