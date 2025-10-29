import Select from 'react-select'

export const options = [
	{ value: undefined, label: 'All tasks' },
	{ value: true, label: 'Completed' },
	{ value: false, label: 'In progress' }
]

export function TaskFilters() {
	return (
		<div>
			<Select
				options={options}
				placeholder='Filters'
				classNames={{
					control: () => '!border-blue-200'
				}}
			/>
		</div>
	)
}
