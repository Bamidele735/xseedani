import React from "react";
import styles from "./index.module.css";

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonLoader}>
      <div className={styles.skeletonLoader_div}>
        <div className={styles.skeletonHeader}></div>
        <div className={styles.skeletonContent}></div>
      </div>{" "}
      <div className={styles.skeletonLoader_div}>
        <div className={styles.skeletonHeader}></div>
        <div className={styles.skeletonContent}></div>
      </div>{" "}
      <div className={styles.skeletonLoader_div}>
        <div className={styles.skeletonHeader}></div>
        <div className={styles.skeletonContent}></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
