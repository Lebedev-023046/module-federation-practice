import { store } from '@shared/store'
import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export function RTKProvider({ children }: PropsWithChildren) {
	return <Provider store={store}>{children}</Provider>
}
