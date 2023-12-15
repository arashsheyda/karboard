import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({

  alias: {
    '~karboard': resolve('./'),
  },

  components: {
    dirs: [
      {
        global: true,
        prefix: 'app',
        path: resolve('./components/app'),
      },
    ],
  },

  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    viewer: false,
  },

  devtools: {
    enabled: true,
  },
})
