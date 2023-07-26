import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useCharacter = (id: string) => {
  const apiClient = new APIClient(`/characters/${id}`);
  return useQuery({
    queryKey: ["character", id],
    queryFn: apiClient.get,
  });
};

export default useCharacter;
