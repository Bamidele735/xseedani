export const images: string[] = [
  "https://cdn.spintop.network/header/1528X400/stormwalfare.webp",
  "https://cdn.spintop.network/header/1528X400/ultimatechampions.webp",
  "https://cdn.spintop.network/header/1528X400/cryptoraiders.webp",
  "https://cdn.spintop.network/header/1528X400/banner_standart_spintopv2.webp",
  "https://cdn.spintop.network/header/1528X400/banner_standart_spintopv2.webp",
  //   image4,
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
