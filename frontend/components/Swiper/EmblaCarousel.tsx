// // import React, { useState, useEffect, useCallback } from "react";
// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
// import { Thumb } from "./EmblaCarouselThumbsButton";
// import styles from "./css/embla.module.css";
// import useImageUrl from "../../utils/sanityImage";
// import { BannerType } from "../../types/sanityData";
// import Image from "next/image";
// import OrangeButton from "../button/orangeButton/button";
// import Link from "next/link";
// import { fetchIcons } from "../../lib/icons";
// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
//   banner: BannerType;
// };

// export default function EmblaCarousel({ options, slides, banner }: PropType) {
//   const [iconsData, setIconsData] = useState<any | null>(null);
//   // console.log("iconsData", icons);
//   // useEffect(() => {
//   //   const fetchIconsLinks = async () => {
//   //     const media = await fetchIcons();
//   //     setIconsData(media);
//   //   };

//   //   fetchIconsLinks();
//   // }, []);

//   // const [selectedIndex, setSelectedIndex] = useState(0);
//   // const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
//   // const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
//   //   containScroll: "keepSnaps",
//   //   dragFree: true,
//   // });

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 600);
//     };

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Call handleResize initially to set the initial state
//     handleResize();

//     // Remove event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   // const onThumbClick = useCallback(
//   //   (index: number) => {
//   //     if (!emblaMainApi || !emblaThumbsApi) return;
//   //     emblaMainApi.scrollTo(index);
//   //   },
//   //   [emblaMainApi, emblaThumbsApi]
//   // );

//   // const onSelect = useCallback(() => {
//   //   if (!emblaMainApi || !emblaThumbsApi) return;
//   //   setSelectedIndex(emblaMainApi.selectedScrollSnap());
//   //   emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
//   // }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

//   // const autoplay = useCallback(() => {
//   //   if (!emblaMainApi) return;
//   //   const nextIndex = (selectedIndex + 1) % slides.length;
//   //   setSelectedIndex(nextIndex);
//   //   emblaMainApi.scrollTo(nextIndex);
//   // }, [emblaMainApi, selectedIndex, slides.length]);

//   // useEffect(() => {
//   //   const interval = setInterval(autoplay, 5000); // 5 seconds
//   //   return () => clearInterval(interval);
//   // }, [autoplay]);

//   // useEffect(() => {
//   //   if (!emblaMainApi) return;
//   //   onSelect();
//   //   emblaMainApi.on("select", onSelect);
//   //   emblaMainApi.on("reInit", onSelect);
//   // }, [emblaMainApi, onSelect]);
//   return (
//     <div className={styles.cc}>
//       <div
//         className={styles.embla__viewport}

//         //ref={emblaMainRef}
//       >
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 4500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           <div className={styles.embla__container}>
//             {banner.map((item: BannerType, index: number) => (
//               <div className={styles.embla__slide} key={index}>
//                 <>
//                   <SwiperSlide>
//                     {" "}
//                     <Image
//                       className={styles.embla__slide__img}
//                       src={isMobile ? item.mobileBanner?.url : item.banner.url}
//                       alt={`Slide ${index + 1}`}
//                       width={900}
//                       height={900}
//                     />
//                     <div className={styles.itemsDetials}>
//                       <h1>{item.header ? item.header : ""} </h1>
//                       <p>
//                         {" "}
//                         {typeof item.description === "string"
//                           ? `${item.description.substring(0, 150)}...`
//                           : item.description}{" "}
//                       </p>
//                       {/* <Link href={`${item.buttonlink ? item.buttonlink : ""}`}>
//                   <button className={styles.button_color}>
//                     {item.button ? item.button : ""}
//                     {iconsData?.arrowIcon?.url ? (
//                       <Image
//                         src={
//                           iconsData?.arrowIcon?.url != undefined
//                             ? iconsData?.arrowIcon?.url
//                             : "#"
//                         }
//                         alt=""
//                         width={30}
//                         height={30}
//                       />
//                     ) : (
//                       ""
//                     )}
//                   </button>
//                 </Link> */}
//                     </div>
//                   </SwiperSlide>
//                 </>
//               </div>
//             ))}
//           </div>
//         </Swiper>

//         {/* <div className={`${styles.embla_thumbs} container mx-auto`}>
//           <div
//             className={`${styles.embla_thumbs__viewport} container mx-auto`}
//             ref={emblaThumbsRef}
//           >
//             <div className={styles.embla_thumbs__container}>
//               {banner.map((item, index) => (
//                 <Thumb
//                   onClick={() => onThumbClick(index)}
//                   selected={index === selectedIndex}
//                   index={index}
//                   imgSrc={item.banner.url}
//                   key={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
