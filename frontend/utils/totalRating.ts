interface Review {
  rating: number;
  // other properties of your review object
}

interface ReviewSummary {
  totalRating: number;
  reviewCount: number;
  individualRatings: number[];
}

const calculateReviewSummary = (reviews: Review[]): ReviewSummary => {
  let totalRating = 0;
  let reviewCount = 0;
  const individualRatings: number[] = [];

  reviews?.forEach((review: Review) => {
    if (review.rating >= 0 && review.rating <= 10) {
      totalRating += review.rating;
      reviewCount++;
      individualRatings.push(review.rating); // Store individual ratings
    }
  });

  return {
    totalRating,
    reviewCount,
    individualRatings,
  };
};

export default calculateReviewSummary;
