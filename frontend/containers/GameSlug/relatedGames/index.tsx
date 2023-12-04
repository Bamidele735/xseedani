import React from "react";
import styles from "../../GamesHome/MobileGames/index.module.css";
import RelatedGamesCarousel from "../../../components/Carousel/RelatedGamesCarousel";
import UseEmblaCarouselLogic from "../../../components/Carousel/useEmblaCarouselLogic/useEmblaCarouselLogic";
import { GameTypes, HomePageGameTypes } from "../../../types/sanityData";
import { calculateReviewStats } from "../../../utils/reviewCount";

const RelatedGames = ({ game }: { game: GameTypes }) => {
  return (
    <div className={styles.RecentlyAdded}>
      <h1 className={`${styles.RecentlyAddedText} center`}> Related Games</h1>
      <UseEmblaCarouselLogic>
        {(tweenValues: number[]) => (
          <>
            {game.map((data: HomePageGameTypes) => {
              // Calculate   average rating using the utility function
              const { averageGameRating } = calculateReviewStats(data?.reviews);

              return (
                <div
                  className={styles.embla__slide}
                  key={data._id}
                  style={{
                    ...(tweenValues.length && {
                      opacity: tweenValues[data._id as number],
                    }),
                  }}
                >
                  <RelatedGamesCarousel
                    data={data}
                    slides={[]}
                    game={""}
                    projectImage={{
                      url: null,
                    }}
                    title={""}
                    genre={[]}
                    versionNumber={""}
                    numberOfDownloads={0}
                    ageRating={""}
                    operatingSystem={[]}
                    slug={{
                      current: "",
                    }}
                    current={""}
                    ageRatingIcon={{
                      url: "",
                    }}
                    averageRating={averageGameRating}
                  />
                </div>
              );
            })}
          </>
        )}
      </UseEmblaCarouselLogic>

      <div className={styles.RecentlyAdded_Body}></div>
    </div>
  );
};

export default RelatedGames;
