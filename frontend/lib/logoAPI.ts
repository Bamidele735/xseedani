import { client } from "../utils/sanity";

export async function fetchLogoData() {
  try {
    const logo = await client.fetch(`*[_type == "logo"]`);
    return logo;
  } catch (error) {
    // Handle errors if necessary
    console.error("Error fetching logo data:", error);
    return null;
  }
}
