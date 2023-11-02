import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import customerController from "../controllers/customerController";
import productController from "../controllers/productController";

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

  return app.use("/", router);
};

module.exports = initWebRoutes;
