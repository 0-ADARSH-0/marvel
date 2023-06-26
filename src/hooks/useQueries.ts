import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Query {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
  name: string;
  type: string;
  modified: Date;
  comics: List;
  series: List;
  events: List;
  creators: List;
  characters: List;
}

interface QueryContainer {
  count: number;
  results: Query[];
}

interface QueryDataWrapper {
  data: QueryContainer;
}

interface Image {
  path: string;
}

interface List {
  items: Summary[];
}

interface Summary {
  name: string;
  type: string;
  role: string;
  resourceURl: string;
}

export default function useQueries(
  field: string,
  requestConfig?: AxiosRequestConfig
) {
  const [queries, setQueries] = useState<Query[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<QueryDataWrapper>("/" + field, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setQueries(res.data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [field]);
  return { queries, isLoading, error };
}
