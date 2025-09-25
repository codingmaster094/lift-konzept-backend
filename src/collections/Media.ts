import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    plural: {
      en: 'media',
      de: 'Medien',
    },
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media', // where files are stored
    mimeTypes: ['image/*', 'video/*'], // allow images + videos
    fileSizeLimit: 200 * 1024 * 1024, // 200MB (adjust as needed)
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
