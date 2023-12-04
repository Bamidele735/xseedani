import { EmblaOptionsType } from "embla-carousel-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface Genre {
  name: string;
}

export interface OperatingSystem {
  title: string;
  operatingSystem: any;
  icon: {
    url: string;
  };
  name: string;
}
export interface GameOperatingSystem {
  icon: {
    url: string;
  };
  data: any;

  name: string;
}

export interface Review {
  length: any;
  forEach(arg0: (review: Review) => void): unknown;
  map(arg0: (review: Review) => void): unknown;
  rating: number;
  name: string;
  review: string;
  _updatedAt: string;
  email: string;
  approved: boolean;
  _createdAt: string;
}

export interface PreviewImage {
  asset: {
    _ref: string;
    _type: string;
  };
  // Add other properties if any
}

export interface ReviewCountTypes {
  map(arg0: (review: ReviewCountTypes) => void): unknown;
  rating: number;
  averageGameRating: number;
}

export interface DeveloperTypes {
  map(arg0: (data: DeveloperTypes) => JSX.Element): import("react").ReactNode;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface HomePageGameTypes {
  _id: number;
  projectImage: {
    url: string;
  };
  title: string;
  numberOfDownloads: number;
  slug: {
    current: string;
  };
  current: string;
  averageGameRating: number;
  playable: boolean;
  reviews: ReviewCountTypes;
}

export interface GameTypes {
  _id: number;
  _key: string | null;
  [key: string]: any;
  _ref: string | null;
  _type: string;
  averageGameRating: number;
  ageRating: string;
  developer: {
    _ref: string;
    _type: string;
  };
  genre: Genre[];
  numberOfDownloads: number;
  operatingSystem: OperatingSystem[];
  previewImage: PreviewImage;
  projectImage: {
    url: string;
  };
  publishedAt: string;
  reviews: Review;
  slug: {
    current: string;
  };
  title: string;
  versionNumber: string;
  current: any;
  options: EmblaOptionsType | null;
  playable: boolean;
}
export interface Logo {
  map(arg0: (index: any) => JSX.Element): import("react").ReactNode;
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  asset: {
    _ref: string;
    _type: string;
  };
  title: string;
  logo: string;
}

export type EmblaPropType = {
  game?: GameTypes[];
  options?: EmblaOptionsType | null;
};
export interface BannerType {
  _id: string | null | undefined;
  mobileBanner: any;
  description: ReactNode;
  header: any;
  button: ReactNode;
  buttonlink: any;
  buttonrink: any;
  map(
    arg0: (item: BannerType, index: number) => JSX.Element
  ): import("react").ReactNode;
  banner: {
    src: string | StaticImport;
    url: string;
  };
  title: string;
}

export interface IndexPageProps {
  game: GameTypes[];
  developer: DeveloperTypes[]; // Use the appropriate interface for developer data
  operatingSystem: OperatingSystem[]; // Use the appropriate interface for operatingSystem data
  logo: Logo[];
  banner: BannerType;
}
