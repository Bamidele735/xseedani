import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/sanity";

export default async function createReview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { _id, name, email, review, rating } = req.body;

    // Validate data before creating the document
    if (
      !_id ||
      !name ||
      !email ||
      !review ||
      rating === undefined ||
      rating < 0 ||
      rating > 10
    ) {
      return res.status(400).json({ message: "Invalid data provided" });
    }

    // console.log("req.body", req.body);

    // creating a document in sanity studio CMS for reviews with creating a schema for it
    await client.create({
      _type: "review",
      games: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      review,
      rating,
    });
    return res.status(200).json({ message: "Review submitted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "could not submit review", err });
  }
}
