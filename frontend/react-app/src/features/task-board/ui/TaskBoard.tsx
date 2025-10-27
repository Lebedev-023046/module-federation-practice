import { Column } from './Column'

export function TaskBoard() {
	return (
		<div className='grid grid-cols-4 gap-4 px-6 py-4 flex-1'>
			<Column />
			<Column />
			<Column />
			<Column />
		</div>
	)
}
