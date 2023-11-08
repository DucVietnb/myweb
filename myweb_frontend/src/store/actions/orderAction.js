import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  addCartService,
  getAllCartItem,
  deleteCart,
  UpdateCart,
} from "../../services/orderService";
//order
//cart
export const addCart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await addCartService(data);
      if (res && res.errCode === 0) {
        dispatch({ type: actionTypes.ADD_PRODUCT_CART });
      } else {
        dispatch(addCartFailed());
      }
    } catch (e) {
      dispatch(addCartFailed());
    }
  };
};
export const addCartFailed = () => ({
  type: actionTypes.ADD_PRODUCT_CART_FAIL,
});
export const getAllCartItemStart = (userId) => {
  return async (dispatch, getState) => {
    let res = await getAllCartItem(userId);
    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_CART_BY_USER,
        cart: res.cart,
      });
    } else {
      toast.error("Can not get cart");
      dispatch(getAllCartItemFail());
    }
    try {
    } catch (e) {
      toast.error("Can not get cart");
      dispatch(getAllCartItemFail());
    }
  };
};
export const getAllCartItemFail = () => ({
  type: actionTypes.GET_CART_BY_USER_FAIL,
});

//delete
export const deleteCartStart = (item) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteCart(item.id);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.DELETE_PRODUCT_CART,
        });
      } else {
        dispatch(deleteCartFailed());
      }
    } catch (e) {
      dispatch(deleteCartFailed());
    }
  };
};
export const deleteCartFailed = () => ({
  type: actionTypes.DELETE_PRODUCT_CART_FAIL,
});

// update
export const updateCartStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await UpdateCart(data);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.UPDATE_CART_SUCCESS,
        });
      } else {
        dispatch(updateCartFailed());
      }
    } catch (e) {
      dispatch(updateCartFailed());
    }
  };
};
export const updateCartFailed = () => ({
  type: actionTypes.UPDATE_CART_FAIL,
});
