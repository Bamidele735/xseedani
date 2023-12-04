import React, { useEffect } from "react";
import GamesSection from "../../containers/Games";
import { useDispatch } from "react-redux";
import {
  setGameSortData,
  setGenreData,
  setBlockchainData,
  setIconData,
} from "../../redux/actions";
import { gamesData } from "../../types/gamesDataTypes";
import { client } from "../../utils/sanity";

interface MyQuery {
  os?: string;
}

const Games = ({ gameSortData, genre, blockchain, icons }: gamesData) => {
  // Dispatch actions to update Redux store
  const dispatch = useDispatch();

  // Dispatch actions to update Redux store
  useEffect(() => {
    dispatch(setGameSortData(gameSortData));
    dispatch(setGenreData(genre));
    dispatch(setBlockchainData(blockchain));
    dispatch(setIconData(icons));
  }, [dispatch, gameSortData, genre, blockchain, icons]);

  console.log(genre);

  return (
    <div>
      <div className="center">
        <GamesSection />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const sortingOption = "_updatedAt"; // Default to sorting by publishedAt if no option is provided

  try {
    const gameSortData = await client.fetch(
      `*[_type == "games"]  {
      genre[]->{name, details},
      operatingSystem[]->{name, icon},
      blockchain[]->{name, icon},
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
      gameIcon,
      _updatedAt,
      'reviews': *[_type == "review" && games._ref == ^._id && approved== true]
    } | order(${sortingOption} desc)`
    );

    const genre = await client.fetch(`
  *[_type == "genre"] | order(publishedAt desc)
`);

    const blockchain = await client.fetch(`
*[_type == "blockchain"] | order(publishedAt desc)
`);
    const icons = await client.fetch(`*[_type == "icons"]`);

    return {
      props: {
        gameSortData,
        genre,
        blockchain,
        icons,
      },
    };
  } catch (error) {
    console.error("Error", error);
    return {
      notFound: true,
    };
  }
}

export default Games;
