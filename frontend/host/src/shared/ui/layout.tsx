import { NavTabs } from '../../widgets/NavTabs'

export function Header() {
	return (
		<div className='flex gap-4 justify-between items-center px-6 py-4 bg-blue-200'>
			<h1 className='text-4xl font-bold'>Task Master</h1>
			<NavTabs />
		</div>
	)
}
