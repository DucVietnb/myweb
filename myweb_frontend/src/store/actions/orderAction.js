import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {} from "../../services/orderService";
//order
export const addProductCart = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_CART,
    product: product,
  };
};

export const deleteProductCart = (product) => {
  return {
    type: actionTypes.DELETE_PRODUCT_CART,
    product: product,
  };
};
