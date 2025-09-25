import {
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const Experience: Field = {
  name: 'Experience',
  type: 'group',
  label: {
    en: 'Experience Section',
    de: '',
  },
  fields: [
    {
      name: 'experiance_image1',
      type: 'upload',
      label: {
        en: 'Experience Image',
        de: '',
      },
      relationTo: 'media',
      required: false,
    },
    {
      name: 'experiance_image2',
      type: 'upload',
      label: {
        en: 'Experience Image',
        de: '',
      },
      relationTo: 'media',
      required: false,
    },
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
      name: 'richText',
      type: 'richText',
      label: {
        en: 'Rich Text',
        de: '',
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
    {
      name: 'experiance',
      type: 'array',
      label: {
        en: 'experiance',
        de: 'experiance',
      },
      minRows: 0,
      labels: {
        singular: { en: 'experiance', de: '' },
        plural: { en: 'experiance', de: '' },
      },
      fields: [
        {
          name: 'experianceImage',
          type: 'upload',
          label: {
            en: 'sub experiance Image',
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
      ],
    },
  ],
}

export default Experience
