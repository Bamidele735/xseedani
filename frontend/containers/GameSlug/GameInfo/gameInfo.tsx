import React from "react";
import styles from "./index.module.css";
import PortableText from "react-portable-text";
import { GameDataTypes } from "../../../types/slugData";
import SlugCarousel from "../../../components/Carousel/SlugCarousel/ts";
import SlugSlider from "../../../components/Carousel/SlugCarousel/ts";
const GameInfo = ({ game }: { game: GameDataTypes }) => {
  return (
    <div>
      <div>
        <SlugSlider />
      </div>
      <div>
        {game.introductionText ? (
          <PortableText
            className={styles.PortableText}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={game.introductionText}
            serializers={{
              h1: (props: any) => <h1 className={styles.h1Text} {...props} />,
              h2: (props: any) => <h2 className={styles.h1Text} {...props} />,
              li: ({ children }: any) => (
                <li className={styles.h1Text}> {children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className={styles.hrefText}>
                  {children}
                </a>
              ),
            }}
          />
        ) : (
          <div></div>
        )}
      </div>{" "}
      <div>
        {game.body ? (
          <PortableText
            className={styles.PortableText}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={game.body}
            serializers={{
              h1: (props: any) => <h1 className={styles.h1Text} {...props} />,
              h2: (props: any) => <h2 className={styles.h1Text} {...props} />,
              li: ({ children }: any) => (
                <li className={styles.h1Text}> {children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className={styles.hrefText}>
                  {children}
                </a>
              ),
            }}
          ></PortableText>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default GameInfo;
