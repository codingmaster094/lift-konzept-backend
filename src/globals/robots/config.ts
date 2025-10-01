import type { GlobalConfig } from 'payload'

export const Robots: GlobalConfig = {
  slug: 'robots',
  label: {
    en: 'Robots',
    de: 'Robots',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'relatedPage', // Choose a descriptive name
      type: 'relationship',
      relationTo: 'pages', // This must match the slug of the collection you're linking to
      maxDepth: 0, // Optional: useful if you only need the ID and slug
      label: {
        en: 'Link to a Page',
        de: 'Mit einer Seite verknüpfen',
      },
      admin: {
        position: 'sidebar', // REMOVED: In v3.x, useAsTitle goes on the 'pages' collection config, not here.
      },
    },
    {
      name: 'robots',
      type: 'text',
      label: {
        en: 'Robots Txt Content',
        de: 'Inhalt der Robots.txt',
      },
      required: false,
      admin: {
        placeholder: 'User-agent: *\nDisallow: /admin',
      },
    },
  ],
}
