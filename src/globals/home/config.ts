import type { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'
import slugify from 'slugify'
import { Hero } from '@/app/components/Hero/config'
import { CompanyLogo } from '@/app/components/comapntLogos/config'
import Experience from '@/app/components/Experiance/config'
import VideoSection from '@/app/components/VideoSection/config'
import VorteileSection from '@/app/components/VorteileSection/config'
import StepsSection from '@/app/components/StepsSection/config'
import FaqSection from '@/app/components/FaqSection/config'

export const HomePage: GlobalConfig = {
  slug: 'home',
  label: {
    en: 'Homepage',
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
            en: 'Experience',
            de: '',
          },
          fields: [Experience],
        },
        {
          label: {
            en: 'Video Section',
            de: '',
          },
          fields: [VideoSection],
        },
        {
          label: {
            en: 'Vorteile Section',
            de: '',
          },
          fields: [VorteileSection],
        },
        {
          label: {
            en: 'Steps Section',
            de: '',
          },
          fields: [StepsSection],
        },
        {
          label: {
            en: 'Faq Section',
            de: '',
          },
          fields: [FaqSection],
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
    afterChange: [revalidateHome],
  },
}
