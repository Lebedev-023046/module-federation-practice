import { useModalCtx } from './modal.context'
import type { ModalOpenProps } from './modal.types'

export function ModalOpen({ children }: ModalOpenProps) {
	const api = useModalCtx()

	const renderedChildren =
		typeof children === 'function' ? children(api) : children

	return <>{renderedChildren}</>
}
