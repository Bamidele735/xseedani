export default {
  name: "socialMediaLinks",
  title: "Social Media Links",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "writeToUsLink",
      title: "Write To Us Link",
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
      name: "partneWithUsLink",
      title: "Partner With Us Link",
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
      name: "telegramLink",
      title: "Telegram Link",
      type: "string",
    },
    {
      name: "telegramIcon",
      title: "Telegram Icon",
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
      name: "discordLink",
      title: "Discord Link",
      type: "string",
    },
    {
      name: "DiscordIcon",
      title: "Discord Icon",
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
      name: "mediumLink",
      title: "Medium Link",
      type: "string",
    },
    {
      name: "mediumIcon",
      title: "Medium Icon",
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
      name: "twitterLink",
      title: "Twitter Link",
      type: "string",
    },
    {
      name: "twitterIcon",
      title: "Twitter Icon",
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
      name: "youtubeLink",
      title: "Youtube Link",
      type: "string",
    },
    {
      name: "youtubeIcon",
      title: "Youtube Icon",
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
  ],
};
