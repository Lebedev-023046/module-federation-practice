import { useState } from 'react'
import { ModalProvider } from './modal.context'
import { ModalPortal } from './modal.portal'
import type { ModalAPI, ModalRootProps } from './modal.types'

export function ModalRoot({
	children,
	isOpen: controlledOpen,
	onModalVisibilityChange,
	usePortal = true,
	portalTarget = 'body'
}: ModalRootProps) {
	const [isUncontrolledOpen, setIsUncontrolledOpen] = useState(false)

	const isControlled = typeof controlledOpen === 'boolean'
	const isOpen = isControlled ? controlledOpen : isUncontrolledOpen

	const toggleModal = (state: boolean) => {
		if (isControlled) {
			if (onModalVisibilityChange) onModalVisibilityChange(state)
			else setIsUncontrolledOpen(state)
		} else {
			setIsUncontrolledOpen(state)
		}
	}

	const api: ModalAPI = {
		isOpen,
		open: () => toggleModal(true),
		close: () => toggleModal(false)
	}

	const renderedChildren =
		typeof children === 'function' ? children(api) : children

	const content = isOpen ? (
		<ModalProvider value={api}>{renderedChildren}</ModalProvider>
	) : null

	if (!usePortal || !isOpen) {
		return content
	}

	return <ModalPortal target={portalTarget}>{content}</ModalPortal>
}
