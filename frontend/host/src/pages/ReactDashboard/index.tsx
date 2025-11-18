import { MicroFrontendSlot } from '../MicrofrontendSlot'

const loadReactRemote = () => import('react_app/App').then(mod => mod.default)

export function ReactPage() {
	return (
		<MicroFrontendSlot
			load={loadReactRemote}
			slotId='remote-react-slot'
			className='h-full'
		/>
	)
}
