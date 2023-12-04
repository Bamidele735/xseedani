export const images: string[] = [
    "https://cdn.spintop.network/header/1528X400/stormwalfare.webp",
    "https://cdn.spintop.network/game/1020x536/1020x536_game_review_featured_arsenal.webp",
    "https://cdn.spintop.network/header/1528X400/cryptoraiders.webp",
    "https://cdn.spintop.network/header/1528X400/banner_standart_spintopv2.webp",
    "https://cdn.spintop.network/header/1528X400/banner_standart_spintopv2.webp",
    //   image4,
  ];
  
  const imageByIndex = (index: number): string => images[index % images.length];
  
  export default imageByIndex;
  