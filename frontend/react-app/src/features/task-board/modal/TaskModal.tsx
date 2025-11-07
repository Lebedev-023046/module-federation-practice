import type { CreateTaskPayload } from '@entities/task/model'
import { Modal } from '@shared/ui/modal'
import { TaskForm } from '../form/TaskForm'
import { useCreateTask } from '../hooks/useCreateTask'

interface TaskModalProps {
	isOpen?: boolean
	onVisibilityChange?: (state: boolean) => void
	usePortal?: boolean
	portalTarget?: string
}

export function TaskModal({ isOpen, onVisibilityChange }: TaskModalProps) {
	const { mutate: createTask } = useCreateTask()

	const onSubmit = (formData: CreateTaskPayload) => {
		console.log({ formData })
		createTask(formData)
		onVisibilityChange?.(false)
	}

	return (
		<Modal
			isOpen={isOpen}
			onModalVisibilityChange={onVisibilityChange}
			usePortal
			portalTarget='#modal-root'
		>
			<Modal.Content
				title='Create task'
				description='Add new task to your list'
			>
				<TaskForm onSubmit={onSubmit} />
			</Modal.Content>
		</Modal>
	)
}
