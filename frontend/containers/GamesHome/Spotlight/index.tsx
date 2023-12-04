import React from "react";
import SpotLightCarousel from "../../../components/Carousel/SpotLightCarousel";
import styles from "./index.module.css";

export default function SpotLight() {
  return (
    <div className={styles.SpotLight}>
      <div className={`center`}>
        <h1 className={styles.SpotLight_h1}>SpotLight</h1>
      </div>{" "}
      <section>
        <SpotLightCarousel />
      </section>
    </div>
  );
}
