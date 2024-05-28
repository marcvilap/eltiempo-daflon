import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: { xs: '27rem', sm: '36rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '2rem', xl: '6rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: {
				sans: "'Athletics', sans-serif",
				serif: "'Cormorant Infant', serif",
			},
		},
	},
} satisfies Config
