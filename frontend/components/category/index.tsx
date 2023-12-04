import { useState } from "react";
import { createClient } from "next-sanity";
import styles from "./styles.module.css";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { GroupedVideosData, SanityData } from "../../helpers/types";
import ModalBody from "../Modal";

// to show sanity imaage

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
});
const builder = imageUrlBuilder(client); //image from sanity
function urlFor(source: string) {
  return builder.image(source);
}

const CategoryPage = ({
  groupedVideos,
}: {
  groupedVideos: GroupedVideosData;
}) => {
  const [selectedVideo, setSelectedVideo] = useState<SanityData | null>(null);

  const handleImageClick = (data: SanityData) => {
    setSelectedVideo(data);
  };
  return (
    <div className={`   mx-auto `}>
      {/* Render grouped videos */}
      <div className={` ${styles.rowx}  `}>
        <h1 className={styles.CategoriesHeader}>Categories</h1>
        {Object.keys(groupedVideos).map((category) => (
          <div key={category} className={styles.categories}>
            <h2 className={styles.category_title}>{category}</h2>
            <div className={styles.Category_rowx}>
              {groupedVideos[category].map((video) => (
                <div key={video._id} className={styles.video_file}>
                  <div className={styles.categories_section}>
                    <div className={styles.movie_file}>
                      <Image
                        src={urlFor(video.previewImage).width(500).url()}
                        alt={video.title}
                        width={500}
                        height={100}
                        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                        onClick={() => handleImageClick(video)} // Pass data to the click handler
                      />
                      <h3>{video.title}</h3>
                    </div>

                    {/* <h3>{video.title}</h3> */}
                  </div>
                  {/* <p className={styles.video_link}> {video.video_link}</p> */}
                  {/* Render other video details as needed */}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* {selectedVideo && <ModalBody videoData={selectedVideo} />} */}
      </div>
    </div>
  );
};

export default CategoryPage;
