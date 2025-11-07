import { Modal } from '@shared/ui/modal'

export function CreateTaskModal({ isOpen }: { isOpen: boolean }) {
	return (
		<Modal isOpen={isOpen}>
			<Modal.Open>
				{({ open }) => {
					return (
						<div>
							<button onClick={open}>Open</button>
						</div>
					)
				}}
			</Modal.Open>
			<Modal.Content>Some Content</Modal.Content>
		</Modal>
	)
}
