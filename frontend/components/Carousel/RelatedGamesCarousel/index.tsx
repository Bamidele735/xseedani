import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import styles from "../FadeCarousel/css/index.module.css";

import { OperatingSystem, Genre } from "../../../types/sanityData";
import SkeletonLoader from "../../skeleton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  game: string;
  projectImage: {
    url: string | null;
  };
  title: string;
  genre: Genre[];
  versionNumber: string;
  numberOfDownloads: number;
  ageRating: string;
  operatingSystem: OperatingSystem[];
  slug: {
    current: string;
  };
  current: string;
  ageRatingIcon: {
    url: string;
  };
  data: any;
  averageRating: number;
};
export default function RelatedGamesCarousel({
  data,
  averageRating,
}: PropType) {
  // Check if game data is available
  if (!data) {
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
          averageRating={averageRating}
        />
      </section>
    </main>
  );
}
