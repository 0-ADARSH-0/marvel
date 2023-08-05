import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryContainer } from "../entities/interfaces";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/characters");
const useCharacters = () =>
  useInfiniteQuery<QueryContainer, Error>({
    queryKey: ["characters"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: { orderBy: "name", offset: (pageParam - 1) * 20 },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total - allPages.length * 20 > 0
        ? allPages.length + 1
        : undefined;
    },
  });

export default useCharacters;
