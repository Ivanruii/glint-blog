export interface AllPost {
  name: null;
  title: string;
  slug: string;
  categories: string[];
  _id: string;
  date: string;
  excerpt: string;
  coverImage: CoverImage;
  author: Author;
}

export interface Author {
  name: string;
  picture: CoverImage;
}

export interface CoverImage {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _type: string;
  _ref: string;
}
