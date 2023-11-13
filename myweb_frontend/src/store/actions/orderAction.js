import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  addCartService,
  getAllCartItem,
  deleteCart,
  UpdateCart,
  orderCreateService,
  getCartByOrderId,
  getOrderByUserId,
} from "../../services/orderService";
//order
export const orderCreate = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await orderCreateService(data);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.CREATE_ORDER_SUCCESS,
          order: res.order,
        });
      } else {
        dispatch(orderCreateFailed());
      }
    } catch (e) {
      dispatch(orderCreateFailed());
    }
  };
};
export const orderCreateFailed = () => ({
  type: actionTypes.CREATE_ORDER_FAIL,
});
export const getCartByOrderIdStart = (id) => {
  return async (dispatch, getState) => {
    let res = await getCartByOrderId(id);

    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_CART_BY_ID_SUCCESS,
        cartOrder: res.cart,
      });
    } else {
      dispatch(getCartByOrderIdFail());
    }
    try {
    } catch (e) {
      dispatch(getCartByOrderIdFail());
    }
  };
};
export const getCartByOrderIdFail = () => ({
  type: actionTypes.GET_CART_BY_ID_FAIL,
});

export const getOrderByUserIdStart = (id) => {
  return async (dispatch, getState) => {
    let res = await getOrderByUserId(id);
    console.log("========check res", res);

    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_CART_BY_USERID_SUCCESS,
        orderUserId: res.order,
      });
    } else {
      dispatch(getOrderByUserIdFail());
    }
    try {
    } catch (e) {
      dispatch(getOrderByUserIdFail());
    }
  };
};
export const getOrderByUserIdFail = () => ({
  type: actionTypes.GET_CART_BY_USERID_FAIL,
});
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
