// host/src/pages/VueDashboard/VueLoadComponent.tsx
import { useEffect } from 'react'

type VueLoadComponentProps = {
	slotId?: string
}

export function VueLoadComponent({
	slotId = 'remote-vue-slot'
}: VueLoadComponentProps) {
	useEffect(() => {
		let localUnmount: (() => void) | undefined
		let isMounted = true

		const load = async () => {
			try {
				const mod = await import('vue_app/App')

				const { mount, unmount } = mod

				localUnmount = unmount

				if (!isMounted) return

				const el = document.getElementById(slotId)
				if (!el) return

				mount({ container: el })
			} catch (e) {
				console.error('❌ Failed to load vue_app:', e)
			}
		}

		load()

		return () => {
			isMounted = false
			localUnmount?.()
		}
	}, [slotId])

	return <div id={slotId} />
}
