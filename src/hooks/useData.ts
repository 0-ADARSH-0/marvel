import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { QueryContainer } from "../entities/interfaces";
import APIClient from "../services/api-client";
import useQueryParams, { QueryParams } from "../store";

const useData = (path?: string, params?: QueryParams) => {
  const endpoint = path ? path : useLocation().pathname.slice(7);
  const apiClient = new APIClient(endpoint);
  const queryParams = params ? params : useQueryParams((s) => s.queryParams);
  return useQuery<QueryContainer, Error>({
    queryKey: ["data", endpoint, queryParams],
    queryFn: () => apiClient.getAll({ params: queryParams }),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useData;
