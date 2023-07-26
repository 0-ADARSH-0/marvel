import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useComic = (id: number | string) => {
  const apiClient = new APIClient(`/comics/${id}`);
  return useQuery({
    queryKey: ["comic", id],
    queryFn: apiClient.get,
  });
};

export default useComic;
