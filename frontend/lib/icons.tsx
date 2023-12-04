import { client } from "../utils/sanity";

export async function fetchIcons() {
  try {
    const mediaLinks = await client.fetch(`*[_type == "icons"]`);
    return mediaLinks;
  } catch (error) {
    // Handle errors if necessary
    console.error("Error fetching icons data:", error);
    return null;
  }
}
