import { or } from "sequelize";
import db from "../models/index";
let getOrderCheckingService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findAll({
        where: { status: "Chờ xác nhận" },
        order: [["createdAt", "DESC"]],
      });
      if (!order) order = {};
      resolve({
        errCode: 0,
        order: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getOrderStatusService = (status) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!status) {
        resolve({
          errCode: -1,
          errMessage: "Can not get order from server ...",
        });
      } else {
        let order = await db.Order.findAll({
          where: { status: status },
          order: [["createdAt", "DESC"]],
        });

        if (!order) order = {};
        resolve({
          errCode: 0,
          order: order,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let orderDeleteService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findOne({
        where: { id: id },
      });
      if (order) {
        db.Order.destroy({
          where: { id: id },
        });
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No order found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let orderUpdateService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (order) {
        order.cusName = data.cusName;
        order.cusPhoneNumber = data.cusPhoneNumber;
        order.paymentMethod = data.paymentMethod;
        order.isBill = data.isBill;
        order.shipAddress = data.shipAddress;
        await order.save();
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No order found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let orderUpdateStatusService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findOne({
        where: { id: data.id },
        raw: false,
      });

      if (order) {
        order.status = data.status;
        await order.save();
        resolve({
          errCode: 0,
          errMessage: "Success",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "No order found!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getOrderCheckingService: getOrderCheckingService,
  orderDeleteService: orderDeleteService,
  orderUpdateService: orderUpdateService,
  orderUpdateStatusService: orderUpdateStatusService,
  getOrderStatusService: getOrderStatusService,
};
