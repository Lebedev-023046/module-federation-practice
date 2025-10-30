import { ReactQueryProvider } from './react-query'
import { RTKProvider } from './redux-toolkit'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactQueryProvider>
			<RTKProvider>{children}</RTKProvider>
		</ReactQueryProvider>
	)
}
