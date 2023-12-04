import React, { useState, useEffect } from "react";
import styles from "../css/index.module.css";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../FadeCarousel/EmblaCarouselArrowButtons";
export const Thumb = (props: {
  selected: any;
  imgSrc: any;
  index: any;
  onClick: any;
}) => {
  const { selected, imgSrc, index, onClick } = props;
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    if (isYouTubeLink(imgSrc)) {
      const videoId = extractVideoId(imgSrc); // Extract video ID from YouTube URL in imgSrc
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Construct thumbnail URL
      setThumbnailUrl(thumbnailUrl); // Update component state with the thumbnail URL
    } else {
      setThumbnailUrl(imgSrc); // Pass through non-YouTube links
    }
  }, [imgSrc]);

  const isYouTubeLink = (url: string) => {
    return /(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)/.test(
      url
    );
  };

  const extractVideoId = (url: string) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
  };

  // console.log("thumbnailUrl", thumbnailUrl);

  return (
    <div
      className={`${styles["embla-thumbs__slide"]} ${
        selected ? styles["embla-thumbs__slide--selected"] : ""
      }`}
    >
      <button
        onClick={onClick}
        className={styles["embla-thumbs__slide__button"]}
        type="button"
      >
        <div className={styles["embla-thumbs__slide__number"]}>
          <span>{index + 1}</span>
        </div>
        {thumbnailUrl && (
          <img
            className={thumbnailUrl ? styles["embla-thumbs__slide__img"] : ""}
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
          />
        )}
      </button>
    </div>
  );
};
