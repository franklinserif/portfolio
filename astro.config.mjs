// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import vue from '@astrojs/vue'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue()],
  adapter: vercel(),
})
