import { Link, useLocation } from 'react-router-dom'

export function NavTabs() {
	const loc = useLocation()
	const current = loc.pathname
	const tab = (path: string, label: string) => (
		<Link
			to={path}
			style={{
				padding: '8px 12px',
				borderBottom:
					current === path ? '2px solid #007bff' : '2px solid transparent',
				textDecoration: 'none',
				color: current === path ? '#007bff' : '#333'
			}}
		>
			{label}
		</Link>
	)

	return (
		<div
			style={{
				display: 'flex',
				gap: 12,
				borderBottom: '1px solid #eee',
				padding: 12
			}}
		>
			{tab('/react', 'React')}
			{tab('/vue', 'Vue')}
		</div>
	)
}
