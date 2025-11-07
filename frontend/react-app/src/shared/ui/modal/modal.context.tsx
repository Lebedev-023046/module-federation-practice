import { createContext, useContext } from 'react'
import type { ModalAPI } from './modal.types'

const ModalContext = createContext<ModalAPI | null>(null)

export const useModalCtx = () => {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error('useModalCtx must be used within a ModalProvider')
	}

	return context
}

export function ModalProvider({
	value,
	children
}: {
	value: ModalAPI
	children: React.ReactNode
}) {
	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
