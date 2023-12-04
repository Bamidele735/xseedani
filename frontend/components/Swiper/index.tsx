import React, { useState, useEffect } from "react";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import styles from "./css/embla.module.css";
import { BannerType } from "../../types/sanityData";
import Image from "next/image";
import Link from "next/link";
import { fetchIcons } from "../../lib/icons";

export default function SwiperPage({ banner }: { banner: BannerType }) {
  const [iconsData, setIconsData] = useState<any | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchFooterIcons = async () => {
      const footerIcons = await fetchIcons();
      setIconsData(footerIcons[0]);
    };
    fetchFooterIcons();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render
  return (
    <div className={styles.cc}>
      <div
        className={styles.embla__viewport}

        //ref={emblaMainRef}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper button_container  "
        >
          <div className={styles.embla__container}>
            {banner.map((item: BannerType, index: number) => (
              <div className={`${styles.embla__slide} `} key={item._id}>
                <>
                  <SwiperSlide key={item._id}>
                    <div className={` center `}>
                      <Image
                        className={styles.embla__slide__img}
                        src={
                          isMobile ? item.mobileBanner?.url : item.banner.url
                        }
                        alt={`Slide ${index + 1}`}
                        width={900}
                        height={900}
                      />
                      <div className={styles.itemsDetials}>
                        <h1>{item.header ? item.header : ""} </h1>
                        <p>
                          {" "}
                          {typeof item.description === "string"
                            ? `${item.description.substring(0, 150)}...`
                            : item.description}{" "}
                        </p>
                        <Link
                          href={`${item.buttonlink ? item.buttonlink : ""}`}
                        >
                          <button className={styles.button_color}>
                            {item.button ? item.button : ""}
                            {iconsData?.arrowIcon?.url ? (
                              <Image
                                src={
                                  iconsData?.arrowIcon?.url != undefined
                                    ? iconsData?.arrowIcon?.url
                                    : "#"
                                }
                                alt=""
                                width={30}
                                height={30}
                              />
                            ) : (
                              ""
                            )}
                          </button>
                        </Link>
                      </div>
                    </div>{" "}
                  </SwiperSlide>
                </>
              </div>
            ))}
          </div>
        </Swiper>

        {/* <div className={`${styles.embla_thumbs} container mx-auto`}>
            <div
              className={`${styles.embla_thumbs__viewport} container mx-auto`}
              ref={emblaThumbsRef}
            >
              <div className={styles.embla_thumbs__container}>
                {banner.map((item, index) => (
                  <Thumb
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    index={index}
                    imgSrc={item.banner.url}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}
