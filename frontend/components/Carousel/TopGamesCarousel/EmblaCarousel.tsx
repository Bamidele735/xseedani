// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
// import { flushSync } from "react-dom";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import styles from "./css/index.module.css";
// import Link from "next/link";
// import { EmblaPropType, GameTypes } from "../../../types/sanityData";
// const TWEEN_FACTOR = 4.2;

// const numberWithinRange = (number: number, min: number, max: number): number =>
//   Math.min(Math.max(number, min), max);

// type PropType = {
//   slides: number[];
//   options: EmblaOptionsType;
// };

// const EmblaCarousel = ({ game }: { game: any }) => {
//   // console.log("EmblaCarousel", game);

//   const { options } = game;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const [tweenValues, setTweenValues] = useState<number[]>([]);

//   const onScroll = useCallback(() => {
//     if (!emblaApi) return;

//     const engine = emblaApi.internalEngine();
//     const scrollProgress = emblaApi.scrollProgress();

//     const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
//       let diffToTarget = scrollSnap - scrollProgress;

//       if (engine.options.loop) {
//         engine.slideLooper.loopPoints.forEach((loopItem) => {
//           const target = loopItem.target();
//           if (index === loopItem.index && target !== 0) {
//             const sign = Math.sign(target);
//             if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
//             if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
//           }
//         });
//       }
//       const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
//       return numberWithinRange(tweenValue, 0, 1);
//     });
//     setTweenValues(styles);
//   }, [emblaApi, setTweenValues]);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onScroll();
//     emblaApi.on("scroll", () => {
//       flushSync(() => onScroll());
//     });
//     emblaApi.on("reInit", onScroll);
//   }, [emblaApi, onScroll]);
//   //Buttons to next and prev the carousel
//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={emblaRef}>
//         <div className={styles.embla__container}>
//           {game.map((index: any) => (
//             <div
//               className={styles.embla__slide}
//               key={index}
//               style={{
//                 ...(tweenValues.length && { opacity: tweenValues[index] }),
//               }}
//             >
//               {/* <div className={styles.embla__slide__number}>
//                 <span>{index + 1}</span>
//               </div> */}

//               <div key={index} className={styles.recent_section}>
//                 <Link
//                   key={index}
//                   href={`/games/[slug]`}
//                   as={`/games/${index?.slug?.current}`}
//                 >
//                   <div className={styles.recent_Images_Section}>
//                     <img
//                       src="https://cdn.spintop.network/game/482x448/482x448_dikey_thumbnail_arcus.webp"
//                       alt="rexo"
//                     />
//                   </div>
//                   <section className={styles.categories_name}>
//                     <h1 className={styles.imageTitle}>{index.title}</h1>
//                     <i>Rated By 2 Users</i>
//                     {/* <div>
//                       {index.categories.map((category, index) => (
//                         <h4 key={index}>{category.name}</h4>
//                       ))}
//                     </div> */}
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur adipisicing....
//                     </p>
//                   </section>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.embla__buttons}>
//         <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//         <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;
