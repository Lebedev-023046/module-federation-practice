import { useEffect, useState } from 'react'

const componeneList = {
	App: async () => await import('react_app/App')
}

type ComponentPath = 'App'

const defaultSlotId = 'remote-react-slot'

export function ReactLoadComponent({
	componentPath
}: {
	componentPath: ComponentPath
}) {
	const [MyComponent, setMyComponent] = useState<React.ComponentType | null>(
		null
	)

	const loadRemoteComponent = async () => {
		try {
			const remoteModule = await componeneList[componentPath]()

			if (remoteModule?.default) {
				setMyComponent(() => remoteModule.default as React.ComponentType)
			} else {
				console.error('Remote component not found')
			}
		} catch (error) {
			console.error('Error loading remote component:', error)
		}
	}
	useEffect(() => {
		loadRemoteComponent()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		MyComponent && (
			<div id={defaultSlotId}>
				<MyComponent />
			</div>
		)
	)
}

// const componeneList = {
// 	App: async () => await import('remoteApp/App')
// }

// type ComponentPath = 'App'

// function LoadComponent({ componentPath }: { componentPath: ComponentPath }) {
// 	const [MyComponent, setMyComponent] = useState<React.ComponentType | null>(
// 		null
// 	)

// 	const loadRemoteComponent = async () => {
// 		try {
// 			const remoteModule = await componeneList[componentPath]()

// 			if (remoteModule?.default) {
// 				setMyComponent(() => remoteModule.default)
// 			} else {
// 				console.error('Remote component not found')
// 			}
// 		} catch (error) {
// 			console.error('Error loading remote component:', error)
// 		}
// 	}
// 	useEffect(() => {
// 		loadRemoteComponent()
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [])

// 	return MyComponent && <MyComponent />
// }
