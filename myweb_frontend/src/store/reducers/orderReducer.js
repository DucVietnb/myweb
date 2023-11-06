import actionTypes from "../actions/actionTypes";

const initialState = {
  cartArr: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_CART:
      const productInCart = state.cartArr.find(
        (p) => p.id === action.product.id
      );
      if (!productInCart) {
        return {
          cartArr: [...state.cartArr, action.product],
        };
      } else {
        let newCart = state.cartArr;
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.product.id
        );
        if (newCart[objIndex].quantity === 1) {
          newCart[objIndex].quantity = 2;
        } else {
          newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
        }
        return { cartArr: [...newCart] };
      }

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
