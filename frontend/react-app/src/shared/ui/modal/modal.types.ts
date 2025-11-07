export interface ModalAPI {
	isOpen: boolean
	open: () => void
	close: () => void
}

export interface ModalRootProps {
	children: React.ReactNode | ((api: ModalAPI) => React.ReactNode)
	isOpen?: boolean
	onModalVisibilityChange?: (state: boolean) => void
	usePortal?: boolean
	portalTarget?: string | Element
}

export interface ModalOpenProps {
	children: React.ReactNode | ((api: ModalAPI) => React.ReactNode)
}

export interface ModalContentProps {
	title?: string
	description?: string
	children: React.ReactNode | ((api: ModalAPI) => React.ReactNode)
}
