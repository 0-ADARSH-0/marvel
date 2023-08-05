export interface QueryWrapper {
  data: QueryContainer;
}

export interface QueryContainer {
  count: number;
  total: number;
  results: Query[];
}

export interface Query {
  id: number;
  title: string;
  description: string;
  variantDescription: string;
  thumbnail: Image;
  name: string;
  fullName: string;
  type: string;
  modified: Date;
  format: string;
  pageCount?: number;
  comics: List;
  series: List;
  events: List;
  creators: List;
  characters: List;
  dates: { type: string; date: Date }[];
  prices: { type: string; price: number }[];
  images: Image[];
  resourceURI: string;
  urls: Url[];
}

interface Image {
  path: string;
}

interface List {
  collectionURI: string;
  items: Summary[];
}

interface Summary {
  name: string;
  type: string;
  role: string;
  resourceURI: string;
}

interface Url {
  type: string;
  url: string;
}
