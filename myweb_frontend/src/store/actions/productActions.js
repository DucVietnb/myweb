import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  getAllProducts,
  deleteProduct,
  createProductService,
  UpdateProduct,
} from "../../services/productService";
//product
//GET
export const getAllProductsStart = () => {
  return async (dispatch, getState) => {
    let res = await getAllProducts("ALL");
    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
        products: res.products.reverse(),
      });
    } else {
      toast.error("Can not get products");
      dispatch(getAllProductsFail());
    }
    try {
    } catch (e) {
      toast.error("Can not get products");
      dispatch(getAllProductsFail());
    }
  };
};
export const getAllProductsFail = () => ({
  type: actionTypes.GET_ALL_PRODUCTS_FAIL,
});
//DELETE
export const deleteProductStart = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteProduct(id);
      if (res && res.errCode === 0) {
        toast.success("Delete product succeed!");
        dispatch({
          type: actionTypes.DELETE_PRODUCT_SUCCESS,
        });
        dispatch(getAllProductsStart());
      } else {
        toast.error("Can not delete product");
        dispatch(deleteProductFailed());
      }
    } catch (e) {
      toast.error("Can not delete product");
      dispatch(deleteProductFailed());
    }
  };
};
export const deleteProductFailed = () => ({
  type: actionTypes.DELETE_PRODUCT_FAIL,
});
//create

export const createProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createProductService(data);
      if (res && res.errCode === 0) {
        toast.success("Create a new product succeed!");
        dispatch({ type: actionTypes.CREATE_PRODUCT_SUCCESS });
        dispatch(getAllProductsStart());
      } else {
        toast.error(res.errMessage);
        dispatch(createProductFailed());
      }
    } catch (e) {
      toast.error("Can not create product");
      dispatch(createProductFailed());
    }
  };
};
export const createProductFailed = () => ({
  type: actionTypes.CREATE_PRODUCT_FAIL,
});

//EDIT
export const updateProduct = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await UpdateProduct(data);
      if (res && res.errCode === 0) {
        toast.success("Update product succeed!");
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        });
      } else {
        toast.error("Can not update product");
        dispatch(updateProductFailed());
      }
    } catch (e) {
      toast.error("Can not update product");
      dispatch(updateProductFailed());
    }
  };
};
export const updateProductFailed = () => ({
  type: actionTypes.UPDATE_PRODUCT_FAIL,
});
