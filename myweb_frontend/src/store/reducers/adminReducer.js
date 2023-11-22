import actionTypes from "../actions/actionTypes";

const initialState = {
  // isLoggedIn: false,
  // adminInfo: null,
  customers: [],
  admins: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        adminInfo: action.adminInfo,
      };
    case actionTypes.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        adminInfo: null,
      };
    case actionTypes.GET_ALL_CUS_SUCCESS:
      state.customers = action.customers;
      return {
        ...state,
      };
    case actionTypes.GET_ALL_CUS_FAIL:
      state.customers = [];
      return {
        ...state,
      };
    case actionTypes.GET_ALL_ADMIN_SUCCESS:
      state.admins = action.admins;
      return {
        ...state,
      };
    case actionTypes.GET_ALL_ADMIN_FAIL:
      state.admins = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
