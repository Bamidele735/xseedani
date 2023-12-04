export default {
  name: "games",
  title: "Games",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => document.status === "hide",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "gameIcon",
      title: "Game Icon",
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
      name: "versionNumber",
      title: "Version Number",
      type: "string",
    },
    {
      name: "ageRating",
      title: " Age Rating",
      type: "string",
    },
    {
      name: "ageRatingIcon",
      title: "Age Rating Icon",
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
      name: "gameLink",
      title: "Game Link",
      type: "string",
    },
    {
      name: "downloadLocation",
      title: "Download Location",
      type: "string",
    },
    {
      name: "nftContracts",
      title: "NFT Contracts",
      type: "string",
    },
    {
      name: "freeToPlay",
      title: "Free To Play",
      type: "boolean",
    },
    {
      name: "playable",
      title: "Playable",
      type: "boolean",
    },
    {
      name: "spotlight",
      title: "Spotlight",
      type: "boolean",
    },
    {
      name: "currentStage",
      title: "Current Stage",
      type: "array",
      of: [{ type: "reference", to: { type: "currentStage" } }],
    },

    {
      name: "operatingSystem",
      title: "Operating System",
      type: "array",
      of: [{ type: "reference", to: { type: "operatingSystem" } }],
    },

    {
      name: "developer",
      title: "Developer",
      type: "reference",
      to: { type: "developer" },
    },

    {
      name: "genre",
      title: "Genre",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
    },
    {
      name: "blockchain",
      title: "Blockchain",
      type: "array",
      of: [{ type: "reference", to: { type: "blockchain" } }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },

    {
      name: "projectBanner",
      title: "Project Banner",
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
      name: "projectImage",
      title: "Project Image",
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
      name: "numberOfDownloads",
      title: "Number Of Downloads",
      type: "number",
    },
    {
      name: "currentPlayersCount",
      title: "Current Players Count",
      type: "number",
    },
    {
      name: "followersCount",
      title: "Followers Count",
      type: "number",
    },
    {
      name: "rewardPool",
      title: "Reward Pool",
      type: "string", // You mentioned it's in dollars, so using string for simplicity
    },
    {
      name: "adRevenueGenerated",
      title: "Ad Revenue Generated",
      type: "string", // Using string for simplicity, can be changed to number if needed
    },
    {
      name: "twitterLink",
      title: "Twitter Link",
      type: "string",
    },
    {
      name: "websiteLink",
      title: "Website Link",
      type: "string",
    },
    {
      name: "telegramLink",
      title: "Telegram Link",
      type: "string",
    },
    {
      name: "discordLink",
      title: "Discord Link",
      type: "string",
    },
    {
      name: "introductionText",
      title: "Introduction Text",
      type: "blockContent",
    },

    {
      name: "firstVideo",
      title: "First Video",
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
      name: "firstImage",
      title: "First Image",
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
      name: "secondImage",
      title: "Second Image",
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
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(160)
          .error("A description of min. 160 characters is required"),
        Rule.max(170).warning(
          "A description of maximum 170 characters is required"
        ),
      ],
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
      developer: "developer.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { developer } = selection;
      return Object.assign({}, selection, {
        subtitle: developer && `by ${developer}`,
      });
    },
  },
};
