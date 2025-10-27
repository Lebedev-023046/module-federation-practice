import type { TaskDTO } from '@entities/task/model'
import { getRandomLightBgColor } from '@shared/helpers/getRandomBgColor'

// 	id: number
// title: string
// description?: string
// priority: number
// completed: boolean
// createdAt: Date
// updatedAt: Date

export function Task({
	title,
	description,
	priority,
	completed,
	createdAt,
	updatedAt
}: TaskDTO) {
	const color = getRandomLightBgColor()

	// console.log({ color })

	return (
		<div className={`${color} rounded-2xl flex flex-col p-4`}>
			<h2 className='text-3xl font-bold'>Task</h2>
			<div className='flex flex-col'>
				<div className='flex justify-between'>
					<p className='font-bold'>Title:</p>
					<p>{title}</p>
				</div>
				<div className='flex justify-between'>
					<p className='font-bold'>Priority:</p>
					<p>{priority}</p>
				</div>
			</div>
		</div>
	)
}
