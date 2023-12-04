// client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: true,
  apiVersion: "2023-08-31",
});

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_DATASET,
//   useCdn: false,
//   apiVersion: '2023-08-31',
// });
// export const =  createClient(publishedAt: string) {
//   const publishedDate = new Date(publishedAt);
//   return publishedDate.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
// }
