import React, { useEffect, useState } from "react";
import styles from "../MobileGames/index.module.css";
import FadeCarousel from "../../../components/Carousel/FadeCarousel";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import UseEmblaCarouselLogic from "../../../components/Carousel/useEmblaCarouselLogic/useEmblaCarouselLogic";
import SkeletonLoader from "../../../components/skeleton";
import { GameTypes, HomePageGameTypes } from "../../../types/sanityData";
import Image from "next/image";
import { fetchIcons } from "../../../lib/icons";
import { calculateReviewStats } from "../../../utils/reviewCount";

const TopGames = ({}) => {
  // Redux state selectors
  const game = useSelector((state: RootState) => state.game);

  const [icons, setIcons] = useState<any | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const media = await fetchIcons();
      setIcons(media);
    };

    fetchLogo();
  }, []);

  // Loading state when data is not available
  if (!game) {
    return <SkeletonLoader />;
  }

  // Sort games by the highest number of downloads
  const sortedGames = game
    .slice() // Create a copy of the array to avoid mutating the original array
    .sort(
      (a: { numberOfDownloads: number }, b: { numberOfDownloads: number }) =>
        b.numberOfDownloads - a.numberOfDownloads
    )
    .slice(0, 10); // Take the top 10 games

  // Pair game data with corresponding developers
  const gameDeveloperPairs = sortedGames.map((gameItem: GameTypes) => ({
    game: gameItem,
  }));

  return (
    <div className={styles.RecentlyAdded}>
      <div className={`center`}>
        <section className={`${styles.topGamesHeader} `}>
          {icons ? (
            <div className={styles.topRatedIconImage}>
              {icons[0]?.topGamesIcon?.url ? (
                <Image
                  src={icons[0]?.topGamesIcon?.url}
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
          <h1 className={styles.RecentlyAddedText}> Top Games</h1>
        </section>
      </div>

      <div className={styles.topGameBtn}>
        <UseEmblaCarouselLogic>
          {(tweenValues: number[]) => (
            <>
              {gameDeveloperPairs.map(
                ({ game }: { game: HomePageGameTypes }) => {
                  // Calculate   average rating using the utility function
                  const { averageGameRating } = calculateReviewStats(
                    game?.reviews
                  );

                  return (
                    <div
                      className={`${styles.embla__slide} `}
                      key={game._id}
                      style={{
                        ...(tweenValues.length && {
                          opacity: tweenValues[game._id],
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
                }
              )}
            </>
          )}
        </UseEmblaCarouselLogic>
      </div>
    </div>
  );
};

export default TopGames;
