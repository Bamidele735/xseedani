import React, { useEffect } from "react";
import GamesSection from "../../containers/Games";
import { useDispatch } from "react-redux";
import {
  setGameSortData,
  setGenreData,
  setBlockchainData,
} from "../../redux/actions";
import { gamesData } from "../../types/gamesDataTypes";
import { client } from "../../utils/sanity";
interface MyQuery {
  os?: string;
}

const Games = ({ gameSortData, genre, blockchain }: gamesData) => {
  // Dispatch actions to update Redux store
  const dispatch = useDispatch();

  // Dispatch actions to update Redux store
  useEffect(() => {
    dispatch(setGameSortData(gameSortData));
    dispatch(setGenreData(genre));
    dispatch(setBlockchainData(blockchain));
  }, [dispatch, gameSortData, genre, blockchain]);

  return (
    <div>
      <div className="center ">
        <GamesSection />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: { query: MyQuery }) {
  const { os } = query;

  // Separate the combined 'os' parameter into an array
  const operatingSystems = os ? os.split(",") : [];
  try {
    const gameSortData = await client.fetch(
      `*[_type == "games" && (${operatingSystems
        .map((os) => `"${os}" in operatingSystem[]->name`)
        .join(" || ")})]  {
      genre[]->{name, details},
      operatingSystem[]->{name, icon},
      blockchain[]->{name},
      _key,
      _ref,
      _id,
      title, 
      playable,
      projectImage,
      developer, 
      publishedAt, 
      slug, 
      _rev,
      _id,
      _type,
      versionNumber,
      numberOfDownloads,
      ageRating,
      playableIcon,
      betaIcon,
      gameIcon,
      'reviews': *[_type == "review" && games._ref == ^._id && approved== true]
    } | order(_createdAt desc)`
    );

    const genre = await client.fetch(`
  *[_type == "genre"] | order(_createdAt desc)
`);

    const blockchain = await client.fetch(`
*[_type == "blockchain"] | order(_createdAt desc)
`);

    return {
      props: {
        gameSortData,
        genre,
        blockchain,
      },
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      notFound: true,
    };
  }
}

export default Games;
