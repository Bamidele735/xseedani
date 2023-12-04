import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { RootState } from "../../redux/store";
import useImageUrl from "../../utils/sanityImage";
import { Logo } from "../../types/sanityData";
import { fetchLogoData } from "../../lib/logoAPI";
import { fetchSocialMediaLinks } from "../../lib/socialMediaLinks";
import Link from "next/link";
import { useIconData } from "../icons";
export default function Sidebar() {
  // Image URL generator hook (assuming you have defined this hook)
  const generateImageUrl = useImageUrl();

  const [logoData, setLogoData] = useState<Logo | null>(null);
  const [logoMobileLogoData, setLogoMobileData] = useState<Logo | null>(null);
  const [socialMediaData, setSocialMediaData] = useState<any | null>(null);
  const { icons } = useIconData();

  useEffect(() => {
    const fetchLogo = async () => {
      const logo = await fetchLogoData();
      setLogoData(logo[0]);
      setLogoMobileData(logo[1]);
    };
    const fetchFooterLinks = async () => {
      const media = await fetchSocialMediaLinks();
      setSocialMediaData(media);
    };
    fetchFooterLinks();
    fetchLogo();
  }, []);

  return (
    <div className={styles.sidebarDiv}>
      {/* Navigation Toggle */}
      <div className={styles.sidebarToggle}>
        <Link href="/">
          {logoMobileLogoData ? (
            <Image
              src={generateImageUrl(logoMobileLogoData?.logo)
                .width(1000)
                ?.url()}
              alt={logoMobileLogoData?.title}
              width={500}
              height={500}
            />
          ) : (
            <></>
          )}
        </Link>

        <button
          type="button"
          className={`${styles.sidebarBtn}  text-gray-500 hover:text-gray-600`}
          data-hs-overlay="#sidebar-mini"
          aria-controls="sidebar-mini"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="w-5 h-5"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
      {/* End Navigation Toggle */}
      <div
        id="sidebar-mini"
        className={` ${styles.sidebar}  hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] border-r pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:border-transparent`}
      >
        <div
          className="flex text-xl font-semibold dark:text-white "
          data-hs-overlay="#sidebar-mini"
          aria-controls="sidebar-mini"
          aria-label="Toggle navigation"
        >
          {icons?.cancelIcon?.url ? (
            <Image
              src={
                icons?.cancelIcon.url != undefined
                  ? icons?.cancelIcon?.url
                  : "#"
              }
              alt=""
              width={100}
              height={100}
              className={styles.cancelIcon}
            />
          ) : (
            ""
          )}
        </div>
        <section className={`${styles.sidebarBody}  `}>
          <div
            className={`${styles.navIconBody} flex text-xl font-semibold dark:text-white`}
            // data-hs-accordion-always-open
          >
            <Link href="/">
              {logoData ? (
                <div>
                  <Image
                    src={generateImageUrl(logoData?.logo).width(1000)?.url()}
                    alt={logoData?.title}
                    width={500}
                    height={500}
                    className={styles.navIcon}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </Link>
          </div>
          <nav
            className="hs-accordion-group   flex flex-col flex-wrap"
            // data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <Link
                  className={`${styles.nav_link} flex items-center gap-x-3.5 py-2 my-6 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-900  dark:text-white`}
                  href="/"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                  <h4>Home</h4>
                </Link>
              </li>{" "}
              <li>
                <Link
                  className={`${styles.nav_link} flex items-center gap-x-3.5 py-2 my-6 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-900  dark:text-white`}
                  href="/game"
                >
                  <h4>Games</h4>
                </Link>
              </li>{" "}
              <li>
                <Link
                  className={`${styles.nav_link} flex items-center gap-x-3.5 py-2 my-6 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-900  dark:text-white`}
                  href="/nodesale"
                >
                  <h4>Node Sale</h4>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles.nav_body}`}>
            <div className={`${styles.nav_body_head}`}>
              <div>
                <Link
                  className="flex text-xl font-semibold dark:text-white"
                  href="/"
                  aria-label="Brand"
                >
                  {logoData ? (
                    <div>
                      <Image
                        src={generateImageUrl(logoData?.logo)
                          .width(1000)
                          ?.url()}
                        alt={logoData?.title}
                        width={500}
                        height={500}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Link>
              </div>
              <div>
                <h1>Join Our Commuinity</h1>
                <h5>We will keep you updated!</h5>
              </div>
            </div>
            <div className={` ${styles.nav_socialMedia}`}>
              {socialMediaData ? (
                <div className={styles.socialMediaLinks}>
                  <Link
                    href={
                      socialMediaData[0]?.telegramLink != undefined
                        ? socialMediaData[0]?.telegramLink
                        : "#"
                    }
                  >
                    {socialMediaData[0]?.telegramIcon?.url ? (
                      <Image
                        src={socialMediaData[0]?.telegramIcon?.url}
                        alt={`telegram`}
                        width={120}
                        height={120}
                      />
                    ) : (
                      ""
                    )}
                  </Link>{" "}
                  <Link
                    href={
                      socialMediaData[0]?.discordLink != undefined
                        ? socialMediaData[0]?.discordLink
                        : "#"
                    }
                  >
                    {socialMediaData[0]?.DiscordIcon?.url ? (
                      <Image
                        src={socialMediaData[0]?.DiscordIcon?.url}
                        alt={`discord`}
                        width={120}
                        height={120}
                      />
                    ) : (
                      ""
                    )}
                  </Link>{" "}
                  <Link
                    href={
                      socialMediaData[0]?.youtubeLink != undefined
                        ? socialMediaData[0]?.youtubeLink
                        : "#"
                    }
                  >
                    {socialMediaData[0]?.youtubeIcon?.url ? (
                      <Image
                        src={socialMediaData[0]?.youtubeIcon?.url}
                        alt={`telegram`}
                        width={120}
                        height={120}
                      />
                    ) : (
                      ""
                    )}
                  </Link>{" "}
                  <Link
                    href={
                      socialMediaData[0]?.mediumLink != undefined
                        ? socialMediaData[0]?.mediumLink
                        : "#"
                    }
                  >
                    {socialMediaData[0]?.mediumIcon?.url ? (
                      <Image
                        src={socialMediaData[0]?.mediumIcon?.url}
                        alt={`medium`}
                        width={120}
                        height={120}
                      />
                    ) : (
                      ""
                    )}
                  </Link>{" "}
                  <Link
                    href={
                      socialMediaData[0]?.twitterLink != undefined
                        ? socialMediaData[0]?.twitterLink
                        : "#"
                    }
                  >
                    {socialMediaData[0]?.twitterIcon?.url ? (
                      <Image
                        src={socialMediaData[0]?.twitterIcon?.url}
                        alt={`telegram`}
                        width={120}
                        height={120}
                      />
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* End Navigation Toggle */}
    </div>
  );
}
