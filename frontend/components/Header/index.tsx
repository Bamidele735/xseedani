import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { useAccount } from "wagmi";
import useImageUrl from "../../utils/sanityImage";
import { Logo } from "../../types/sanityData";
import { fetchLogoData } from "../../lib/logoAPI";

export default function NavBar() {
  const [logoData, setLogoData] = useState<Logo | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await fetchLogoData();
      setLogoData(logo[0]);
    };

    fetchLogo();
  }, []);

  // console.log("address", address);
  return (
    <header
      className={` navHeader flex flex-wrap sm:justify-end sm:flex-nowrap z-50 w-full   text-sm py-4 `}
    >
      <nav
        className="max-w-[85rem] nav_fixed w-full px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between"></div>
        <div
          // id="navbar-collapse-with-animation"
          className="hs-collapse  overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div
            className={`Bg_purple font-medium text-base text-gray-600  dark:text-gray-400`}
            aria-current="page"
            data-hs-overlay="#hs-large-modal"
          >
            Connect Your Wallet
          </div>
        </div>
      </nav>
    </header>
  );
}
