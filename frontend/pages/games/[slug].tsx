import React, { useEffect } from "react";
import styles from "./index.module.css";
import { GetStaticProps } from "next";
import Link from "next/link";
import { client } from "../../utils/sanity";
import {
  setGameSlugData,
  setDevSlugData,
  setIconData,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { GameDataTypes } from "../../types/slugData";
import { DeveloperTypes } from "../../types/sanityData";
import IconsTypes from "../../types/icons";
import GamesBody from "../../containers/GameSlug/gamesBody";
export default function GamesSlug({
  game,
  icons,
  fetchDeveloper,
}: // relatedGames,
{
  game: GameDataTypes;
  icons: IconsTypes;
  fetchDeveloper: DeveloperTypes;
  // relatedGames: GameDataTypes;
}) {
  // Dispatch actions to update Redux store
  const dispatch = useDispatch();

  // Dispatch actions to update Redux store

  useEffect(() => {
    dispatch(setGameSlugData(game));
    dispatch(setIconData(icons));
    dispatch(setDevSlugData(fetchDeveloper));
  }, [dispatch, game, icons]);

  // console.log(game);

  return (
    <div className={`${styles.slug} slugPage`}>
      <header className={`${styles.slug_header} center`}>
        <Link href="/">Browse</Link> {`>`} <h1>{game.title}</h1>
      </header>
      {/*  */}

      <main className={``}>
        <GamesBody game={game} icons={icons} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const query = `*[_type == "games" && slug.current == $slug] {
      _id,
      _rev,
      _ref,
      _createdAt,
      slug,
      title,
      publishedAt,
      developer-> {
        name,
        image
      }, 
      'reviews' : *[_type == "review" && games._ref == ^._id && approved== true],
      'slug': slug.current,
      body,
      projectImage,
      projectBanner,
      versionNumber,
      ageRating,
      gameLink,
      downloadLocation,
      nftContracts,
      freeToPlay,
      playable,
      currentStage,
      operatingSystem,
      gameType,
      developer,
      blockchain[]->{name, icon},
      genre[]->{name, details},
      icons,
      numberOfDownloads,
      currentPlayersCount,
      followersCount,
      rewardPool,
      adRevenueGenerated,
      twitterLink,
      websiteLink,
      telegramLink,
      discordLink,
      introductionText,
      banner,
      icons,
      secondImage,
      firstImage,
      firstVideo,
      operatingSystem[]->{name, icon},
      "related": *[_type == "games" && count(operatingSystem[@._ref in ^.^.operatingSystem[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..3] {
        genre[]->{name},
        operatingSystem[]->{name, icon},
        _key,
        _ref,
        _id,
        title, 
        developer, 
        publishedAt, 
        slug, 
        projectImage,
          _rev,
           _id,
            _type,
            versionNumber,
            numberOfDownloads,
            ageRating,
            'reviews' : *[_type == "review" && games._ref == ^._id && approved== true],
    
      }
    }`;

    const options = { slug: params?.slug };

    const game = await client.fetch(query, options);
    // Get unique developer references from game
    const developerRefs = Array.from(
      new Set(game.map((dev: any) => dev.developer?._ref).filter(Boolean))
    );
    const fetchDeveloper = await Promise.all(
      developerRefs.map((ref) => client.getDocument(ref as any))
    );

    const icons = await client.fetch(`*[_type == "icons"]`);

    return {
      props: {
        game: game[0],
        icons: icons[0],
        fetchDeveloper: fetchDeveloper,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // You can customize this based on your error handling strategy.
    };
  }
};

export async function getStaticPaths() {
  try {
    const query = `*[_type == "games"] {
      'slug': slug.current
    }`;

    const games = await client.fetch(query);

    const paths = games.map((game: GameDataTypes) => ({
      params: { slug: game.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      notFound: true,
    };
  }
}
