import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useCreators = () => {
  const apiClient = new APIClient(`/creators`);
  return useInfiniteQuery({
    queryKey: ["creators"],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: { orderBy: "firstName", offset: (pageParam - 1) * 20 },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.total - allPages.length * 20 > 0
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useCreators;
