import Select from 'react-select'

const sortOptions = [
	{
		label: 'Title',
		options: [
			{ value: { field: 'title', order: 'asc' }, label: 'Title ↑' },
			{ value: { field: 'title', order: 'desc' }, label: 'Title ↓' }
		]
	},
	{
		label: 'Priority',
		options: [
			{ value: { field: 'priority', order: 'asc' }, label: 'Priority ↑' },
			{ value: { field: 'priority', order: 'desc' }, label: 'Priority ↓' }
		]
	},
	{
		label: 'Date',
		options: [
			{ value: { field: 'date', order: 'asc' }, label: 'Date ↑' },
			{ value: { field: 'date', order: 'desc' }, label: 'Date ↓' }
		]
	}
]

export function TaskSortSelect() {
	return (
		<div>
			<Select
				name='sort'
				options={sortOptions}
				classNames={{
					control: () => '!border-blue-200'
				}}
			/>
		</div>
	)
}
