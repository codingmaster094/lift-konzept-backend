import { Field } from 'payload'
export const TreppenliftGallery: Field = {
  name: 'TreppenliftGallery',
  type: 'group',
  fields: [
    {
      name: 'TreppenliftGallery',
      type: 'array',
      minRows: 0,
      fields: [
        {
          name: 'Stairliftgallery',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
