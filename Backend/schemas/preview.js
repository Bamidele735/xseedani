export default {
  name: "preview",
  title: "Preview",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "git",
      title: "Git",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
      options: {
        source: "details",
        maxLength: 500,
      },
    },
    {
      name: "previewImageTwo",
      title: "Preview Image 2 ",
      type: "object",
      fields: [
        {
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "previewImage",
      title: "Preview Image",
      type: "object",
      fields: [
        {
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "Image",
    },
  },
};
