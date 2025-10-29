export interface TaskDTO {
	id: number
	title: string
	description?: string
	priority: number
	completed: boolean
	createdAt: Date
	updatedAt: Date
}

/*******  ce73638f-c4c2-4f07-8196-46b43106152f  *******/
export type CreateTaskPayload = Pick<
	TaskDTO,
	'title' | 'description' | 'priority' | 'completed'
>

export type UpdateTaskPayload = Partial<CreateTaskPayload>
