import { useQuery } from "@tanstack/react-query";
import useQueryParams from "../store";
import APIClient from "../services/api-client";
import { QueryWrapper } from "../entities/interfaces";

const useStories = () => {
  const apiClient = new APIClient("/stories");
  const queryParams = useQueryParams((s) => s.queryParams);
  return useQuery<QueryWrapper, Error>({
    queryKey: ["stories", queryParams],
    queryFn: apiClient.getAll,
  });
};

export default useStories;
