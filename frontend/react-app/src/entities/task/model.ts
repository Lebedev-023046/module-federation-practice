export interface TaskDTO {
	id: number
	title: string
	description?: string
	priority: number
	completed: boolean
	createdAt: Date
	updatedAt: Date
}

export type Task = Partial<TaskDTO>
export type CreateTaskPayload = Pick<
	TaskDTO,
	'title' | 'description' | 'priority' | 'completed'
>

export type UpdateTaskPayload = Partial<CreateTaskPayload>
