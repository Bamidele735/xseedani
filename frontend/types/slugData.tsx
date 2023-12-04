import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Blockchain {
  map(arg0: (data: any) => JSX.Element): import("react").ReactNode;
  icon: {
    url: string;
  };
  name: string;
  details: any; // Adjust the type according to the structure of details property
}

interface OperatingSystem {
  map(arg0: (data: any, index: any) => JSX.Element): import("react").ReactNode;
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

interface ProfileBanner {
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

export interface GameDataTypes {
  projectBanner: any;
  projectImage: {
    url: string;
  };
  related: any;
  adRevenueGenerated: string;
  _key: string;
  _type: string;
  ageRating: string;
  banner: null;
  reviews: Review[];
  blockchain: Blockchain[];
  genre: Genre[];
  operatingSystem: OperatingSystem[];

  body: {
    children: {
      marks: any[];
      text: string;
      _key: string;
      _type: string;
    }[];
    markDefs: any[];
    style: string;
    _key: string;
    _type: string;
  }[];
  currentPlayersCount: number;
  currentStage: {
    _key: string;
    _ref: string;
    _type: string;
  }[];
  developer: {
    _ref: string;
    _type: string;
  };
  discordLink: string;
  downloadLocation: string;
  followersCount: number;
  freeToPlay: boolean;
  gameLink: string;
  gameType: string;
  icons: string;
  introductionText: {
    children: {
      marks: any[];
      text: string;
      _key: string;
      _type: string;
    }[];
    markDefs: {
      href: string;
      _key: string;
      _type: string;
    }[];
    style: string;
    _key: string;
    _type: string;
  }[];
  nftContracts: string;
  numberOfDownloads: number;
  playable: null;
  profileBanner: string;
  publishedAt: string;

  rewardPool: string;
  slug: {
    current: string;
    _type: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  };
  telegramLink: string;
  title: string;
  twitterLink: string;
  versionNumber: string;
  websiteLink: string;
  _createdAt: string;
  _id: string;
  _ref: null;
  _rev: string;
}

export interface gamesSlugData {
  blockchain: BlockchainData[];
  genre: GenreData[];
  gameDataTypes: GameDataTypes[];
}
