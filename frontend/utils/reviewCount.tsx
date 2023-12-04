import { ReviewCountTypes } from "../types/sanityData";
export function calculateReviewStats(reviews: ReviewCountTypes) {
  let totalRating = 0;
  let reviewCount = 0;

  reviews?.map((review: ReviewCountTypes) => {
    if (review?.rating >= 0 && review?.rating <= 10) {
      totalRating += review.rating;
      reviewCount++;
    }
  });

  const averageGameRating = reviewCount > 0 ? totalRating / reviewCount : 0;

  return { reviewCount, averageGameRating };
}
