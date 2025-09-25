import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const CompanyLogo: Field = {
  name: 'companylogo',
  type: 'group',
  label: {
    en: 'Comapnay Logos',
    de: '',
  },
  fields: [
    {
      name: 'comapanylogos',
      type: 'array',
      fields: [
        {
          name: 'heroImage',
          type: 'upload',
          label: {
            en: 'Hero Image',
            de: 'Hero Bild',
          },
          relationTo: 'media',
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          label: {
            en: 'URL',
            de: 'URL',
          },
        },
      ],
    },
  ],
}
