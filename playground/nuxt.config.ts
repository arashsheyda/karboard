import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    '../',
  ],

  css: [
    resolve('./styles/global.css'),
  ],
})
