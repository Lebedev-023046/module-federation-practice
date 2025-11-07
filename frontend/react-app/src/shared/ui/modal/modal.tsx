import { ModalContent } from './modal.content'
import { ModalOpen } from './modal.open'
import { ModalRoot } from './modal.root'

export const Modal = Object.assign(ModalRoot, {
	Open: ModalOpen,
	Content: ModalContent
})
