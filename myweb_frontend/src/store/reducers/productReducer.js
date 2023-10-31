import actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      // console.log("check in product reducer", action);
      state.products = action.products;
      console.log("check in product reducer", state.products);

      return {
        ...state,
      };
    case actionTypes.GET_ALL_PRODUCTS_FAIL:
      state.products = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productReducer;
