import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { GameTypes } from "../../../types/sanityData";
import { useIconData } from "../../../components/icons";

export default function MostRecentGame() {
  const game = useSelector((state: RootState) => state.game);

  // console.log(game);

  const { icons } = useIconData();

  // Sort games based on _updatedAt date and select the most recent 3 games
  const mostRecentGames = game
    ?.sort(
      (a: { _updatedAt: string }, b: { _updatedAt: string }) =>
        new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime()
    )
    .slice(0, 5); // Select the first 3 most recent games based on _updatedAt date

  return (
    <div className={styles.MostRecentGame}>
      <section className={styles.MostRecentGame_Header}>
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
        <h1 className={styles.MostRecentGameText}>Most Recent Games</h1>
      </section>
      <div className={styles.MostRecentGame_Post_Section}>
        {game ? (
          <div className={`${styles.MostRecentGame_Post_Section}  mx-auto`}>
            {mostRecentGames.map((data: GameTypes, index: number) => {
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
                <div key={data._id} className={styles.MostRecentGame_section}>
                  <Link
                    key={data._key}
                    href={`/games/[slug]`}
                    as={`/games/${data?.slug?.current}`}
                  >
                    <div className={styles.MostRecentGame_Images_Section}>
                      <h1 className={styles.MostRecentGameNo}>{index + 1}</h1>
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
                        <section>
                          {" "}
                          {data?.genre?.slice(0, 2).map((category, index) => (
                            <h4 key={index}>{category.name}..</h4>
                          ))}
                        </section>
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
        <Link href="/allGames?sortBy=_updatedAt">
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
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
