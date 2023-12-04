import { client } from "../utils/sanity";

export async function fetchSocialMediaLinks() {
  try {
    const mediaLinks = await client.fetch(`*[_type == "socialMediaLinks"]`);
    return mediaLinks;
  } catch (error) {
    // Handle errors if necessary
    console.error("Error fetching socialMediaLinks data:", error);
    return null;
  }
}
