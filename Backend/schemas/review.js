// Define a new schema for the 'review' document type
export default {
  name: "review", // Name of the document type
  type: "document", // Specify that this is a document type in Sanity
  title: "Review", // Human-readable title for the document type
  fields: [
    {
      name: "name", // Field for the reviewer's name
      type: "string", // Data type: string
    },
    {
      name: "approved", // Field for review approval status
      title: "Approved", // Human-readable field title
      type: "boolean", // Data type: boolean (true/false)
      description: "Review won't show on the site without approval", // Additional information about the field
    },
    {
      name: "email", // Field for the reviewer's email address
      type: "string", // Data type: string
    },
    {
      name: "review", // Field for the review text
      type: "text", // Data type: text
    },
    {
      name: "rating", // Field for the game rating provided by the reviewer
      type: "number", // Data type: number
      title: "Rating", // Human-readable field title
      description: "Rate the game from 1 to 10", // Additional information about the field
      validation: (Rule) => Rule.min(1).max(10), // Validation rule: Rating must be between 1 and 10
    },
    {
      name: "games", // Field for referencing the 'games' document type
      type: "reference", // Data type: reference (references another document)
      to: [{ type: "games" }], // Reference type: 'games' document type
    },
  ],
};
