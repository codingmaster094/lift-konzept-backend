import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Ratgeber: CollectionConfig = {
  slug: 'ratgeber',
  labels: {
    singular: {
      en: 'ratgeber',
      de: '',
    },
    plural: {
      en: 'ratgeber',
      de: '',
    },
  },
  admin: {
    useAsTitle: 'title',
    preview: (doc) => {
      if (!doc?.slug) return null
      return `https://lift-konzept-backend.vercel.app/ratgeber/${doc.slug}`
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: {
        en: 'Authors',
        de: 'Autoren',
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: {
        en: 'Slug',
        de: 'Kurzlink',
      },
      admin: {
        readOnly: true,
        description: {
          en: 'Auto-generated from title if left blank',
          de: 'Wird automatisch aus dem Titel generiert, wenn leer',
        },
      },
      hooks: {
        beforeValidate: [
          ({ siblingData, value }) => {
            if (siblingData?.title) {
              return slugify(siblingData.title, { lower: true })
            }
            return value
          },
        ],
      },
    },

    {
      type: 'tabs',
      tabs: [],
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: {
        en: 'Published Date',
        de: 'Veröffentlichungsdatum',
      },
    },
  ],
}
