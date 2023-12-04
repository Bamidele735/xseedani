import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import styles from "../FadeCarousel/css/index.module.css";
import Link from "next/link";
import { fetchIcons } from "../../../lib/icons";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { OperatingSystem, Genre } from "../../../types/sanityData";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  game: string;
  projectImage: {
    url: string | null;
  };
  title: string;
  genre: Genre[];
  versionNumber: string;
  numberOfDownloads: number;
  ageRating: string;
  operatingSystem: OperatingSystem[];
  slug: {
    current: string;
  };
  current: string;
  ageRatingIcon: {
    url: string;
  };
  data: any;
  averageRating: number;
};

const EmblaCarousel = ({ data, averageRating }: PropType) => {
  const developer = useSelector((state: RootState) => state.fetchDeveloper);
  // console.log("developer", developer);
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
      {data ? (
        <div className={styles.recent_section}>
          <Link
            href={{
              pathname: "/games/[slug]",
              query: { slug: `${data.slug?.current || ""}` },
            }}

            //href={`/games/[slug]`}
          >
            <div className={styles.recent_Images_Section}>
              {data.projectImage?.url ? (
                <Image
                  src={data.projectImage.url}
                  alt={data.title}
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
                          averageRating === 0
                            ? styles.gray_bg
                            : averageRating >= 0 && averageRating <= 4
                            ? styles.red_bg
                            : averageRating > 4 && averageRating <= 6
                            ? styles.yellow_bg
                            : styles.green_bg
                        } ${styles.ratingNumber}`}
                      >
                        <div>
                          <h1>{averageRating?.toFixed(1)}</h1>
                        </div>
                      </div>{" "}
                    </div>

                    <h1 className={styles.imageTitle}>{data.title}</h1>
                  </div>
                </div>
              </div>

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
                      {data.numberOfDownloads.toLocaleString()
                        ? data.numberOfDownloads.toLocaleString()
                        : data.numberOfDownloads}{" "}
                    </h5>
                  </div>
                </section>{" "}
                <section className={styles.download}>
                  <div className={styles.downloadIcon}>
                    {icons?.download?.url ? (
                      <div>
                        {data.playable === true ? (
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
                    <h5>{data.playable === true ? "Playable" : "Beta"}</h5>
                  </div>
                </section>
              </div>
            </section>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EmblaCarousel;
