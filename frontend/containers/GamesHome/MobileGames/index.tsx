import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import FadeCarousel from "../../../components/Carousel/FadeCarousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { HomePageGameTypes, GameTypes } from "../../../types/sanityData";
import SkeletonLoader from "../../../components/skeleton";
import UseEmblaCarouselLogic from "../../../components/Carousel/useEmblaCarouselLogic/useEmblaCarouselLogic";
import { calculateReviewStats } from "../../../utils/reviewCount";
import { useIconData } from "../../../components/icons";
import Image from "next/image";
const MobileGames = () => {
  // Redux state selectors
  const game = useSelector((state: RootState) => state.game);
  // const [icons, setIcons] = useState<any | null>(null);

  const { icons } = useIconData();

  // Loading state when data is not available
  if (!game) {
    return <SkeletonLoader />;
  }

  const filterGamesMapping = game.map(
    (gameItem: HomePageGameTypes, index: string) => ({
      game: gameItem,
    })
  );

  // Get the first 8 items from the gameDeveloperPairs array
  const firstSixGameDeveloperPairs = filterGamesMapping.slice(0, 8);

  return (
    <div className={styles.RecentlyAddedDiv}>
      <section className={`${styles.Recent_Header} center`}>
        <h1 className={styles.RecentlyAddedText}>Mobile Games</h1>

        <Link href={`/games?os=android,ios`}>
          <div className={styles.browse_all}>
            <h1>Browse All </h1>
            <div>
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
            </div>
          </div>
        </Link>
      </section>

      <UseEmblaCarouselLogic>
        {(tweenValues: number[]) => (
          <>
            {firstSixGameDeveloperPairs
              .filter(({ game }: { game: GameTypes }) => {
                return game?.operatingSystem.some(
                  (os) => os.name === "ios" || os.name === "android"
                );
              })
              .map(({ game }: { game: HomePageGameTypes }) => {
                // Calculate   average rating using the utility function
                const { averageGameRating } = calculateReviewStats(
                  game?.reviews
                );
                return (
                  <div
                    className={`${styles.embla__slide} `}
                    key={game?._id}
                    style={{
                      ...(tweenValues.length && {
                        opacity: tweenValues[game?._id],
                      }),
                    }}
                  >
                    <FadeCarousel
                      projectImage={game.projectImage}
                      title={game.title}
                      numberOfDownloads={game.numberOfDownloads}
                      slug={game.slug}
                      current={""}
                      averageGameRating={averageGameRating}
                      playable={game.playable}
                      _id={game._id}
                      reviews={game.reviews}
                    />
                  </div>
                );
              })}
          </>
        )}
      </UseEmblaCarouselLogic>
    </div>
  );
};

export default MobileGames;
