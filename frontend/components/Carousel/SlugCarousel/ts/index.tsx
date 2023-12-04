import React, { useRef, useState, useEffect } from "react";
import EmblaCarousel from "./EmblaCarousel";
import styles from "../css/index.module.css";

const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function SlugSlider() {
  return (
    <main className={``}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
}
