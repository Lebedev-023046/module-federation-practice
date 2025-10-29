export function debounce(fn: (...args: any[]) => void, delay = 1000) {
	let timeout: number
	return (...args: any[]) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => fn(...args), delay)
	}
}
