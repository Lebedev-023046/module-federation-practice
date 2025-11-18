import { Link, useLocation } from 'react-router-dom'

const pages = [
	{ path: '/react', label: 'React' },
	{ path: '/vue', label: 'Vue' }
]

export function NavTabs() {
	const { pathname } = useLocation()

	return (
		<div className='flex gap-6'>
			{pages.map(({ path, label }) => {
				const isActive = pathname === path

				return (
					<Link
						key={path}
						to={path}
						className={`
              relative text-lg font-medium transition-colors
              ${
								isActive
									? 'text-primary-700'
									: 'text-neutral-500 hover:text-neutral-700'
							}
            `}
					>
						{label}

						<span
							className={`
                absolute left-0 -bottom-0.5 h-[2px] w-full bg-black/50 transition-all duration-300
                ${isActive ? 'opacity-100' : 'opacity-0'}
              `}
						/>
					</Link>
				)
			})}
		</div>
	)
}
