import bcrypt from "bcryptjs";
import db from "../models/index";

let checkExistCart = (userId, productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Cart.findOne({
        where: { userId: userId, productId: productId },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let cartAddService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: data.productId },
        attributes: ["truePrice"],
      });
      let truePrice = product === null ? 0 : product.truePrice;
      //   if (product === null) {
      //     console.log("check");
      //     truePrice = 0;
      //   } else {
      //     truePrice = product.truePrice;
      //   }

      // console.log("===========check product in orderService", truePrice);

      let check = await checkExistCart(data.userId, data.productId);
      if (check) {
        // console.log("cart exist");
        let cart = await db.Cart.findOne({
          where: { userId: data.userId, productId: data.productId },
          raw: false,
        });

        cart.quantity += 1;
        cart.totalPrice = cart.quantity * +truePrice;
        await cart.save();
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        await db.Cart.create({
          orderId: data.orderId,
          userId: data.userId,
          productId: data.productId,
          quantity: 1,
          totalPrice: truePrice,
          note: data.note,
        });
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      }

      resolve({
        errCode: 0,
        errMessage: "Success",
      });
    } catch (e) {
      reject(e);
    }
  });
};
let cartDeleteService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cart = await db.Cart.findOne({
        where: { id: id },
      });
      if (cart) {
        db.Cart.destroy({
          where: { id: id },
        });
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No cart found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let cartGetAllService = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({
          errCode: 0,
          cart: {},
        });
      } else {
        let cart = await db.Cart.findAll({
          where: { userId: userId },
          order: [["createdAt", "DESC"]],
        });
        let product = {};
        // console.log(cart);
        if (!cart) {
          cart = {};
          resolve({
            errCode: 0,
            cart: cart,
          });
        } else {
          for (let i = 0; i < cart.length; i++) {
            product = await db.Product.findOne({
              where: { id: cart[i].productId },
              attributes: ["name", "type", "truePrice", "avatar"],
            });

            cart[i].productName = product.name;
            cart[i].productType = product.type;
            cart[i].productTruePrice = product.truePrice;
            cart[i].productAvatar = product.avatar;
          }
          resolve({
            errCode: 0,
            cart: cart,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
let cartUpdateService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cart = await db.Cart.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (cart) {
        let product = await db.Product.findOne({
          where: { id: data.productId },
          raw: false,
          attributes: ["truePrice"],
        });
        cart.quantity = data.quantity;
        cart.totalPrice = +cart.quantity * +product.truePrice;
        await cart.save();
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No cart found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  cartAddService: cartAddService,
  cartDeleteService: cartDeleteService,
  cartGetAllService: cartGetAllService,
  cartUpdateService: cartUpdateService,
};
