import React, { useCallback, useEffect, useState } from "react";
import styles from "../../../containers/GamesHome/MobileGames/index.module.css";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { flushSync } from "react-dom";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../FadeCarousel/EmblaCarouselArrowButtons";

interface UseEmblaCarouselProps {
  children: (tweenValues: number[]) => React.ReactNode;
  options?: EmblaOptionsType;
}

const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  containScroll: "trimSnaps",
};

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const UseEmblaCarouselLogic: React.FC<UseEmblaCarouselProps> = ({
  children,
  options,
}) => {
  // Embla Carousel Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  // Scroll event handler
  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  //////

  // Effect to initialize Embla Carousel and handle scroll events
  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  // Previous and Next button logic for Embla Carousel
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.RecentlyAdded}>
      <div className={styles.embla}>
        <div className={`${styles.embla__viewport} center`} ref={emblaRef}>
          <div className={`${styles.embla__container} `}>
            {" "}
            {children(tweenValues)}
          </div>
        </div>
        <div className={` ${styles.embla__buttons} button_container`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default UseEmblaCarouselLogic;
