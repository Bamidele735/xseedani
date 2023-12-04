import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const useImageUrls = () => {
  const game = useSelector((state: RootState) => state.gameSlugData);
  // console.log("game", game);
  // Generate the array of image URLs based on the game data
  const images: string[] = [
    `${game?.firstImage?.url}`,
    `${game?.secondImage?.url}`,
    `${game?.firstVideo?.url}`,
    // `${game?.secondVideo?.url}`,
  ];

  const getImageByIndex = (index: number): string =>
    images[index % images.length];

  return getImageByIndex;
};

export default useImageUrls;
