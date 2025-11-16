export interface TaskDTO {
  id: number
  title: string
  description?: string
  priority: number
  completed: boolean
  createdAt: Date | string
  updatedAt: Date | string
}

export type Task = Partial<TaskDTO>
export type CreateTaskPayload = Pick<TaskDTO, 'title' | 'description' | 'priority' | 'completed'>

export type UpdateTaskPayload = {
  id: number
  payload: Partial<CreateTaskPayload>
}
