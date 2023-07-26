import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useQueryParams from "../store";
import { QueryWrapper } from "../entities/interfaces";

const useCharacters = () => {
  const apiClient = new APIClient("/characters");
  const queryParams = useQueryParams((s) => s.queryParams);
  return useQuery<QueryWrapper, Error>({
    queryKey: ["characters", queryParams],
    queryFn: apiClient.getAll,
  });
};

export default useCharacters;
