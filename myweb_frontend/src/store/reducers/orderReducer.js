import actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_BY_USER:
      state.cart = action.cart;
      return {
        ...state,
      };
    case actionTypes.GET_CART_BY_USER_FAIL:
      state.cart = [];
      return {
        ...state,
      };
    case actionTypes.DELETE_PRODUCT_CART:
      let newCart = state.cartArr;
      const objIndex = newCart.findIndex((obj) => obj.id === action.product.id);
      newCart.splice(objIndex, 1);
      return { cartArr: [...newCart] };
    default:
      return state;
  }
};

export default orderReducer;
