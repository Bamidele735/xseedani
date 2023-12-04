import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumb";
import useImageUrls from "../media/imageByIndex";
import styles from "../css/index.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../FadeCarousel/EmblaCarouselArrowButtons";
const EmblaCarousel = (props: { slides: any; options: any }) => {
  const imageByIndex = useImageUrls();

  // console.log("imageByIndex", useImageUrls);

  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaMainApi);

  // console.log("imageByIndeximageByIndex", imageByIndex);
  return (
    <div className={styles.embla}>
      <div className={styles["embla__viewport"]} ref={emblaMainRef}>
        <div className={styles["embla__container"]}>
          {slides.map((index: number) => {
            // // Check if the URL is valid (not undefined or null)
            // if (!url) {
            //   return null; // Skip rendering if the URL is undefined or null
            // }

            return (
              <div className={styles["embla__slide"]} key={index}>
                <div className={styles["embla__slide__number"]}>
                  <span>{index + 1}</span>
                </div>
                {/* <img
                className={styles["embla__slide__img"]}
                src={imageByIndex(index)}
                alt="Your alt text"
              />{" "} */}
                <div className={styles["embla__slide_div"]}>
                  {imageByIndex(index) != undefined ? (
                    imageByIndex(index).includes("youtube.com") ? (
                      <iframe
                        height="100%"
                        width="100%"
                        src={imageByIndex(index)}
                        title="YouTube Video"
                        frameBorder="0"
                        allowFullScreen
                        className={`${styles.iframe_container}  `}
                      />
                    ) : (
                      <img
                        className={styles["embla__slide__img"]}
                        src={imageByIndex(index)}
                        alt="Banner Image"
                      />
                    )
                  ) : null}

                  {/* <iframe
                  height="350"
                  src={imageByIndex(index)}
                  //  src="about:blank"
                  title="Xseed Player"
                  frameBorder="0"
                  allowFullScreen
                /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles["embla-thumbs"]}>
        <div className={styles["embla-thumbs__viewport"]} ref={emblaThumbsRef}>
          <div
            className={`${styles.embla_button} ${styles["embla-thumbs__container"]}`}
          >
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              className={styles.embla_button_prev}
            />
            {slides.map((index: number) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={imageByIndex(index)}
                key={index}
              />
            ))}
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              className={styles.embla_button_next}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
