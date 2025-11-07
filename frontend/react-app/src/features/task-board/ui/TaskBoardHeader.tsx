import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'

import { useAppSelector } from '@shared/store'
import { useActions } from '@shared/store/hooks'
import { useState } from 'react'
import { TaskModal } from '../modal/TaskModal'
import type { FilterStatus } from '../store/task.slice'
import { TaskFilters } from './TaskFilter'

export function TaskBoardHeader() {
	const { taskActions } = useActions()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const searchQuery = useAppSelector(state => state.tasks.filters.searchQuery)
	const status = useAppSelector(state => state.tasks.filters.status)

	return (
		<>
			<TaskModal isOpen={isModalOpen} onVisibilityChange={setIsModalOpen} />
			<div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10'>
				<h2 className='self-start text-2xl font-bold'>Tasks</h2>
				<div
					className='flex flex-wrap justify-end gap-4 w-full lg:w-1/2 & > *:grow'
					id='controls'
				>
					<Input
						value={searchQuery}
						onChange={e => taskActions.setSearchQuery(e.target.value)}
						placeholder='search'
					/>
					<TaskFilters
						value={status}
						onChange={value =>
							taskActions.setFilterStatus(value as FilterStatus)
						}
					/>
					{/* <TaskSortSelect /> */}
					<Button className='shrink' onClick={() => setIsModalOpen(true)}>
						Add
					</Button>
				</div>
			</div>
		</>
	)
}
