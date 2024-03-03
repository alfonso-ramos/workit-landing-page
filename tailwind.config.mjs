/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Fraunces': ["Fraunces"],
				'Manrope': ["Manrope"]
			}
		},
		colors: {
			'white': '#fff',
			'purple': '#24053E',
			'steel':'#584D62',
			'primary': '#44FFA1',
			'pink': '#FCF8FF'
		},
		fontSize: {
			'heading-s': ['2rem', {
				lineHeight: '40px',
			}],
			'heading-m': ['3.5rem', {
				lineHeight: '64px',
			}],
			'heading-l': ['5rem', {
				lineHeight: '80px',
			}],
			base: '1.125rem'
		},
	},
	plugins: [],
}
