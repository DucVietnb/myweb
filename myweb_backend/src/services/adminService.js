import db from "../models/index";
let getOrderCheckingService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = await db.Order.findOne({
        where: { status: "Chờ xác nhận" },
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
module.exports = { getOrderCheckingService: getOrderCheckingService };
