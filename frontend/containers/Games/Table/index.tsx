import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./table.module.css";
import Link from "next/link";
import { GameSortData, Review } from "../../../types/gamesDataTypes";
import { fetchIcons } from "../../../lib/icons";
import { useRouter } from "next/router";

export default function Table({ filteredGames }: { filteredGames: any }) {
  const router = useRouter();
  const [icons, setIcons] = useState<any | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFooterIcons = async () => {
      try {
        const footerIcons = await fetchIcons();
        setIcons(footerIcons[0]);
      } catch (error) {
        console.error("Error fetching icons:", error);
        setError("Error fetching icons. Please try again later.");
      }
    };

    fetchFooterIcons();
  }, []);

  const [visibleData, setVisibleData] = useState(10);

  const showMoreData = () => {
    setVisibleData((prev) => prev + 2);
  };

  const sortByParameter = router.query.sortBy;
  const sortedGames =
    sortByParameter === "firstFiveGames"
      ? filteredGames?.slice().sort((a: GameSortData, b: GameSortData) => {
          let aTotalRating = 0;
          let aReviewCount = 0;
          a.reviews?.forEach((review: Review) => {
            if (review?.rating >= 0 && review?.rating <= 10) {
              aTotalRating += review.rating;
              aReviewCount++;
            }
          });
          const aAverageRating =
            aReviewCount > 0 ? aTotalRating / aReviewCount : 0;

          let bTotalRating = 0;
          let bReviewCount = 0;
          b.reviews?.forEach((review: Review) => {
            if (review?.rating >= 0 && review?.rating <= 10) {
              bTotalRating += review.rating;
              bReviewCount++;
            }
          });
          const bAverageRating =
            bReviewCount > 0 ? bTotalRating / bReviewCount : 0;

          return bAverageRating - aAverageRating;
        })
      : filteredGames;

  return (
    <div>
      <div className={`${styles.tableSection} `}>
        <div className="flex flex-col mt-8">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className=" shadow overflow-hidden  dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className={styles.theadBody}>
                    <tr>
                      <th
                        scope="col"
                        className={`${styles.image_TH}  py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      ></th>
                      <th
                        scope="col"
                        className={` py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className={` py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className={`${styles.networkHead}   py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Network
                      </th>
                      <th
                        scope="col"
                        className={`${styles.device_Head}  py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Device
                      </th>{" "}
                      <th
                        scope="col"
                        className={`${styles.GenreHead}   py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Genre
                      </th>{" "}
                      <th
                        scope="col"
                        className={`${styles.GenreHead}   py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Version No
                      </th>{" "}
                      <th
                        scope="col"
                        className={`${styles.GenreHead}   py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400`}
                      >
                        Downloads
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {/* Table body displaying only the visible data items */}

                    {sortedGames
                      ?.slice(0, visibleData)
                      .map((data: GameSortData) => {
                        let totalRating = 0;
                        let reviewCount = 0;

                        data?.reviews.map((review: Review) => {
                          if (review?.rating >= 0 && review?.rating <= 10) {
                            totalRating += review.rating;
                            reviewCount++;
                          }
                        });
                        const averageRating =
                          reviewCount > 0 ? totalRating / reviewCount : 0;
                        return (
                          <tr key={data._id} className={styles.tr_td}>
                            <td className={`${styles.previewImage} `}>
                              <Link
                                href={`/games/[slug]`}
                                as={`/games/${data.slug?.current}`}
                              >
                                <Image
                                  src={data?.projectImage.url}
                                  alt={data.title}
                                  width={400}
                                  height={400}
                                />
                              </Link>
                            </td>
                            <td
                              className={`${styles.playable}  ${styles.game_title_section}  py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200>`}
                            >
                              <div className={styles.game_title}>
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
                                  <h1>{averageRating.toFixed(1)}</h1>
                                </div>

                                <Link
                                  href={`/games/[slug]`}
                                  as={`/games/${data.slug?.current}`}
                                >
                                  <h1>{data.title} </h1>
                                </Link>
                              </div>
                            </td>
                            <td
                              className={`${styles.playable} ${styles.playableIcons}  py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200>`}
                            >
                              {data.playable === true ? (
                                <div>
                                  {icons?.playableIcon?.url ? (
                                    <Image
                                      src={
                                        icons?.playableIcon?.url != undefined
                                          ? icons?.playableIcon?.url
                                          : "#"
                                      }
                                      alt=""
                                      width={30}
                                      height={120}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  <h3>playable</h3>
                                </div>
                              ) : (
                                <div>
                                  {icons?.betaIcon?.url ? (
                                    <Image
                                      src={
                                        icons?.betaIcon?.url != undefined
                                          ? icons?.betaIcon?.url
                                          : "#"
                                      }
                                      alt=""
                                      width={30}
                                      height={120}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  <h3>Beta</h3>
                                </div>
                              )}
                            </td>
                            <td
                              className={`${styles.blockchainData}  py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200>`}
                            >
                              <div className={styles.blockchain_div}>
                                {data?.blockchain
                                  .slice(0, 1)
                                  .map((blockchainData, index) => (
                                    <div key={index}>
                                      {blockchainData?.icon?.url !==
                                        undefined &&
                                      blockchainData?.icon?.url !== "" ? (
                                        <Image
                                          src={blockchainData?.icon?.url}
                                          alt={blockchainData?.name}
                                          width={30}
                                          height={120}
                                        />
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ))}
                                {data?.blockchain.length > 1 && (
                                  <div className={styles.blockchain_lenght}>
                                    <h5>+{data?.blockchain.length - 1}</h5>{" "}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td
                              className={`${styles.operatingSystem_div}  py-4 whitespace-nowrap text-left text-sm font-medium`}
                            >
                              <div className={styles.operatingSystemData}>
                                {data?.operatingSystem?.map(
                                  (operatingSystemData) => (
                                    <div>
                                      {/* {operatingSystemData.name} */}

                                      {operatingSystemData.icon?.url ? (
                                        <Image
                                          src={operatingSystemData.icon?.url}
                                          alt={operatingSystemData.name}
                                          width={20}
                                          height={20}
                                        />
                                      ) : null}
                                    </div>
                                  )
                                )}
                              </div>
                            </td>{" "}
                            <td
                              className={`${styles.genreData}  py-4 whitespace-nowrap text-left text-sm font-medium`}
                            >
                              <div>
                                {data?.genre.slice(0, 1).map((genreData) => (
                                  <h4>{genreData.name}</h4>
                                ))}{" "}
                              </div>
                            </td>{" "}
                            <td
                              className={`${styles.versionNumber}  py-4 whitespace-nowrap text-left text-sm font-medium`}
                            >
                              <div>
                                <h4>{data.versionNumber}</h4>
                              </div>
                            </td>{" "}
                            <td
                              className={`${styles.numberOfDownloads}  py-4 whitespace-nowrap text-left text-sm font-medium`}
                            >
                              <div>
                                <h4>
                                  {data.numberOfDownloads.toLocaleString()}
                                </h4>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile section */}
      <div className={`${styles.tableMobileSection}`}>
        {filteredGames?.slice(0, visibleData).map((data: GameSortData) => {
          let totalRating = 0;
          let reviewCount = 0;

          data?.reviews.map((review: Review) => {
            if (review?.rating >= 0 && review?.rating <= 10) {
              totalRating += review.rating;
              reviewCount++;
            }
          });
          const averageRating = reviewCount > 0 ? totalRating / reviewCount : 0;
          return (
            <section key={data._id} className={styles.game_mobile_section}>
              <div className={`  ${styles.game_mobile_title_section} `}>
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
                  <h1>{averageRating.toFixed(1)}</h1>
                </div>

                <Link
                  href={`/games/[slug]`}
                  as={`/games/${data.slug?.current}`}
                >
                  {data.title}
                </Link>
              </div>
              <div className={`${styles.playable_blockchain_mobile_section}`}>
                <div className={`${styles.playable_icons_mobile}  `}>
                  {data.playable === true ? (
                    <div>
                      {icons?.playableIcon?.url ? (
                        <Image
                          src={
                            icons?.playableIcon?.url != undefined
                              ? icons?.playableIcon?.url
                              : "#"
                          }
                          alt={`icons`}
                          width={30}
                          height={120}
                        />
                      ) : (
                        ""
                      )}
                      <h3>playable</h3>
                    </div>
                  ) : (
                    <>
                      {icons?.betaIcon?.url ? (
                        <Image
                          src={
                            icons?.betaIcon?.url != undefined
                              ? icons?.betaIcon?.url
                              : "#"
                          }
                          alt="icons"
                          width={30}
                          height={120}
                        />
                      ) : (
                        ""
                      )}
                      <h3>Beta</h3>
                    </>
                  )}
                </div>
                <div className={`${styles.blockchainData}  `}>
                  <div className={styles.blockchain_div}>
                    {data?.blockchain
                      .slice(0, 1)
                      .map((blockchainData, index) => (
                        <div key={index}>
                          {blockchainData?.icon?.url !== undefined &&
                          blockchainData?.icon?.url !== "" ? (
                            <Image
                              src={blockchainData?.icon?.url}
                              alt={blockchainData?.name}
                              width={30}
                              height={120}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    {data?.blockchain.length > 1 && (
                      <div className={styles.blockchain_lenght}>
                        <h5>+{data?.blockchain.length - 1}</h5>{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`${styles.mobile_section_details}`}>
                <div className={`${styles.operatingSystem_div}  `}>
                  <h5> Device</h5>

                  <div className={styles.operatingSystemData}>
                    {data?.operatingSystem?.map((operatingSystemData) => (
                      <section>
                        {/* {operatingSystemData.name} */}

                        {operatingSystemData.icon?.url ? (
                          <Image
                            src={operatingSystemData.icon?.url}
                            alt={operatingSystemData.name}
                            width={20}
                            height={20}
                          />
                        ) : null}
                      </section>
                    ))}
                  </div>
                </div>{" "}
                <div className={`${styles.genreData}  `}>
                  <h5> Genre</h5>
                  <div>
                    {data?.genre.slice(0, 1).map((genreData) => (
                      <h4>{genreData.name}</h4>
                    ))}{" "}
                  </div>
                </div>{" "}
                <div className={`${styles.versionNumber}  `}>
                  <h5> Version No</h5>

                  <div>
                    <h4>{data.versionNumber}</h4>
                  </div>
                </div>{" "}
                <div className={`${styles.numberOfDownloads}  `}>
                  <h5> Downloads</h5>

                  <div>
                    <h4>{data.numberOfDownloads.toLocaleString()}</h4>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <div>
        <div className={` `}>
          {/* Button to show more data items if there are more than visibleData items */}

          {filteredGames?.length > visibleData && (
            <button className={styles.showMoreButton} onClick={showMoreData}>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
