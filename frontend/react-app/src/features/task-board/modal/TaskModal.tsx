import { Modal } from '@shared/ui/modal'

interface TaskModalProps {
	isOpen?: boolean
	onVisibilityChange?: (state: boolean) => void
	usePortal?: boolean
	portalTarget?: string
}

export function TaskModal({ isOpen, onVisibilityChange }: TaskModalProps) {
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
				Some Content
			</Modal.Content>
		</Modal>
	)
}
