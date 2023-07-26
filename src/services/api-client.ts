import axios, { AxiosRequestConfig } from "axios";
import { QueryWrapper } from "../entities/interfaces";

const axiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts: "1",
    apikey: "b276f8c3b8c01a237d36c77e2fb79c24",
    hash: "7f37a659cd55456615aa7cc521cb23ac",
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<QueryWrapper>(this.endpoint, config)
      .then((res) => res.data.data);
  };
}

export default APIClient;
