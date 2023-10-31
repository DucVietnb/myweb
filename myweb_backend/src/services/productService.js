import bcrypt from "bcryptjs";
import db from "../models/index";
let checkExistProduct = (productName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { name: productName },
      });
      if (product) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let productCreateService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkExistProduct(data.name);
      if (check) {
        resolve({
          errCode: 1,
          errMessage: "Product exist!",
        });
      } else {
        await db.Product.create({
          name: data.name,
          type: data.type,
          brand: data.brand,
          initPrice: data.initPrice,
          truePrice: data.truePrice,
          percent: data.percent,
          isHot: data.isHot,
          isTopSearch: data.isTopSearch,
          isBoughtMany: data.isBoughtMany,
          isNew: 1,
          countInStock: data.countInStock,
          countSold: 0,
          avatar: data.avatar,
          content: data.content,
          contentHTML: data.contentHTML,
          description: data.description,
          descriptionHTML: data.descriptionHTML,
        });
        resolve({
          errCode: 0,
          errMessage: "ok",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let productGetAllService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll();
      console.log("check product", products);
      resolve(products);
    } catch (e) {
      reject(e);
    }
  });
};

let updateProductService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (product) {
        product.type = data.type;
        product.brand = data.brand;
        product.initPrice = data.initPrice;
        product.truePrice = data.truePrice;
        product.percent = data.percent;
        product.isHot = data.isHot;
        product.isTopSearch = data.isTopSearch;
        product.isBoughtMany = data.isBoughtMany;
        product.isNew = data.isNew;
        product.countInStock = data.countInStock;
        product.countSold = data.countSold;
        product.avatar = data.avatar;
        product.content = data.content;
        product.contentHTML = data.contentHTML;
        product.description = data.description;
        product.descriptionHTML = data.descriptionHTML;
        await product.save();
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No product found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let productDeleteService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: id },
      });
      if (product) {
        db.Product.destroy({
          where: { id: id },
        });
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No product found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getProductByIdSẻvice = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter!",
        });
      } else {
        let product = await db.Product.findOne({
          where: { id: id },
        });
        if (!product) product = {};
        resolve({
          errCode: 0,
          product: product,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  productCreateService: productCreateService,
  productGetAllService: productGetAllService,
  updateProductService: updateProductService,
  productDeleteService: productDeleteService,
  getProductByIdSẻvice: getProductByIdSẻvice,
};
