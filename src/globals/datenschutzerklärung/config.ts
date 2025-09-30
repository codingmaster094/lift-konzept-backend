import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import { revalidateDatenschutzerklärung } from './hooks/revalidateDatenschutzerklärung'
import { richTextData } from '@/app/components/richText/config'

export const Datenschutzerklärung: GlobalConfig = {
  slug: 'datenschutzerklarung',
  label: {
    en: 'Datenschutzerklärung',
    de: '',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
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
      tabs: [
        {
          label: {
            en: 'Content',
            de: '',
          },
          fields: [richTextData],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: {
        en: 'Published At',
        de: 'Veröffentlicht am',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateDatenschutzerklärung],
  },
}
