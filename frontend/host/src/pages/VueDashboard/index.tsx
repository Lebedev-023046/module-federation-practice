import { MicroFrontendSlot } from '../MicrofrontendSlot'

const loadVueRemote = () => import('vue_app/App').then(mod => mod.default)

export function VuePage() {
	return (
		<MicroFrontendSlot
			load={loadVueRemote}
			slotId='remote-vue-slot'
			className='h-full'
		/>
	)
}
