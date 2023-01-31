/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.ejs'],
	mode: 'jit',
	theme: {
		extend: {},
	},
	plugins: [require('tw-elements/dist/plugin')],
}
