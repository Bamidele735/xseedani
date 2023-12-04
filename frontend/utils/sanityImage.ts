import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const useImageUrl = () => {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    useCdn: true,
    apiVersion: "2023-08-31", // use a UTC date string
  });
  const builder = imageUrlBuilder(client);

  const generateImageUrl = (source: string) => {
    return builder.image(source);
  };

  return generateImageUrl;
};

export default useImageUrl;
