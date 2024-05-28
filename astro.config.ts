import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	base: '/',
	trailingSlash: 'never',
	devToolbar: { enabled: false },
	integrations: [tailwind({ applyBaseStyles: false })],
})
