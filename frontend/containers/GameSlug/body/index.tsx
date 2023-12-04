import React, { useState } from "react";
import styles from "./index.module.css";
import GameInfo from "../GameInfo/gameInfo";
import Review from "../Review";
import { GameDataTypes } from "../../../types/slugData";

export default function SlugBody({ game }: { game: GameDataTypes }) {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav
        className={` ${styles.tablist} relative z-0 flex border rounded-xl overflow-hidden dark:border-gray-700`}
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className={`${styles.tab_section} ${
            activeTab === "overview" ? styles.active_button : ""
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          type="button"
          className={`${styles.tab_section} ${
            activeTab === "rating" ? styles.active_button : ""
          }`}
          onClick={() => handleTabClick("rating")}
        >
          Rating & Review
        </button>
      </nav>
      <div className="mt-3">
        <div
          id="bar-with-underline-1"
          className={`${activeTab === "overview" ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          <GameInfo game={game} />
        </div>
        <div
          id="bar-with-underline-2"
          className={`${activeTab === "rating" ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          <Review game={game} />
        </div>
      </div>
    </div>
  );
}
