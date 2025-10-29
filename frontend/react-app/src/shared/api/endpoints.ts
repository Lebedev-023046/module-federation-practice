export type GetAllTasksParams = {
	search?: string
	completed?: boolean
}

export const ENDPOINTS = {
	getAllTasks: () => `/tasks`,
	getTask: (id: number) => `/tasks/${id}`,
	createTask: () => '/tasks',
	updateTask: (id: number) => `/tasks/${id}`,
	deleteTask: (id: number) => `/tasks/${id}`
}
