import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
	children: React.ReactNode
	target?: string | Element
}

export function ModalPortal({ children, target = 'body' }: ModalPortalProps) {
	const [portalElement, setPortalElement] = useState<Element | null>(null)

	useEffect(() => {
		const element =
			typeof target === 'string' ? document.querySelector(target) : target

		setPortalElement(element)

		// Если элемент не найден, создаем div в body
		if (!element) {
			const fallbackElement = document.createElement('div')
			document.body.appendChild(fallbackElement)
			setPortalElement(fallbackElement)

			return () => {
				document.body.removeChild(fallbackElement)
			}
		}
	}, [target])

	if (!portalElement) return null

	return createPortal(children, portalElement)
}
