import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { GameDataTypes, Review } from "../../../types/slugData";
interface IFormInput {
  email: string;
  name: string;
  review: string;
}

const Rating = ({ game }: { game: GameDataTypes }) => {
  const gameSlugData = useSelector((state: RootState) => state.gameSlugData);

  const [submitted, setSubmitted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication status

  // Check for authentication cookie when component mounts
  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");
    if (sessionToken) {
      setAuthenticated(true);
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const dataToSend = {
      _id: game._id,
      data,
    };

    fetch("/api/createReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          setSubmitted(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setSubmitted(false);
      });
    // console.log("dataToSend", dataToSend);
  };

  // Assuming reviews is your array of reviews as described in your question

  // Calculate the total rating and count of reviews
  let totalRating = 0;
  let reviewCount = 0;

  // Iterate through the reviews array and calculate the total rating and count
  gameSlugData?.reviews?.forEach((review: Review) => {
    // Assuming each review object has a 'rating' property representing the user's rating
    if (review?.rating >= 0 && review?.rating <= 10) {
      totalRating += review?.rating;
      reviewCount++;
    }
  });

  // Calculate the average rating
  let averageRating = reviewCount > 0 ? totalRating / reviewCount : 0;

  // Calculate the number of users who rated the game within different ranges
  const positiveRatingUsers = gameSlugData?.reviews?.filter(
    (review: Review) => review.rating >= 7
  ).length;
  const averageRatingUsers = gameSlugData?.reviews?.filter(
    (review: Review) => review.rating >= 4 && review.rating <= 6
  ).length;
  const poorRatingUsers = gameSlugData?.reviews?.filter(
    (review: Review) => review.rating >= 0 && review.rating <= 3
  ).length;

  return (
    <div className={styles.Rating}>
      <section>
        <header>Overall Rating</header>
        <div className={styles.ratingDiv}>
          {" "}
          <div
            className={`${
              averageRating === 0
                ? styles.gray_bg
                : averageRating >= 0 && averageRating <= 4
                ? styles.red_bg
                : averageRating > 4 && averageRating <= 6
                ? styles.yellow_bg
                : styles.green_bg
            } ${styles.ratingNumber}`}
          >
            <h1>{averageRating.toFixed(2)}</h1>

            <p> User Score</p>
          </div>
          <section className={styles.users_ratings}>
            <div>
              <div className={styles.rated}>
                {gameSlugData?.reviews?.length === 0 ? (
                  <h1>0 users rated this game</h1>
                ) : (
                  <h1> {reviewCount} users rated this game</h1>
                )}{" "}
                <h4>
                  {reviewCount === 0
                    ? "no-reviews"
                    : reviewCount >= 1 && reviewCount <= 3
                    ? "poor-review"
                    : reviewCount >= 4 && reviewCount <= 7
                    ? "average-review"
                    : "positive-review"}
                </h4>
              </div>
            </div>
            <div className={styles.rating_box}>
              <ul>
                <li className={styles.green_color}> 7+ rating</li>
                <li className={styles.yellow_color}> 4 to 7 rating</li>
                <li className={styles.red_color}>4 - rating</li>
              </ul>

              <ul>
                <li className={styles.users}>{positiveRatingUsers} users</li>
                <li className={styles.users}>{averageRatingUsers} users</li>
                <li className={styles.users}>{poorRatingUsers} users</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Rating;
