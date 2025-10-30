import type { TaskDTO } from '@entities/task/model'
import { getLightBgColor } from '@shared/helpers/getRandomBgColor'
import clsx from 'clsx'

export function Task({ title, completed, priority }: TaskDTO) {
	const color = getLightBgColor(priority)

	const completedColor = completed ? 'bg-green-100' : 'bg-red-200'

	return (
		<div
			className={`flex flex-col justify-between  flex-1 basis-[200px] minh-20 max-h-60 scroll-auto max-w-full  rounded-2xl p-4 ${color} md:max-w-1/2`}
		>
			<h2 className='text-2xl font-bold mb-2'>{title}</h2>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-3 text-gray-600'>
					<p className='font-bold'>Priority:</p>
					<p className='font-bold'>{priority}</p>
				</div>
				<div>
					<p
						className={clsx(
							'inline-block rounded-md font-bold p-2',
							completedColor
						)}
					>
						{completed ? 'Completed' : 'Not completed'}
					</p>
					<p>{}</p>
				</div>
			</div>
		</div>
	)
}
