import React from "react";
import styles from "./ReviewsPage.module.css";
import { GameDataTypes, Review } from "../../../types/slugData";
export default function ReviewsPage({ game }: { game: GameDataTypes }) {
  return (
    <div className={styles.ReviewsPage}>
      {" "}
      {/* review */}
      {game.reviews.length != 0 ? (
        <div className={styles.ReviewsPage_bg}>
          <h3 className="pb-2 text-3xl">Reviews</h3>
        </div>
      ) : null}
      {game.reviews.length != 0 ? (
        game?.reviews?.map((review: Review) => (
          <div key={review._id} className={styles.review_main}>
            <div className={styles.ReviewsPage_header}>
              <div className={styles.reviewerProfile}>
                <section></section>
                <section className={styles.review_profile_title}>
                  {/* <h1>{review.name}</h1> */}
                  <div
                    className={`${
                      review.rating === 0
                        ? styles.gray_bg
                        : review.rating >= 0 && review.rating <= 4
                        ? styles.red_bg
                        : review.rating > 4 && review.rating <= 6
                        ? styles.yellow_bg
                        : styles.green_bg
                    } ${styles.ratingNumber}`}
                  >
                    <h1>{review?.rating?.toFixed(1)}</h1>
                  </div>
                </section>
              </div>
              <div>
                <h2>
                  Published on{" "}
                  {new Date(review._createdAt).toLocaleDateString()}
                </h2>
              </div>
            </div>

            <hr />
            <p className={styles.reviews_text}>{review.review}</p>
          </div>
        ))
      ) : (
        <div className={styles.no_reviews}>
          <h3>No reviews yet</h3>

          <p>Be the first to review this game!</p>
        </div>
      )}
    </div>
  );
}
