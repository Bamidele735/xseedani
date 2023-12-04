import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { GameTypes, Review } from "../../../types/sanityData";
import { useIconData } from "../../../components/icons";

export default function TopRatedGames() {
  const game = useSelector((state: RootState) => state.game);
  const { icons } = useIconData();

  // Sort games based on average rating in descending order and select the first five games
  const firstFiveGames = game
    ?.sort((a: GameTypes, b: GameTypes) => {
      let aTotalRating = 0;
      let aReviewCount = 0;
      a.reviews?.forEach((review: Review) => {
        if (review?.rating >= 0 && review?.rating <= 10) {
          aTotalRating += review.rating;
          aReviewCount++;
        }
      });
      const aAverageRating = aReviewCount > 0 ? aTotalRating / aReviewCount : 0;

      let bTotalRating = 0;
      let bReviewCount = 0;
      b.reviews?.forEach((review: Review) => {
        if (review?.rating >= 0 && review?.rating <= 10) {
          bTotalRating += review.rating;
          bReviewCount++;
        }
      });
      const bAverageRating = bReviewCount > 0 ? bTotalRating / bReviewCount : 0;

      return bAverageRating - aAverageRating;
    })
    .slice(0, 5);

  return (
    <div className={styles.TopRatedGames}>
      <section className={styles.TopRatedGames_Header}>
        {" "}
        {icons ? (
          <div className={styles.topRatedIconImage}>
            {icons[0]?.topRatedIcon?.url ? (
              <Image
                src={icons[0]?.topRatedIcon?.url}
                alt=""
                width={30}
                height={120}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          <div></div>
        )}
        <h1 className={styles.TopRatedGamesText}>Top Rated Games</h1>
      </section>
      <div className={styles.TopRatedGames_Post_Section}>
        {game ? (
          <div className={`${styles.TopRatedGames_Post_Section}  mx-auto`}>
            {firstFiveGames.map((data: GameTypes, index: number) => {
              let totalRating = 0;
              let reviewCount = 0;

              data?.reviews?.map((review) => {
                if (review?.rating >= 0 && review?.rating <= 10) {
                  totalRating += review.rating;
                  reviewCount++;
                }
              });

              const averageRating =
                reviewCount > 0 ? totalRating / reviewCount : 0;

              return (
                <div key={data._id} className={styles.TopRatedGames_section}>
                  <Link
                    key={data._key}
                    href={`/games/[slug]`}
                    as={`/games/${data?.slug?.current}`}
                  >
                    <div className={styles.TopRatedGames_Images_Section}>
                      <h1 className={styles.TopRatedGamesNo}>{index + 1}</h1>
                      {data.projectImage ? (
                        <Image
                          src={data.projectImage.url}
                          alt={data.title}
                          width={500}
                          height={100}
                          data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                        />
                      ) : (
                        <div>No Image</div>
                      )}
                    </div>
                    <section className={styles.categories_name}>
                      <div className={styles.rating}>
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
                          <h1>{averageRating.toFixed(1)}</h1>
                        </div>{" "}
                      </div>
                      <div className={styles.title_div_category}>
                        <h1 className={styles.imageTitle}>{data.title}</h1>
                        {/* {data?.reviews?.map((data, index) => ( */}
                        <h4 key={index}>
                          {data?.review?.length != 0
                            ? `Rated by ${data.reviews.length} users
                              `
                            : `Not yet rated`}
                        </h4>
                        {/* ))} */}
                      </div>
                    </section>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          "No Videos"
        )}
      </div>
      <div className={styles.browseBtn}>
        {" "}
        <Link href="/allGames?sortBy=firstFiveGames">
          <button>
            <h5>Browse All</h5>
            {icons?.arrowIcon?.url ? (
              <Image
                src={
                  icons?.arrowIcon.url != undefined
                    ? icons?.arrowIcon?.url
                    : "#"
                }
                alt=""
                width={100}
                height={100}
              />
            ) : (
              ""
            )}
          </button>
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
