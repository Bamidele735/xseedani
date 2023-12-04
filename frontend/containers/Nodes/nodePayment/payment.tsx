import React from "react";
import ethLogo from "../../../assects/ethIcon.png";
import usdcLogo from "../../../assects/bnb.png";
import btclogo from "../../../assects/btc.png";
import Image from "next/image";
import styles from "./nodePayment.module.css";
import Counter from "../../../components/counter";
import TermsAndCondition from "../termsAndCondition";
import Submit from "../submit";
export default function Payment() {
  return (
    <div className={styles.Payment}>
      <section className={styles.nodeSold}>
        <video autoPlay loop muted playsInline>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/metaxseed-1966c.appspot.com/o/website%2Fpage_node_sale%2Fnode_cube.mp4?alt=media&token=b3e512f4-fc86-4722-a97e-8eb8cdb86530"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>{" "}
        <div className={styles.paymentInput}>
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>{" "}
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>{" "}
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>
        </div>
      </section>
      <section className={styles.nodePayment}>
        <h4>Select payment method</h4>
        <div
          className={`${styles.PaymentDropdown} hs-dropdown relative inline-flex`}
        >
          <div id="hs-dropdown-default" className={styles.hs_droppdown}>
            <div className={styles.dropdownDiv}>
              <Image
                src={ethLogo}
                alt="chainLogo"
                className={styles.chainLogo}
                width={500}
                height={500}
              />
              <div className={styles.TokenSection}>
                <p>Token</p>
                <div>
                  <Image
                    src={usdcLogo}
                    className={styles.NetworkLogo}
                    alt="XseedLogo"
                    width={500}
                    height={500}
                  />{" "}
                  <p>USDC</p>
                </div>
              </div>{" "}
              <div className={styles.NetworkSection}>
                <header>Network</header>
                <p>Ethereum</p>
              </div>
            </div>
            <svg
              className="hs-dropdown-open:rotate-180 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div
            className={`${styles.hs_droppdownBody} hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full
            `}
            aria-labelledby="hs-dropdown-default"
          >
            <div id="hs-dropdown-default">
              {" "}
              <div className={styles.dropdownDiv}>
                <Image
                  src={ethLogo}
                  alt="chainLogo"
                  className={styles.chainLogo}
                  width={500}
                  height={500}
                />
                <div className={styles.TokenSection}>
                  <p>Token</p>
                  <div>
                    <Image
                      src={btclogo}
                      className={styles.NetworkLogo}
                      alt="XseedLogo"
                      width={500}
                      height={500}
                    />
                    <p>USDC</p>
                  </div>
                </div>{" "}
                <div className={styles.NetworkSection}>
                  <header>Network</header>
                  <p>Ethereum</p>
                </div>
              </div>
              <hr />
              <div className={styles.dropdownDiv}>
                <Image
                  src={ethLogo}
                  alt="chainLogo"
                  className={styles.chainLogo}
                  width={500}
                  height={500}
                />
                <div className={styles.TokenSection}>
                  <p>Token</p>
                  <div>
                    <Image
                      src={usdcLogo}
                      className={styles.NetworkLogo}
                      alt="XseedLogo"
                      width={500}
                      height={500}
                    />
                    <p>USDC</p>
                  </div>
                </div>{" "}
                <div className={styles.NetworkSection}>
                  <header>Network</header>
                  <p>Ethereum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Counter />
        <div className={styles.Balance_section}>
          <section>
            <p>Balance</p>
            <p>-USDC</p>
          </section>{" "}
          <section>
            <p>Total</p>
            <p> 80,000 USDC </p>
          </section>
        </div>
        <TermsAndCondition />
        <Submit />
      </section>
    </div>
  );
}
