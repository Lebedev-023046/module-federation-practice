import type { TaskDTO } from '@entities/task/model'
import { getLightBgColor } from '@shared/helpers/getRandomBgColor'

export function Task({ title, priority }: TaskDTO) {
	const color = getLightBgColor(priority)

	return (
		<div
			className={`flex-1 basis-[200px] max-h-50 max-w-full  rounded-2xl flex flex-col p-4 ${color} md:max-w-1/2`}
		>
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
