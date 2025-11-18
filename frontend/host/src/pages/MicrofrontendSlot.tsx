// host/src/shared/MicroFrontendSlot.tsx
import { useLayoutEffect, useRef } from 'react'

type MountFn = (container: HTMLElement) => void | Promise<void>
type UnmountFn = () => void | Promise<void>

export type RemoteModule = {
	mount: MountFn
	unmount?: UnmountFn
}

type MicroFrontendSlotProps = {
	load: () => Promise<RemoteModule> // как грузить remote
	slotId?: string // id контейнера (для дебага/стилей)
	className?: string // опциональные стили
}

export function MicroFrontendSlot({
	load,
	slotId = 'remote-slot',
	className
}: MicroFrontendSlotProps) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		let cancelled = false
		let unmountFn: UnmountFn | undefined

		const setup = async () => {
			try {
				const mod = await load()

				if (cancelled) return

				const el = containerRef.current

				if (!el) return

				unmountFn = mod.unmount
				await mod.mount(el)
			} catch (error) {
				console.error('❌ Failed to load remote module:', error)
			}
		}

		setup()

		return () => {
			cancelled = true
			if (unmountFn) {
				Promise.resolve()
					.then(() => unmountFn && unmountFn())
					.catch(err => {
						console.warn('Error while unmounting remote module:', err)
					})
			}
		}
	}, [load])

	return <div ref={containerRef} id={slotId} className={className} />
}
