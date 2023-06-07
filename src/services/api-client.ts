import axios from "axios";

export default axios.create({
  baseURL: "https://gateway.marvel.com/v1",
  params: {
    key: "b276f8c3b8c01a237d36c77e2fb79c24",
  },
});
