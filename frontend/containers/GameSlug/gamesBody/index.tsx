import React from "react";
import styles from "../../../pages/games/index.module.css";
import Image from "next/image";
import SlugBody from "../body";
import RelatedGames from "../relatedGames";
import ModalButton from "../../../components/button/modalButton/button";
import { GameDataTypes } from "../../../types/slugData";
import IconsTypes from "../../../types/icons";
import Link from "next/link";
import ReviewsPage from "../ReviewsPage/ReviewsPage";
import { OperatingSystem } from "../../../types/gamesDataTypes";
export default function GamesBody({
  game,
  icons,
}: {
  game: GameDataTypes;
  icons: IconsTypes;
}) {
  // Image URL generator hook (assuming you have defined this hook)

  // Calculate the total rating and count of reviews
  let totalRating = 0;
  let reviewCount = 0;

  // Iterate through the reviews array and calculate the total rating and count
  game?.reviews.forEach((review) => {
    // Assuming each review object has a 'rating' property representing the user's rating
    if (review.rating >= 0 && review.rating <= 10) {
      totalRating += review.rating;
      reviewCount++;
    }
  });

  // Calculate the average rating
  let averageRating = reviewCount > 0 ? totalRating / reviewCount : 0;
  return (
    <>
      <div className={styles.slug_banner}></div>
      <div className={`${styles.profileBanner} profileBanner_container `}>
        {game.projectBanner.url ? (
          <Image
            src={game?.projectBanner?.url}
            alt={game.title}
            width={500}
            height={100}
          />
        ) : null}
      </div>
      <div className={`center`}>
        <main className={`${styles.slugMain} ${styles.Slug_Main_section}`}>
          {/* Slug Header */}
          <section className={styles.slugHeader}>
            <div className={styles.slugHeader_first_header}>
              <div className={styles.slug_title_rating}>
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
                  <h1>{averageRating?.toFixed(0)}</h1>
                </div>{" "}
                <div className={styles.gamesFlexText}>
                  <h1 className={styles.gameTitle}>{game.title}</h1>
                  <h5 className={styles.gameVersion}>
                    Version {game.versionNumber}
                  </h5>
                </div>
              </div>{" "}
              <div className={styles.btn_div}>
                <button className={styles.Play_btn}>
                  <Link href={game.websiteLink}>
                    {icons.playIcon?.url ? (
                      <Image
                        src={icons?.playIcon.url}
                        width={20}
                        height={20}
                        alt="playIcon"
                      />
                    ) : null}
                    Play
                  </Link>
                </button>{" "}
                <ModalButton>
                  <div className={styles.Review_icon}>
                    {icons.reviewIcon?.url ? (
                      <Image
                        src={icons?.reviewIcon.url}
                        width={20}
                        height={20}
                        alt="reviewIcon"
                      />
                    ) : null}
                  </div>
                  <h3>Review this Game</h3>
                </ModalButton>
              </div>
            </div>
            <div className={styles.slug_tags_section}>
              <div className={styles.slug_text}>
                {game.blockchain
                  ? game.blockchain?.slice(0, 1).map((data) => (
                      <div key={data.name}>
                        {data.icon?.url ? (
                          <Image
                            src={data.icon?.url}
                            width={20}
                            height={20}
                            alt="icons"
                          />
                        ) : null}
                        <h1>{data.name} </h1>
                      </div>
                    ))
                  : null}

                {game.operatingSystem
                  ?.slice(0, 1)
                  .map((data, index: number) => (
                    <div key={index}>
                      {data.icon?.url ? (
                        <Image
                          src={data?.icon?.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}

                      <h1>{data.name} </h1>
                    </div>
                  ))}
                <div>
                  {game.playable != true ? (
                    <div>
                      {icons?.betaIcon.url ? (
                        <Image
                          src={icons?.betaIcon.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}

                      <h1>Beta</h1>
                    </div>
                  ) : (
                    <div>
                      {icons?.playableIcon.url ? (
                        <Image
                          src={icons?.playableIcon.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}

                      <h1>Playable</h1>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.game_link_div}>
                {game.websiteLink ? (
                  <Link href={game.websiteLink} target="_blank">
                    <button>
                      {icons?.website.url ? (
                        <Image
                          src={icons?.website.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}
                {game.downloadLocation ? (
                  <Link href={game.downloadLocation} target="_blank">
                    <button>
                      {icons?.download.url ? (
                        <Image
                          src={icons?.download.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}
                {game.gameLink ? (
                  <Link href={game.gameLink} target="_blank">
                    <button>
                      {icons?.link.url ? (
                        <Image
                          src={icons?.link?.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}
                {game.twitterLink ? (
                  <Link href={game.twitterLink} target="_blank">
                    <button>
                      {icons?.twitter.url ? (
                        <Image
                          src={icons?.twitter.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}{" "}
                {game.telegramLink ? (
                  <Link href={game.telegramLink} target="_blank">
                    <button>
                      {icons?.telegram.url ? (
                        <Image
                          src={icons?.telegram?.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}{" "}
                {game.discordLink ? (
                  <Link href={game.discordLink} target="_blank">
                    <button>
                      {icons?.discord.url ? (
                        <Image
                          src={icons?.discord.url}
                          width={20}
                          height={20}
                          alt="icons"
                        />
                      ) : null}
                    </button>{" "}
                  </Link>
                ) : null}
              </div>
            </div>
            {/* Slug Header */}
          </section>

          <section className={styles.Not_available}>
            {/* slug body */}
            <SlugBody game={game} />
            {/* slug body */}
            <div>
              <div className={styles.genre_body}>
                {game?.genre?.map((data, index) => (
                  <div key={index}>
                    <h1>{data.name} </h1>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <div id="reviews">
          <ReviewsPage game={game} />
        </div>
      </div>
      <div>
        <RelatedGames game={game.related} />
      </div>
    </>
  );
}
