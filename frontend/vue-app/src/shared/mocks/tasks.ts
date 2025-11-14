import type { TaskDTO } from '@entities/task/model'

export const mockedTasks: TaskDTO[] = Array.from({ length: 5 }, (_, i) => ({
	id: i + 1,
	title: `Task ${i + 1}`,
	description: `Description of task ${i + 1}`,
	priority: (i % 3) + 1,
	completed: i % 2 === 0,
	createdAt: new Date(Date.now() - i * 1000 * 60 * 60),
	updatedAt: new Date(Date.now() - i * 1000 * 60 * 60)
}))
