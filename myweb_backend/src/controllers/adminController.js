import adminService from "../services/adminService";
let getOrderChecking = async (req, res) => {
  try {
    let order = await adminService.getOrderCheckingService();
    return res.status(200).json(order);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Can not get order from server ...",
    });
  }
};
module.exports = { getOrderChecking: getOrderChecking };
