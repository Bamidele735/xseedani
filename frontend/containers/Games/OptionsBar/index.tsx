import React from "react";
import Styles from "./index.module.css";
import Filter from "./Filter";
import BrowseGame from "./BrowseGame";
export default function OptionsBar() {
  return (
    <div>
      <div className={Styles.OptionsBar}>
        <section>
          <div>
            <h1>Genre</h1>
            <Filter />
          </div>
        </section>
        <section>
          <div>
            <h1>Genre</h1>
            <Filter />
          </div>
        </section>
        <section>
          <div>
            <h1>Genre</h1>
            <Filter />
          </div>
        </section>
      </div>
      {/* Game Table */}
      <section>
        <BrowseGame />
      </section>
    </div>
  );
}
