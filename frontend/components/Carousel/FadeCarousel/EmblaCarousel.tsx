import React, { useState, useEffect } from "react";
import styles from "./css/index.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchIcons } from "../../../lib/icons";
import { HomePageGameTypes } from "../../../types/sanityData";

const EmblaCarousel = ({
  projectImage,
  title,
  numberOfDownloads,
  slug,
  averageGameRating,
  playable,
}: HomePageGameTypes) => {
  const [icons, setIcons] = useState<any | null>(null);
  // console.log("socialMediaData", icons);
  useEffect(() => {
    const fetchFooterIcons = async () => {
      const footerIcons = await fetchIcons();
      setIcons(footerIcons[0]);
    };
    fetchFooterIcons();
  }, []);
  return (
    <div>
      <div className={styles.recent_section}>
        <Link
          href={{
            pathname: "/games/[slug]",
            query: { slug: `${slug?.current || ""}` },
          }}

          //href={`/games/[slug]`}
        >
          <div className={styles.recent_Images_Section}>
            {projectImage?.url ? (
              <Image
                src={projectImage.url}
                alt={title}
                width={500}
                height={500}
              />
            ) : (
              <div className={styles.recent_Images_text}></div>
            )}
          </div>
          <section className={styles.categories_name}>
            <div className={styles.tokenInfo}>
              <div className={styles.game_title}>
                <div className={styles.gamesRating_Title}>
                  <div className={styles.rating}>
                    <div
                      className={`${
                        averageGameRating === 0
                          ? styles.gray_bg
                          : averageGameRating >= 0 && averageGameRating <= 4
                          ? styles.red_bg
                          : averageGameRating > 4 && averageGameRating <= 6
                          ? styles.yellow_bg
                          : styles.green_bg
                      } ${styles.ratingNumber}`}
                    >
                      <div>
                        <h1>{averageGameRating?.toFixed(1)}</h1>
                      </div>
                    </div>{" "}
                  </div>

                  <h1 className={styles.imageTitle}>{title}</h1>
                </div>
              </div>
            </div>
            {/* <div className={styles.rating}>
              <h1 className={styles.rating_text}> {index?.genre}</h1>
              
              {genre?.slice(0, 2).map((category: any, index: number) => (
                <h4 key={index} className={styles.rating_text}>
                  {category.name}
                </h4>
              ))}
            </div> */}

            {/* <hr className={styles.hr_style} /> */}

            <div className={styles.game_buttom}>
              <section className={styles.download}>
                <div className={styles.downloadIcon}>
                  {icons?.download?.url ? (
                    <Image
                      src={icons?.download?.url}
                      alt=""
                      width={500}
                      height={100}
                    />
                  ) : (
                    <div className={styles.recent_Images_text}></div>
                  )}
                  <h5>
                    {numberOfDownloads.toLocaleString()
                      ? numberOfDownloads.toLocaleString()
                      : numberOfDownloads}{" "}
                  </h5>
                </div>
              </section>{" "}
              <section className={styles.download}>
                <div className={styles.downloadIcon}>
                  {icons?.download?.url ? (
                    <div>
                      {playable === true ? (
                        <Image
                          src={icons?.playIcon?.url}
                          alt=""
                          width={500}
                          height={100}
                        />
                      ) : (
                        <Image
                          src={icons?.betaIcon?.url}
                          alt=""
                          width={500}
                          height={100}
                        />
                      )}
                    </div>
                  ) : (
                    <div className={styles.recent_Images_text}></div>
                  )}
                  <h5>{playable === true ? "Playable" : "Beta"}</h5>
                </div>
              </section>
              {/* <div className={styles.verticalLine}></div> */}
              {/* <section className={styles.ageRating}>
                <div>
                  {ageRatingIcon?.url ? (
                    <Image
                      src={ageRatingIcon.url}
                      alt={title}
                      width={500}
                      height={100}
                    />
                  ) : (
                    <div className={styles.recent_Images_text}></div>
                  )}
                </div>
                <h5>PEIG {ageRating}</h5>{" "}
              </section> */}
            </div>
            {/* <div>
              {developer?.map((data: DeveloperTypes) => (
                <h5 className={styles.developer_name} key={data?._id}>
                  {data.name}
                </h5>
              ))}
            </div> */}
            {/* <section className={styles.availableButton}>
              <OrangeButton>
                Available On{" "}
                {operatingSystem?.map((data: OperatingSystem) => (
                  <div className={styles.availableText} key={data.name}>
                    {" "}
                    {data.icon?.url ? (
                      <Image
                        src={data.icon?.url}
                        alt={title}
                        width={500}
                        height={100}
                        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                      />
                    ) : null}{" "}
                  </div>
                ))}
              </OrangeButton>
            </section> */}
          </section>
        </Link>
      </div>
    </div>
  );
};

export default EmblaCarousel;
