import { tasksApi } from '@entities/task/api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useUpdateTask() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: tasksApi.updateTask,
    async onSuccess() {
      console.log('Updated successfully!')
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
