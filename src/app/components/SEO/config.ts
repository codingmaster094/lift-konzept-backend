import type { Field } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

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
    {
      name: 'structuredData',
      type: 'json',
      admin: {
        hidden: true,
      },
      hooks: {
        afterRead: [
          ({ siblingData }) => {
            return {
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': ['Organization', 'CommunityHealth'],
                  '@id': 'https://protrance.de/#organization',
                  name: 'Protrance',
                  url: 'https://rauchfreidurchhypnose.de/',
                  email: 'info@protrance.de',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Alte Poststr. 12',
                    addressLocality: 'Uhldingen',
                    addressRegion: 'Baden-Württemberg',
                    postalCode: '88690',
                    addressCountry: {
                      '@type': 'Country',
                      name: 'Deutschland',
                    },
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+49 7556 2476 007',
                    contactType: 'customer support',
                  },
                  openingHours: [
                    'Monday,Tuesday,Wednesday 09:00-18:00',
                    'Thursday 09:00-12:00',
                    'Friday 14:00-18:00',
                  ],
                  location: {
                    '@type': 'Place',
                    '@id': 'https://protrance.de/#place',
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: 'Alte Poststr. 12',
                      addressLocality: 'Uhldingen',
                      addressRegion: 'Baden-Württemberg',
                      postalCode: '88690',
                      addressCountry: {
                        '@type': 'Country',
                        name: 'Deutschland',
                      },
                    },
                  },
                },
              ],
            }
          },
        ],
      },
    },
  ],
}
