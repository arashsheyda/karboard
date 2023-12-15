import { Job } from '~karboard/types'

export default defineEventHandler((): Job[] => {
  return [
    {
      company: 'Nuxt',
      logo: 'https://nuxt.com/assets/design-kit/icon-green.svg',
      position: 'Software Engineer',
      slug: 'software-engineer',
      badges: ['Full Time'],
      createdAt: new Date()
    },
    {
      company: 'nuxt',
      logo: 'https://nuxt.com/assets/design-kit/icon-green.svg',
      position: 'Frontend Engineer',
      slug: 'frontend-engineer',
      badges: ['Part Time'],
      createdAt: new Date()
    },
  ]
})