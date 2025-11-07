import { ENDPOINTS, type GetAllTasksParams } from '@shared/api/endpoints'
import { api } from '@shared/api/instance'
import { queryOptions } from '@tanstack/react-query'
import type { CreateTaskPayload, TaskDTO, UpdateTaskPayload } from './model'

export const tasksApi = {
	baseTasksKey: ['tasks'],

	getAllTasks: async (payload: GetAllTasksParams = {}) => {
		try {
			return api
				.get(ENDPOINTS.getAllTasks(), {
					params: {
						search: payload?.search,
						completed: payload?.status
					}
				})
				.then(res => res.data)
		} catch (error) {
			throw error
		}
	},

	getOneTask: async ({ id }: { id: number }) => {
		try {
			return api.get(ENDPOINTS.getTask(id)).then(res => res.data)
		} catch (error) {
			throw error
		}
	},

	createTask: async (payload: CreateTaskPayload) => {
		try {
			return api.post(ENDPOINTS.createTask(), payload).then(res => res.data)
		} catch (error) {
			throw error
		}
	},

	updateTask: async ({ id, payload }: UpdateTaskPayload) => {
		try {
			return api.patch(ENDPOINTS.updateTask(id), payload).then(res => res.data)
		} catch (error) {
			throw error
		}
	},

	deleteTask: async ({ id }: { id: number }) => {
		try {
			return api.delete(ENDPOINTS.deleteTask(id)).then(res => res.data)
		} catch (error) {
			throw error
		}
	},

	// query options

	getAllTasksQueryOptions: (payload?: GetAllTasksParams) => {
		const queryKey = [
			...tasksApi.baseTasksKey,
			'all',
			...Object.values(payload || {})
		]

		return queryOptions<TaskDTO[]>({
			queryKey,
			queryFn: () => tasksApi.getAllTasks(payload)
		})
	}
}
