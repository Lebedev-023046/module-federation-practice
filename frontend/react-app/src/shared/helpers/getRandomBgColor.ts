export function getLightBgColor(priority?: number): string {
	if (priority === undefined || priority < 1 || priority > 10) {
		return 'bg-gray-100' // нейтральный цвет по умолчанию
	}

	if (priority === 1) {
		return 'bg-green-100' // низкий приоритет
	} else if (priority === 2) {
		return 'bg-amber-100' // средний приоритет
	} else if (priority === 3) {
		return 'bg-red-100' // высокий приоритет
	} else {
		return 'bg-gray-10'
	}
}

// export function getRandomLightBgColor(): string {
// 	const lightColors = [
// 		'bg-red-100',
// 		'bg-orange-100',
// 		'bg-amber-100',
// 		'bg-yellow-100',
// 		'bg-lime-100',
// 		'bg-green-100',
// 		'bg-emerald-100',
// 		'bg-teal-100',
// 		'bg-cyan-100',
// 		'bg-sky-100',
// 		'bg-blue-100',
// 		'bg-indigo-100',
// 		'bg-violet-100',
// 		'bg-purple-100',
// 		'bg-pink-100',
// 		'bg-rose-100',
// 		'bg-gray-100',
// 		'bg-slate-100'
// 	]

// 	const randomIndex = Math.floor(Math.random() * lightColors.length)

// 	return lightColors[randomIndex]
// }
