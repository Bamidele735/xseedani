import { useEffect } from "react";
import SwiperPage from "../components/Swiper";
import Home from "../containers/GamesHome/Index";
import { useDispatch } from "react-redux";
import { IndexPageProps } from "../types/sanityData";
import {
  setGameData,
  setLogoData,
  setDeveloperData,
  setOperatingSystemData,
} from "../redux/actions";
import { client } from "../utils/sanity";
import Footer from "../components/Footer";
import Layout from "../Layout/Layout";

const IndexPage: React.FC<IndexPageProps> = ({
  game,
  logo,
  developer,
  operatingSystem,
  banner,
}) => {
  // Dispatch actions to update Redux store
  const dispatch = useDispatch();

  // Dispatch actions to update Redux store

  useEffect(() => {
    // Dispatch actions to update the state
    dispatch({
      type: "SET_LOGO_DATA",
      payload: logo,
    });

    dispatch({
      type: "SET_DEVELOPER_DATA",
      payload: developer,
    });

    dispatch({
      type: "SET_OPERATING_SYSTEM_DATA",
      payload: operatingSystem,
    });

    dispatch({
      type: "SET_GAME_DATA",
      payload: game,
    });
  }, [dispatch, game, logo, developer, operatingSystem]);

  return (
    <div>
      <SwiperPage banner={banner} />
      <div className={``}>
        <div className={!game ? `center ` : "ood8"}>
          <Home />
        </div>{" "}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const game = await client.fetch(
      `*[_type == "games"] 
    {
      genre[]->{name},
    operatingSystem[]->{name, icon},
    _key,
    _ref,
    _id,
    title, 
    shortDescription,
    projectImage,
    developer, 
    publishedAt, 
    slug, 
    playable,
      _rev,
       _id,
        _type,
        versionNumber,
        numberOfDownloads,
        ageRating,
        ageRatingIcon,
        _updatedAt,
        spotlight,
        'reviews' : *[_type == "review" && games._ref == ^._id && approved== true],

} | order(_createdAt desc)  `
    );

    const logo = await client.fetch(`*[_type == "logo"]`);
    const banner = await client.fetch(`*[_type == "banner"]`);
    // Get unique developer references from game
    const developerRefs = Array.from(
      new Set(game.map((dev: any) => dev.developer?._ref).filter(Boolean))
    );
    const developer = await Promise.all(
      developerRefs.map((ref) => client.getDocument(ref as any))
    );

    // Get unique operating system references from game
    const operatingSystemRefs = Array.from(
      new Set(
        game.map((data: any) => data.operatingSystem?._ref).filter(Boolean)
      )
    );
    const operatingSystem = await Promise.all(
      operatingSystemRefs.map((ref) => client.getDocument(ref as any))
    );

    return {
      props: {
        game,
        logo,
        developer,
        operatingSystem,
        banner,
      },
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      notFound: true,
    };
  }
}

export default IndexPage;
