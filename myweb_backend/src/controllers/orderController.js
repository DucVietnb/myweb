import orderService from "../services/orderService";
let cartAdd = async (req, res) => {
  try {
    let infor = await orderService.cartAddService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server",
    });
  }
};

let cartDelete = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  } else {
    // console.log("=========check req", req.body);
    let message = await orderService.cartDeleteService(req.body.id);
    return res.status(200).json(message);
  }
};
let cartGetAll = async (req, res) => {
  try {
    let cart = await orderService.cartGetAllService(req.query.userId);

    return res.status(200).json(cart);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Can not get cart from server ...",
    });
  }
};
let cartUpdate = async (req, res) => {
  let data = req.body;
  if (!data.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  } else {
    let message = await orderService.cartUpdateService(data);
    return res.status(200).json(message);
  }
};
module.exports = {
  cartAdd: cartAdd,
  cartDelete: cartDelete,
  cartGetAll: cartGetAll,
  cartUpdate: cartUpdate,
};
