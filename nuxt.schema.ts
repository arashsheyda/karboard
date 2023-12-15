export default defineNuxtSchema({
  appConfig: {
    /**
     * Kar-Board template configuration.
     *
     * @studio-icon material-symbols:docs
     */
    karboard: {

      copyright: {
        $schema: {
          type: 'string',
          required: false,
          description: 'copyright link for footer',
        },
      },
      name: {
        $schema: {
          type: 'string',
          description: 'Name of project',
        },
      },
      logo: {
        $schema: {
          type: 'string',
          description: 'Logo of project',
        },
      },

      /**
       * API
       *
       * to fetch & save data.
       *
       * @studioIcon material-symbols:database
       */
      api: {
        $schema: {
          type: 'object',
          properties: {
            jobs: {
              type: 'string',
              default: '/api/jobs',
              required: false,
              description: 'The endpoint to fetch Jobs. | method: GET',
            },
            newsletter: {
              type: 'string',
              default: '/api/newsletter',
              required: false,
              description:
                'The endpoint to subscribe Newsletter. | method: POST',
            },
            applications: {
              type: 'string',
              default: '/api/applications',
              required: false,
              description:
                'The endpoint to subscribe Applications. | method: POST',
            },
          },
        },
      },

      /**
       * Nav
       *
       * Nav items for header
       *
       * @studioIcon material-symbols:attach-file
       */
      nav: {
        $schema: {
          type: 'array',
          items: {
            label: {
              type: 'string',
              required: true,
              description: 'Label of nav item',
            },
            to: {
              type: 'string',
              required: false,
              description: 'URL of nav item',
            },
            onClick: {
              type: 'string',
              required: false,
              description: '@click event for nav item',
            },
            class: {
              type: 'string',
              required: false,
              description: 'classes of nav item',
            },
          }
        },
      },

      /**
       * Hero
       *
       * Hero configuration
       *
       * @studioIcon material-symbols:imagesmode
       */
      hero: {
        $schema: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'title of hero',
            },
            description: {
              type: 'string',
              description: 'description of hero',
            },
            image: {
              type: 'object',
              properties: {
                src: {
                  type: 'string',
                  description: 'src of hero: image',
                },
                class: {
                  type: 'string',
                  required: false,
                  description: 'description of hero',
                },
              },
            },
            links: {
              type: 'array',
              items: {
                label: {
                  type: 'string',
                  description: 'Title of the social network',
                },
                icon: {
                  type: 'string',
                  required: false,
                  description: 'check https://icones.js.org/ for icons',
                },
                to: {
                  type: 'string',
                  required: false,
                  description: 'URL when clicking on the link',
                },
                onClick: {
                  type: 'string',
                  required: false,
                  description: '@click event for nav item',
                },
              },
            },
            logos: {
              type: 'array',
              items: {
                label: {
                  type: 'string',
                  description: 'Name of the logo',
                },
                logo: {
                  type: 'string',
                  required: false,
                  description: 'src of logo',
                },
                to: {
                  type: 'string',
                  required: false,
                  description: 'URL when clicking on the link',
                },
                onClick: {
                  type: 'string',
                  required: false,
                  description: '@click event for nav item',
                },
              },
            },
          },
        },
      },

      /**
       * Social Links
       *
       * @studioIcon material-symbols:share-outline
       */
      socials: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['label', 'icon', 'to'],
            properties: {
              label: {
                type: 'string',
                description: 'Title of the social network',
              },
              icon: {
                type: 'string',
                description: 'check https://icones.js.org/ for icons',
              },
              to: {
                type: 'string',
                description: 'URL when clicking on the link',
              },
            },
          },
        },
      },
    },
  },
});
