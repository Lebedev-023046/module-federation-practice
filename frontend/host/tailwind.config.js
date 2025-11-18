/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'../react-app/src/**/*.{js,ts,jsx,tsx}',
		'../vue-app/src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
