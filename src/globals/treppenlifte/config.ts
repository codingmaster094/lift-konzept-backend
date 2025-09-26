import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { CompanyLogo } from '@/app/components/comapntLogos/config'
import { revalidateTreppenlifte } from './hooks/revalidateTreppenlifte'
import TreppenliftAdvisor from '@/app/components/TreppenliftAdvisor/config'
import CtaSection from '@/app/components/CtaSection/config'

export const TreppenliftePage: GlobalConfig = {
  slug: 'treppenlifte',
  label: {
    en: 'Treppenliftepage',
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
            de: 'Firmenlogo',
          },
          fields: [CompanyLogo],
        },
        {
          label: {
            en: 'Stairlift Advisor',
            de: 'Treppenlift-Berater',
          },
          fields: [TreppenliftAdvisor],
        },
        {
          label: {
            en: 'CTA Section',
            de: 'CTA Abschnitt',
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
    afterChange: [revalidateTreppenlifte],
  },
}
