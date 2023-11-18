import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import customerController from "../controllers/customerController";
import productController from "../controllers/productController";
import orderController from "../controllers/orderController";
import adminController from "../controllers/adminController";
// import {protectToken} from

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  // router.post('/post-crud', (req, res, next) => protectToken(req, res, next, "admin", a), homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);

  router.get("/edit-crud", homeController.editCRUD);
  router.post("/put-crud", homeController.putCRUD);

  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-users", userController.handleCreateUser);
  router.put("/api/update-user", userController.handleUpdateUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  router.get("/api/get-user-by-id", userController.handleGetOneUsers);

  //#52
  router.get("/api/allcode", userController.getAllCode);

  //router customer
  router.post("/api/sign-up", customerController.handleSignup);
  //router product
  router.post("/api/product-create", productController.productCreate);
  router.get("/api/get-all-products", productController.productGetAll);
  router.post("/api/update-product", productController.productUpdate);
  router.delete("/api/delete-product", productController.productDelete);
  router.get("/api/get-product-by-id", productController.getProductById);

  // router.get("/api/get-all-products-pagi", productController.productGetAllPagi);
  //cart
  router.post("/api/cart-add", orderController.cartAdd);
  router.delete("/api/cart-delete", orderController.cartDelete);
  router.get("/api/cart-getAll", orderController.cartGetAll);
  router.post("/api/update-cart", orderController.cartUpdate);
  //order
  router.post("/api/order-create", orderController.orderCreate);
  router.post(
    "/api/update-cart-after-order",
    orderController.cartUpdateAfterOrder
  );
  router.get("/api/get-order-by-id", orderController.getOrderById);
  router.get("/api/get-cart-by-orderId", orderController.getCartByOrderId);
  router.post("/api/status-order-cancel-req", orderController.orderCancel);
  router.get("/api/get-order-by-userId", orderController.getOrderByUserId);

  //ordermanage
  router.get("/api/get-order-checking", adminController.getOrderChecking);
  router.get("/api/get-order-status", adminController.getOrderStatus);

  router.delete("/api/order-delete", adminController.orderDelete);
  router.post("/api/update-order", adminController.orderUpdate);
  router.post("/api/update-order-status", adminController.orderUpdateStatus);

  return app.use("/", router);
};

module.exports = initWebRoutes;
