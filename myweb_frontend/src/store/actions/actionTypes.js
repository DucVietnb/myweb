const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //product
  CREATE_PRODUCT_SUCCESS: "CREATE_PRODUCT_SUCCESS",
  CREATE_PRODUCT_FAIL: "CREATE_PRODUCT_FAIL",

  GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
  GET_ALL_PRODUCTS_FAIL: "GET_ALL_PRODUCTS_FAIL",

  DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",

  UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
  UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",
});

export default actionTypes;
