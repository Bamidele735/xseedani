import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import styles from "./css/index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SkeletonLoader from "../../skeleton";
import { HomePageGameTypes } from "../../../types/sanityData";

export default function FadeCarousel({
  projectImage,
  title,
  numberOfDownloads,
  slug,
  averageGameRating,
  playable,
  _id,
  reviews,
}: HomePageGameTypes) {
  const game = useSelector((state: RootState) => state.game);

  // Check if game data is available
  if (!game) {
    // Handle the loading state, for example, show a loading indicator
    return (
      <div>
        {" "}
        <SkeletonLoader />
      </div>
    ); // You can replace this with your loading indicator component.
  }
  return (
    <main className={styles.sandbox}>
      <section className={styles.sandbox__carousel}>
        <EmblaCarousel
          projectImage={projectImage}
          title={title}
          numberOfDownloads={numberOfDownloads}
          slug={slug}
          current={""}
          averageGameRating={averageGameRating}
          playable={playable}
          _id={_id}
          reviews={reviews}
        />
      </section>
    </main>
  );
}
