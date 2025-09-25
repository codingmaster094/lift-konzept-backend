// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { menus } from './globals/menus/config'
import { Posts } from './collections/posts'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { en } from '@payloadcms/translations/languages/en'
import { de } from '@payloadcms/translations/languages/de'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  // serverURL: 'https://protrance-backend-main.vercel.app',
  i18n: {
    supportedLanguages: { en, de },
  },
  admin: {
    user: Users.slug,
    meta: {
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/images/favicon.png',
        },
      ],
    },
    components: {
      graphics: {
        // Logo: './src/components/graphics/CustomLogo',
      },
    },
  },
  // cors: ['https://protrance-backend-main.vercel.app'],
  collections: [Users, Media, Posts],
  globals: [Header, Footer, menus],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'f104b2795f431aae94c77d75',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb+srv://gawaledipak109_db_user:Headbase@cluster0.4t99yxv.mongodb.net/lift-konzept-main?retryWrites=true&w=majority&appName=Cluster0',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
