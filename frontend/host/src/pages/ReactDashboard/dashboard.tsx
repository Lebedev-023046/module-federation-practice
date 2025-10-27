import { useEffect } from 'react'

export default function ReactPage() {
	useEffect(() => {
		let unmount: (() => void) | undefined
		let isMounted = true

		const fetchModule = async () => {
			try {
				const { default: mod } = await import('react_app/App')

				console.log({ mod })
				if (!isMounted) return

				const el = document.getElementById('remote-react-app-slot')
				if (!el) return

				mod.mount({ container: el })
				unmount = mod.unmount
			} catch (err) {
				console.error('❌ Failed to load remote app:', err)
			}
		}

		fetchModule()

		return () => {
			unmount?.()
			isMounted = false
		}
	}, [])

	return <div id='remote-react-app-slot' />
}
