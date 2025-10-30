import Select, { type Props as SelectProps } from 'react-select'

export const options = [
	{ value: undefined, label: 'All tasks' },
	{ value: true, label: 'Completed' },
	{ value: false, label: 'In progress' }
]

export function TaskFilters(props: SelectProps) {
	return (
		<div>
			<Select
				options={options}
				placeholder='Filters'
				classNames={{
					control: () => '!border-blue-200'
				}}
				{...props}
			/>
		</div>
	)
}
