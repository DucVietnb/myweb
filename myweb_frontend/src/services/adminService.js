import axios from "../axios";

const createProductService = (data) => {
  return axios.post("/api/product-create", data);
};

export { createProductService };
