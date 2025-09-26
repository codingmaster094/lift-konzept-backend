import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { CompanyLogo } from '@/app/components/comapntLogos/config'
import { KostenEinesSection } from '@/app/components/KostenEinesSection/config'
import CtaSection from '@/app/components/CtaSection/config'
import { revalidatekosten_finanzierung } from './hooks/revalidatekosten&finanzierung'

export const kosten_finanzierung: GlobalConfig = {
  slug: 'kosten-finanzierung',
  label: {
    en: 'kosten&finanzierung',
    de: 'Startseite',
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
            en: 'Hero',
            de: 'Held',
          },
          fields: [Hero],
        },
        {
          label: {
            en: 'company Logo',
            de: '',
          },
          fields: [CompanyLogo],
        },
        {
          label: {
            en: 'KostenEines Section',
            de: '',
          },
          fields: [KostenEinesSection],
        },
        {
          label: {
            en: 'CTA Section',
            de: '',
          },
          fields: [CtaSection],
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
    afterChange: [revalidatekosten_finanzierung],
  },
}
