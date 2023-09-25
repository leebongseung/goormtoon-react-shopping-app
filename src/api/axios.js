import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  params: {},
});

export default instance;
