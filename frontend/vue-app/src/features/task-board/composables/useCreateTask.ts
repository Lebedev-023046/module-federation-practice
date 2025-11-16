import { tasksApi } from '@entities/task/api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useCreateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: tasksApi.createTask,
    async onSuccess() {
      console.log('Created successfully!')
    },
    async onError(error: any) {
      throw new Error(error?.message || 'Failed to create task')
    },
    async onSettled() {
      await queryClient.invalidateQueries({
        queryKey: tasksApi.baseTasksKey,
      })
    },
  })
}
