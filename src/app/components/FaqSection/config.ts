import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const FaqSection: Field = {
  name: 'FaqSection',
  type: 'group',
  label: {
    en: 'Faq Section',
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
      name: 'FaqContent',
      type: 'array',
      label: {
        en: 'Faq Content',
        de: 'Faq Content',
      },
      minRows: 0,
      labels: {
        singular: { en: 'Faq Content', de: '' },
        plural: { en: 'Faq Content', de: '' },
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

export default FaqSection
