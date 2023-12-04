import React from "react";
import styles from "./submit.module.css";

export default function Submit() {
  return (
    <div className={styles.Submit}>
      <div>
        <div>
          <div className={`${styles.submitInputHome}  `}>
            <div className={`${styles.submitInput} relative `}>
              <input
                type="text"
                id="hs-validation-name-error"
                name="hs-validation-name-error"
                className="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                required
                aria-describedby="hs-validation-name-error-helper"
              />
              <div className={`${styles.submitBtn} `}>
                <button> Submit</button>
              </div>{" "}
            </div>
            <div
              className={`${styles.submitSvg} inset-y-0 end-0 flex items-center pointer-events-none pe-3`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="10%"
                height="10%"
              >
                <rect width="100%" height="100%" />
                <text
                  x="50%"
                  y="50%"
                  alignmentBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="bold"
                >
                  i
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.connectwallet}>Connect Wallet / Buy Now</button>
    </div>
  );
}
