import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./index.module.css";
import NavBar from "../components/Header";
import Footer from "../components/Footer";
import SignInModalBody from "../components/Modal/signInModal";
import ModalBody from "../components/Modal";
import footerStyles from "../components/Footer/index.module.css";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${styles.nav_side_bar_main}`}>
      <div className={`${styles.nav_side_bar}`}>
        <div className={` center  ${styles.nav_side_center}`}>
          <NavBar />
        </div>{" "}
        <div className={`${styles.Sidebar} ${styles.Sidebar_mobile}`}>
          <Sidebar />
        </div>
      </div>
      <div className={`${styles.mainBody}`}>
        <div className={`${styles.Sidebar} ${styles.Sidebar_desktop}`}>
          <Sidebar />
        </div>
        <div className={`${styles.children}  `}>{children}</div>
      </div>
      <div className={`${styles.footerMainDiv}  `}>
        <div className={`center `}>
          <Footer />
        </div>
      </div>

      <SignInModalBody />
      <ModalBody />
    </div>
  );
}
