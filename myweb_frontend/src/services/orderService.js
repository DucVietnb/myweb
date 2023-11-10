import axios from "../axios";
// order
const orderCreateService = (data) => {
  return axios.post("/api/order-create", data);
};
const cartUpdateAfterOrder = (data) => {
  return axios.post(`/api/update-cart-after-order`, data);
};
const getOrderById = (id) => {
  return axios.get(`/api/get-order-by-id?id=${id}`);
};
const getCartByOrderId = (id) => {
  return axios.get(`/api/get-cart-by-orderId?id=${id}`);
};
const orderCancel = (data) => {
  return axios.post(`/api/status-order-cancel-req`, data);
};
//CART
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
export {
  addCartService,
  getAllCartItem,
  deleteCart,
  UpdateCart,
  orderCreateService,
  cartUpdateAfterOrder,
  getOrderById,
  getCartByOrderId,
  orderCancel,
};
