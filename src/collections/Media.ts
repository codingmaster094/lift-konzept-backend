import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    plural: {
      en: 'Media',
      de: 'Medien',
    },
  },
  access: {
    read: () => true,
  },
  upload: {
    mimeTypes: ['image/*', 'video/*'], // allow images and videos
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        // Check uploaded file size
        const file = req.file
        if (file && file.size > 100 * 1024 * 1024) {
          // 100 MB max
          throw new Error('File too large. Maximum allowed size is 100MB.')
        }
        return data
      },
    ],
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
