import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useQueryParams from "../store";
import { QueryWrapper } from "../entities/interfaces";

const useComics = () => {
  const apiClient = new APIClient("/comics");
  const queryParams = useQueryParams((s) => s.queryParams);
  return useQuery<QueryWrapper, Error>({
    queryKey: ["comics", queryParams],
    queryFn: apiClient.getAll,
  });
};

export default useComics;
