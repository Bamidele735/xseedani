import React, { ReactNode } from "react";
import styles from "./index.module.css";

interface ModalBtnProps {
  children: ReactNode;
}

const ModalButton: React.FC<ModalBtnProps> = ({ children }) => {
  return (
    <button
      className={styles.button}
      data-hs-overlay="#hs-vertically-centered-scrollable-modal"
      type="button"
    >
      {children}
    </button>
  );
};

export default ModalButton;
