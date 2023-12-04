import React, { ReactNode } from "react";
import styles from "./index.module.css";

interface OrangeButtonProps {
  children: ReactNode;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default OrangeButton;
