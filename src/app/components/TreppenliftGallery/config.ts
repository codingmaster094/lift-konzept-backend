import { Field } from 'payload'

export const TreppenliftGallery: Field = {
  name: 'TreppenliftGalerie',
  type: 'group',

  fields: [
    {
      name: 'TreppenliftGalerie',
      type: 'array',
      minRows: 0,
      fields: [
        {
          name: 'Stairlift_Gallery',
          type: 'upload',
          label: {
            en: 'Stairlift Gallery Image',
            de: 'Treppenlift Galerie image',
          },
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}

export default TreppenliftGallery
