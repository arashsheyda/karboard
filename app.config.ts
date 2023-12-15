export default defineAppConfig({
  karboard: {
    name: 'Kar-board',
    logo: 'Kar-board',
    copyright: '/',
    api: {
      jobs: '/api/jobs',
      newsletter: '/api/newsletter',
      applications: '/api/applications',
    },
    socials: [
      {
        icon: 'i-simple-icons-github',
        label: 'Github',
        to: 'https://github.com/arashsheyda/karboard',
      },
    ],
  },
})