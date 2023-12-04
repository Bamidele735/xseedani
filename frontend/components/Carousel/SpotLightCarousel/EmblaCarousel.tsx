import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../FadeCarousel/EmblaCarouselArrowButtons";
import Image from "next/image";
// import useImageUrl from "../../../utils/sanityImage";
import styles from "./css/index.module.css";
import buttonStyles from "../../../containers/GamesHome/MobileGames/index.module.css";
//import  from "../../Home/Spotlight/Review";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { GameTypes, Review } from "../../../types/sanityData";
import Link from "next/link";
import SkeletonLoader from "../../skeleton";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = () => {
  const game = useSelector((state: RootState) => state.game);

  // Check if game data is available
  if (!game) {
    // Handle the loading state, for example, show a loading indicator
    return <SkeletonLoader />;
  }

  const { slides, options } = game;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // console.log(game);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const MAX_DESCRIPTION_LENGTH = 50;

  return (
    <div>
      <div className={` ${styles.embla} center`}>
        <div className={`${styles.embla__viewport}  `} ref={emblaRef}>
          <div className={`${styles.embla_container}  `}>
            {game
              ?.filter(
                (game: GameTypes) => game.spotlight && game.spotlight != false
              )
              .map((data: GameTypes, index: number) => (
                <div className={`${styles.embla__slide} `} key={index}>
                  <div className={styles.embla__slide__number}>
                    <span>{index + 1}</span>
                  </div>
                  <div className={styles.profileBanner}>
                    {data?.projectImage ? (
                      <Image
                        src={data.projectImage.url}
                        alt={data.title}
                        width={500}
                        height={100}
                      />
                    ) : null}
                  </div>
                  <div className={`${styles.review_position}`}>
                    <div className={styles.Review}>
                      <div className={styles.review_header}>
                        <section className={styles.review_sub_header_one}>
                          {/* {index.map((data) => (
              <div>{data.name}</div>
            ))} */}
                          {/* <Image src={Logo} alt="Logo" width={50} /> */}
                          {data?.projectImage ? (
                            <Image
                              src={data.projectImage.url}
                              alt={data.title}
                              width={500}
                              height={100}
                            />
                          ) : null}
                          <div>
                            <h1>{data.title}</h1>
                            <p>Short Description </p>
                          </div>
                        </section>
                        {/* <section className={styles.people_review}>
                      14 people found this review helpful
                    </section> */}
                      </div>
                      <section className={styles.review_body}>
                        <div>
                          <h1>{/* {reviewData.name} */}</h1>
                          <div className={styles.PortableText}>
                            {data?.shortDescription ? (
                              <p> {data?.shortDescription} </p>
                            ) : (
                              <div> </div>
                            )}
                          </div>
                        </div>
                        {/* ))} */}
                        <button className={styles.review_btn}>
                          <Link
                            href={`/games/[slug]#reviews`}
                            as={`/games/${data?.slug?.current}#reviews`}
                          >
                            {" "}
                            View More
                          </Link>{" "}
                        </button>
                      </section>
                    </div>{" "}
                  </div>{" "}
                  <div className={`${styles.review_position}`}></div>{" "}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={` ${buttonStyles.embla__buttons} button_container`}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
