import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category ',
  type: 'document',
  // fields: [
  //   defineField({
  //     name: 'title',
  //     title: 'Title',
  //     type: 'string',
  //   }),
  //   defineField({
  //     name: 'description',
  //     title: 'Description',
  //     type: 'text',
  //   }),
  // ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    },
  ],
})
