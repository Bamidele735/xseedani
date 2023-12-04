interface Blockchain {
  icon: any;
  name: string;
  details: any; // Adjust the type according to the structure of details property
}

export interface OperatingSystem {
  operatingSystem: any;
  title: string;
  name: string;
  icon: {
    url: string;
  };
}

export interface Review {
  approved: boolean;
  email: string;
  games: {
    _ref: string;
    _type: string;
  };
  name: string;
  rating: number;
  review: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "review";
  _updatedAt: string;
}

interface PreviewImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface RelatedTypes {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Developer {
  _ref: string;
  _type: string;
}

interface Genre {
  details: any; // Adjust the type according to the structure of details property
  name: string;
}

interface Slug {
  current: string;
  _type: string;
}

export interface GameSortData {
  icon: any;
  ageRatingIcon: any;
  gameIcon: any;
  ageRating: string;
  blockchain: Blockchain[];
  developer: Developer;
  genre: Genre[];
  numberOfDownloads: number;
  // operatingSystem: string;
  playable: any; // Adjust the type according to the structure of the playable property
  previewImage: PreviewImage;
  publishedAt: string;
  reviews: Review[];
  projectImage: {
    url: string;
  };
  slug: Slug;
  title: string;
  versionNumber: string;
  _id: string | number;
  _key: string | null;
  _ref: string | null;
  _type: string;
  _rev: string;
  name: string;
  operatingSystem: OperatingSystem[];
}

interface Slug {
  current: string;
  _type: string;
}

export interface BlockchainData {
  name: string;
  slug: Slug;
  _id: string;
  _rev: string;
  _type: "blockchain";
  _createdAt: string;
  _updatedAt: string;
}

interface Slug {
  current: string;
  _type: string;
}

export interface GenreData {
  name: string;
  slug: Slug;
  _id: string;
  _rev: string;
  _type: "genre";
  _createdAt: string;
  _updatedAt: string;
}

export interface IconsData {
  name: string;
  slug: Slug;
  _id: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface gamesData {
  description: any;
  title: any;
  map(arg0: (data: GameSortData) => JSX.Element): import("react").ReactNode;
  blockchain: BlockchainData[];
  genre: GenreData[];
  gameSortData: GameSortData[];
  related: RelatedTypes[];
  icons: IconsData[];
}
