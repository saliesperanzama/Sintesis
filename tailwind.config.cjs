/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				gris:"#656565",
				azul:"#1e40af",
				azuls:"#1e3a8a",
				azulsbajito:"#2563eb"
			}
		},
	},
	plugins: [],
}
