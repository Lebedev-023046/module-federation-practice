import { useEffect, useState } from 'react'

export const useDebounce = <T,>(value: T, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		let timerId = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			if (timerId) {
				clearTimeout(timerId)
			}
		}
	}, [value])

	return debouncedValue
}
