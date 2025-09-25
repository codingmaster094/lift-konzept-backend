import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const StepsSection: Field = {
  name: 'StepsSection',
  type: 'group',
  label: {
    en: 'Steps Section',
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
      name: 'Steps_carousel',
      type: 'array',
      label: {
        en: 'Steps_carousel',
        de: 'Steps_carousel',
      },
      minRows: 0,
      labels: {
        singular: { en: 'Steps_carousel', de: '' },
        plural: { en: 'Steps_carousel', de: '' },
      },
      fields: [
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

export default StepsSection
