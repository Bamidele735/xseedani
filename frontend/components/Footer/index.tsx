import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { fetchSocialMediaLinks } from "../../lib/socialMediaLinks";
import { fetchIcons } from "../../lib/icons";
import Link from "next/link";
export default function Footer() {
  const [socialMediaData, setSocialMediaData] = useState<any | null>(null);
  const [icons, setIcons] = useState<any | null>(null);
  // console.log("socialMediaData", icons);
  useEffect(() => {
    const fetchFooterLinks = async () => {
      const media = await fetchSocialMediaLinks();
      setSocialMediaData(media);
    };

    const fetchFooterIcons = async () => {
      const footerIcons = await fetchIcons();
      setIcons(footerIcons[0]);
    };
    fetchFooterLinks();
    fetchFooterIcons();
  }, []);
  return (
    <footer>
      <div className={`center  ${styles.FooterBg}`}>
        {/* <div className={`${styles.footerDiv} center`}></div> */}
        {socialMediaData ? (
          <div className={styles.Footer}>
            <section>
              <div className={styles.footerImage}>
                {socialMediaData[0]?.writeToUsLink?.url ? (
                  <Image
                    src={socialMediaData[0]?.writeToUsLink?.url}
                    alt=""
                    width={30}
                    height={120}
                  />
                ) : (
                  ""
                )}
              </div>
              <h5>Write to us</h5>
              <p>Do you have something to write to the team?</p>
              <Link
                href={
                  socialMediaData[0]?.writeToUsLink?.url != undefined
                    ? socialMediaData[0]?.writeToUsLink?.url
                    : "#"
                }
              >
                <button>Send a message</button>
              </Link>
            </section>

            <section>
              <div className={styles.footerImage}>
                {/* {icons?.map((data: { partnerIcon: { url: string } }) => {
                return ( */}
                <div>
                  {icons?.partnerIcon?.url ? (
                    <Image
                      src={
                        icons?.partnerIcon?.url != undefined
                          ? icons?.partnerIcon?.url
                          : "#"
                      }
                      alt=""
                      width={30}
                      height={120}
                    />
                  ) : (
                    ""
                  )}
                </div>
                {/* );
              })} */}
              </div>
              <h5> Partner with us!</h5>
              <p>Let us discuss what we can do together!</p>
              <Link
                href={
                  socialMediaData[0]?.partneWithUsLink?.url != undefined
                    ? socialMediaData[0]?.partneWithUsLink?.url
                    : "#"
                }
              >
                <button> Become a partner!</button>
              </Link>
            </section>

            <section>
              <div className={styles.footerImage}>
                {/* {icons?.map((data: { writeIcon: { url: string } }) => { */}
                {/* return ( */}
                <div>
                  {icons?.writeIcon?.url ? (
                    <Image
                      src={icons?.writeIcon?.url}
                      alt=""
                      width={30}
                      height={120}
                    />
                  ) : (
                    ""
                  )}
                </div>
                {/* ); */}
                {/* })} */}
              </div>
              <h5> Stay Updated!</h5>
              <p>Visit our social media for latest information</p>

              <div>
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
              </div>
            </section>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </footer>
  );
}
