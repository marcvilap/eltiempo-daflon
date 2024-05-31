import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	base: '/bc/daflon/',
	devToolbar: { enabled: false },
	integrations: [tailwind({ applyBaseStyles: false })],
})
