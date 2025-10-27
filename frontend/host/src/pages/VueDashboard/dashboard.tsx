// import { useEffect } from 'react'

// export default function VuePage() {
// 	useEffect(() => {
// 		let unmount: (() => void) | undefined
// 		;(async () => {
// 			const mod = await import('vue_app/App')
// 			const el = document.getElementById('remote-slot')
// 			mod.mount({ container: el! })
// 			unmount = mod.unmount
// 		})()

// 		return () => unmount?.()
// 	}, [])

// 	return <div id='remote-slot' />
// }
