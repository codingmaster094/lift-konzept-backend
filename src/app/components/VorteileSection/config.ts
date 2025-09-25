import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const VorteileSection: Field = {
  name: 'VorteileSection',
  type: 'group',
  label: {
    en: 'Vorteile Section',
    de: '',
  },
  fields: [
    {
      name: 'Heading',
      type: 'text',
      label: {
        en: 'Heading',
        de: '',
      },
    },
    {
      name: 'SubHeading',
      type: 'text',
      label: {
        en: 'Sub Heading',
        de: '',
      },
    },
    {
      name: 'Vorteile_carousel',
      type: 'array',
      label: {
        en: 'Vorteile_carousel',
        de: 'Vorteile_carousel',
      },
      minRows: 0,
      labels: {
        singular: { en: 'Vorteile_carousel', de: '' },
        plural: { en: 'Vorteile_carousel', de: '' },
      },
      fields: [
        {
          name: 'Vorteile_carouselImage',
          type: 'upload',
          label: {
            en: 'Vorteile_carousel Image',
            de: '',
          },
          relationTo: 'media',
          required: false,
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'title',
            de: '',
          },
        },
        {
          name: 'richText',
          type: 'richText',
          label: {
            en: 'Rich Text',
            de: 'Rich Text',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
              EXPERIMENTAL_TableFeature(),
            ],
          }),
        },
      ],
    },
  ],
}

export default VorteileSection
