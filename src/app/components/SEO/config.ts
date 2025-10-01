import type { Field } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// 1. Helper function to generate a basic WebPage Schema
const generateWebPageSchema = (data) => {
  const meta = data.meta || {}

  // Construct the basic JSON-LD object
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    // Note: 'url' should be determined at the page level or based on slug/canonical URL
    // We use the canonical URL if available, otherwise it will be set dynamically in the frontend
    url: meta.canonicalUrl || '',
    // The image property should ideally link to the URL of the media asset
    // Since we only have the ID here, this should ideally be handled in the frontend
    // with a function that resolves the image ID to a URL.
    // For a CMS-level placeholder, we can use a basic structure:
    primaryImageOfPage: meta.image
      ? {
          '@type': 'ImageObject',
          url: `[Media URL for ID: ${meta.image}]`, // Placeholder
          // In a real implementation, you'd fetch the media URL here or in the frontend
        }
      : undefined,
    // Add date properties if needed (e.g., dateModified)
  }

  // Clean up undefined properties
  Object.keys(schema).forEach((key) => schema[key] === undefined && delete schema[key])

  return schema
}

export const SEO: Field = {
  name: 'seo',
  type: 'group',
  fields: [
    {
      name: 'meta',
      label: {
        en: 'SEO',
        de: 'SEO',
      },
      type: 'group',
      fields: [
        MetaTitleField({ hasGenerateFn: true }),
        MetaDescriptionField({ hasGenerateFn: true }),
        MetaImageField({ relationTo: 'media' }),
        {
          name: 'indexing',
          type: 'radio',
          label: 'Indexing',
          options: [
            {
              label: 'Index',
              value: 'index',
            },
            {
              label: 'No Index',
              value: 'noindex',
            },
          ],
          defaultValue: 'index',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'following',
          type: 'radio',
          label: 'Link Following',
          options: [
            {
              label: 'Follow',
              value: 'follow',
            },
            {
              label: 'No Follow',
              value: 'nofollow',
            },
          ],
          defaultValue: 'follow',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'canonicalUrl',
          label: 'Canonical URL',
          type: 'text',
          hooks: {
            beforeChange: [async ({ value }) => value || process.env.BASE_DOMAIN],
          },
        },
        PreviewField({ hasGenerateFn: true }),
        OverviewField({
          titlePath: 'meta.title',
          descriptionPath: 'meta.description',
          imagePath: 'meta.image',
        }),
      ],
    },
  ],
}
