import React from "react";
import MobileGames from "./MobileGames/index";
import styles from "./index.module.css";
import PCGames from "./PCGames/index";
import SpotLight from "./Spotlight";
import TopGames from "./TopGames";
import TopRatedGames from "./TopRatedGames/index";
import MostRecentGame from "./MostRecentGame";
export default function Index() {
  return (
    <div className={``}>
      <MobileGames />
      <PCGames />
      <SpotLight />
      <TopGames />
      <div className={`${styles.flexLayout} center`}>
        <section className={styles.col50}>
          <TopRatedGames />
        </section>
        <section className={styles.col50}>
          <MostRecentGame />
        </section>{" "}
      </div>
    </div>
  );
}
