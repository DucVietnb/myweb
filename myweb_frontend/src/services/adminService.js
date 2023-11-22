import axios from "../axios";

const createProductService = (data) => {
  return axios.post("/api/product-create", data);
};
const customerGetAll = () => {
  return axios.get(`/api/get-all-customers`);
};
const adminGetAll = () => {
  return axios.get(`/api/get-all-admins`);
};
const updateCustomerExtra = (data) => {
  return axios.post(`/api/update-customer-extra`, data);
};
export {
  createProductService,
  customerGetAll,
  adminGetAll,
  updateCustomerExtra,
};
