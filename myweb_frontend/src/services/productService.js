import axios from "../axios";
// product
const createProductService = (data) => {
  return axios.post("/api/product-create", data);
};

const getAllProducts = (id) => {
  return axios.get(`/api/get-all-products?id=${id}`);
};

const deleteProduct = (id) => {
  return axios.delete("/api/delete-product", {
    data: {
      id: id,
    },
  });
};

const getProductById = (id) => {
  return axios.get(`/api/get-product-by-id?id=${id}`);
};
const UpdateProduct = (data) => {
  return axios.post(`/api/update-product`, data);
};
export {
  getAllProducts,
  deleteProduct,
  createProductService,
  getProductById,
  UpdateProduct,
};
