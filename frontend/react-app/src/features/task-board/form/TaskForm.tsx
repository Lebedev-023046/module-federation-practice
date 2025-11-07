import type { CreateTaskPayload } from '@entities/task/model'
import { useState, type ChangeEvent, type FormEvent } from 'react'

interface TaskFormProps {
	// mode: 'create' | 'edit'
	onSubmit: (formData: CreateTaskPayload) => void
	initialData?: Partial<CreateTaskPayload>
}

export function TaskForm({ onSubmit, initialData }: TaskFormProps) {
	const [formData, setFormData] = useState<CreateTaskPayload>({
		title: '',
		description: '',
		priority: 0,
		completed: false,
		...initialData
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, type } = e.target

		setFormData(prev => ({
			...prev,
			[name]: type === 'number' ? Number(value) : value
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit({
			...formData,
			priority: Number(formData.priority)
		})
	}

	return (
		<form className='flex flex-col gap-4 mt-4 mb-4' onSubmit={handleSubmit}>
			<input
				value={formData.title}
				onChange={handleChange}
				placeholder='title'
				className='border rounded-md p-2'
				name='title'
				type='text'
			/>
			<input
				value={formData.description}
				onChange={handleChange}
				placeholder='description'
				className='border rounded-md p-2'
				name='description'
				type='text'
			/>
			<input
				value={formData.priority}
				onChange={handleChange}
				placeholder='priority'
				className='border rounded-md p-2'
				name='priority'
				type='text'
			/>
			<button
				className='bg-blue-200 p-2 rounded-md active:bg-blue-400 hover:bg-blue-300 transition-colors duration-200'
				type='submit'
			>
				Добавить
			</button>
		</form>
	)
}
