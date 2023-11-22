import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  customerGetAll,
  adminGetAll,
  updateCustomerExtra,
} from "../../services/adminService";
export const customerGetAllStart = (id) => {
  return async (dispatch, getState) => {
    let res = await customerGetAll();

    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_ALL_CUS_SUCCESS,
        customers: res.customer,
      });
    } else {
      dispatch(customerGetAllFail());
    }
    try {
    } catch (e) {
      dispatch(customerGetAllFail());
    }
  };
};
export const customerGetAllFail = () => ({
  type: actionTypes.GET_ALL_CUS_FAIL,
});
export const adminGetAllStart = (id) => {
  return async (dispatch, getState) => {
    let res = await adminGetAll();

    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.GET_ALL_ADMIN_SUCCESS,
        admins: res.admin,
      });
    } else {
      dispatch(adminGetAllFail());
    }
    try {
    } catch (e) {
      dispatch(adminGetAllFail());
    }
  };
};
export const adminGetAllFail = () => ({
  type: actionTypes.GET_ALL_ADMIN_FAIL,
});
export const updateCustomerExtraStart = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateCustomerExtra(data);
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.UPDATE_CUS_EXTRA_SUCCESS,
        });
      } else {
        dispatch(updateCustomerExtraFailed());
      }
    } catch (e) {
      dispatch(updateCustomerExtraFailed());
    }
  };
};
export const updateCustomerExtraFailed = () => ({
  type: actionTypes.UPDATE_CUS_EXTRA_FAIL,
});
