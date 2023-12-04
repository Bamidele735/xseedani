import React from "react";
import NodeBanner from "../../assects/node_banner.png";
import grimclaw from "../../assects/grimclaw.png";
import Image from "next/image";
import styles from "./node.module.css";
import Payment from "./nodePayment/payment";

import Tokenomics from "./Tokenomics";

export default function NodePage() {
  return (
    <div className={` ${styles.NodePage}`}>
      <div className={styles.nodeSection}>
        <Image
          src={NodeBanner}
          alt="NodeBanner"
          className={styles.NodePageImg}
          width={800}
          height={800}
        />
        <div className={styles.nodeabsolute}>
          <h2>
            Metaxseed games <br />
            master Nodes
          </h2>
          <Image
            src={grimclaw}
            alt="grimclaw"
            className={styles.NodePageImg}
            width={800}
            height={800}
          />
        </div>
      </div>
      <Payment />

      <Tokenomics />
    </div>
  );
}
