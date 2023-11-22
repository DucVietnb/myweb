import db from "../models/index";
const quickSort = (array, prop) => {
  if (array.length <= 1) return array;
  const pivot = array[0][prop];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i][prop] > pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left, prop), array[0], ...quickSort(right, prop)];
};

const getLimit = (obj, limit) => {
  if (!limit) limit = 5;
  let obj_limit = [];

  for (let i = 0; i < limit; i++) {
    obj_limit.push(obj[i]);
  }
  return obj_limit;
};
// start
//customer
let getTopCusMoneyService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let customer = await db.user.findAll({
        where: { roleId: "1" },
        attributes: {
          exclude: ["password"],
        },
      });
      let customer_sort = {};
      if (!customer) {
        customer_sort = {};
      } else {
        let check = [];
        customer.map((item) => {
          item.totalMoney = +item.totalMoney;
          check.push(item);
        });
        customer_sort = getLimit(quickSort(check, "totalMoney"));
      }

      resolve({
        errCode: 0,
        customer: customer_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getTopCusOrderService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let customer = await db.user.findAll({
        where: { roleId: "1" },
        attributes: {
          exclude: ["password"],
        },
      });
      let customer_sort = {};
      if (!customer) {
        customer_sort = {};
      } else {
        let check = [];
        customer.map((item) => {
          item.totalOrder = +item.totalOrder;
          check.push(item);
        });
        customer_sort = getLimit(quickSort(check, "totalOrder"));
      }

      resolve({
        errCode: 0,
        customer: customer_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};

//order
let getTopOrderMoneyService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findAll({
        where: { status: "Đã hoàn thành" },
      });
      let order_sort = {};
      if (!order) {
        order_sort = {};
      } else {
        let check = [];
        order.map((item) => {
          item.totalPrice = +item.totalPrice;
          check.push(item);
        });
        order_sort = getLimit(quickSort(check, "totalPrice"));
      }

      resolve({
        errCode: 0,
        order: order_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getTopOrderQuantityService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findAll({
        where: { status: "Đã hoàn thành" },
      });
      let order_sort = {};
      if (!order) {
        order_sort = {};
      } else {
        let check = [];
        order.map((item) => {
          item.totalQuantity = +item.totalQuantity;
          check.push(item);
        });
        order_sort = getLimit(quickSort(check, "totalQuantity"));
      }

      resolve({
        errCode: 0,
        order: order_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};

//product
let getTopProductSoldService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll({
        order: [["countSold", "DESC"]],
        attributes: [
          "id",
          "name",
          "type",
          "brand",
          "truePrice",
          "countInStock",
          "countSold",
        ],
      });
      let product_sort = {};
      if (!products) {
        product_sort = {};
      } else {
        product_sort = getLimit(products);
      }
      resolve({
        errCode: 0,
        products: product_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getTopProductStockService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll({
        order: [["countInStock", "DESC"]],
        attributes: [
          "id",
          "name",
          "type",
          "brand",
          "truePrice",
          "countInStock",
          "countSold",
        ],
      });
      let product_sort = {};
      if (!products) {
        product_sort = {};
      } else {
        product_sort = getLimit(products, 10);
      }
      resolve({
        errCode: 0,
        products: product_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getTopProductSoldFewService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll({
        order: [["countSold", "ASC"]],
        attributes: [
          "id",
          "name",
          "type",
          "brand",
          "truePrice",
          "countInStock",
          "countSold",
        ],
      });
      let product_sort = {};
      if (!products) {
        product_sort = {};
      } else {
        product_sort = getLimit(products);
      }
      resolve({
        errCode: 0,
        products: product_sort,
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getTopCusMoneyService: getTopCusMoneyService,
  getTopCusOrderService: getTopCusOrderService,
  getTopOrderMoneyService: getTopOrderMoneyService,
  getTopOrderQuantityService: getTopOrderQuantityService,
  getTopProductSoldService: getTopProductSoldService,
  getTopProductStockService: getTopProductStockService,
  getTopProductSoldFewService: getTopProductSoldFewService,
};
