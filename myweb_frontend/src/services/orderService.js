import axios from "../axios";
// order
const addCartService = (data) => {
  return axios.post("/api/cart-add", data);
};

const getAllCartItem = (userId) => {
  return axios.get(`/api/cart-getAll?userId=${userId}`);
};
const deleteCart = (id) => {
  return axios.delete("/api/cart-delete", {
    data: {
      id: id,
    },
  });
};
const UpdateCart = (data) => {
  return axios.post(`/api/update-cart`, data);
};
export { addCartService, getAllCartItem, deleteCart, UpdateCart };
