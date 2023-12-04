export interface GroupedVideosTypes {
  _id: string;
  author: any;
  title: string;
  video_link: string;
  status: string;
  previewImage: string;
  publishedAt: string;
  files: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
}

export interface GroupedVideosData {
  [categoryName: string]: GroupedVideosTypes[];
}
export interface CategoryData {
  _key: string;
  _ref: string;
  _type: string;
  title: string;
}
export interface SanityData {
  author: any;
  _id: string;
  title: string;
  video_link: string;
  status: string;
  previewImage: string;
  publishedAt: string;
  files: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
}

export interface VideoData {
  _id: string;
  title: string;
  video_link: string;
  status: string;
  publishedAt: string;
  previewImage: string;
  author: string;
  categories: [{ title: string }];
  files: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
}
// export interface LogoDataInterface {
//   title: string;
//   logo: string;
//   logoData: any;

// }

export interface LogoDataItem {
  logo: string;
  title: string;
  map: any;
}

export interface LogoDataInterface {
  logoData: LogoDataItem[];
}

export interface AuthorInterface {
  length: number;
  find(arg0: (author: any) => boolean): unknown;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  name: any;

  slug: {
    _type: string;
    current: string;
  };
}

