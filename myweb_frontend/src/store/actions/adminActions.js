import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
// import { createProductService } from "../../services/adminService";

// export const createProduct = (data) => {
//   return async (dispatch, getState) => {
//     try {
//       let res = await createProductService(data);
//       if (res && res.errCode === 0) {
//         toast.success("Create a new product succeed!");
//         dispatch({ type: actionTypes.CREATE_PRODUCT_SUCCESS });
//       } else {
//         toast.error(res.errMessage);
//         dispatch(createProductFailed());
//       }
//     } catch (e) {
//       toast.error("Can not create product");
//       dispatch(createProductFailed());
//     }
//   };
// };
// export const createProductFailed = () => ({
//   type: actionTypes.CREATE_PRODUCT_FAIL,
// });
