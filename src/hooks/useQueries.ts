import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface QueryDataWrapper {
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
}

interface Image {
  path: string;
}

interface List {
  collectionURI: string;
  items: Summary[];
}

export interface Summary {
  name: string;
  type: string;
  role: string;
  resourceURI: string;
}

export default function useQueries(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [queriesContainer, setQueriesContainer] = useState<QueryContainer>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();

      apiClient
        .get<QueryDataWrapper>("/" + endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setQueriesContainer(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { queriesContainer, isLoading, error };
}
