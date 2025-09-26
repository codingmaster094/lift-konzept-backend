import type { GlobalConfig } from 'payload'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { CompanyLogo } from '@/app/components/comapntLogos/config'
import Experience from '@/app/components/Experiance/config'
import VideoSection from '@/app/components/VideoSection/config'
import VorteileSection from '@/app/components/VorteileSection/config'
import StepsSection from '@/app/components/StepsSection/config'
import FaqSection from '@/app/components/FaqSection/config'
import CtaSection from '@/app/components/CtaSection/config'
import { revalidateTreppenlifte } from './hooks/revalidateTreppenlifte'

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
            en: 'Experience',
            de: 'Erfahrung',
          },
          fields: [Experience],
        },
        {
          label: {
            en: 'Video Section',
            de: 'Video-Bereich',
          },
          fields: [VideoSection],
        },
        {
          label: {
            en: 'Vorteile Section',
            de: 'Vorteile Abschnitt',
          },
          fields: [VorteileSection],
        },
        {
          label: {
            en: 'Steps Section',
            de: 'Abschnitt „Schritte“',
          },
          fields: [StepsSection],
        },
        {
          label: {
            en: 'Faq Section',
            de: 'FAQ-Bereich',
          },
          fields: [FaqSection],
        },
        {
          label: {
            en: 'CTA Section',
            de: 'CTA-Abschnitt',
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
