import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import styles from "./css/index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  containScroll: "trimSnaps",
};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function SpotLightCarousel() {
  const game = useSelector((state: RootState) => state.game);

  // Check if game data is available
  if (!game) {
    // Handle the loading state, for example, show a loading indicator
    return <div>Loading...</div>; // You can replace this with your loading indicator component.
  }

  return (
    <main className={styles.sandbox}>
      <section className={styles.sandbox__carousel}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </main>
  );
}
