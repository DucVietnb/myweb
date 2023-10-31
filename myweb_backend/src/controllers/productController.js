import productService from "../services/productService";
let productCreate = async (req, res) => {
  try {
    let infor = await productService.productCreateService(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server",
    });
  }
};

let productGetAll = async (req, res) => {
  let id = req.query.id;
  //   if (!id) {
  //     return res.status(200).json({
  //       errCode: 1,
  //       errMessage: "Missing required parameters",
  //       products: [],
  //     });
  //   }
  let products = await productService.productGetAllService(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    products,
  });
};

let productUpdate = async (req, res) => {
  let data = req.body;
  if (!data.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  } else {
    let message = await productService.updateProductService(data);
    return res.status(200).json(message);
  }
};
let productDelete = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  } else {
    let message = await productService.productDeleteService(req.body.id);
    return res.status(200).json(message);
  }
};

let getProductById = async (req, res) => {
  try {
    let product = await productService.getProductByIdSẻvice(req.query.id);
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Can not get product from server ...",
    });
  }
};
module.exports = {
  productCreate: productCreate,
  productGetAll: productGetAll,
  productUpdate: productUpdate,
  productDelete: productDelete,
  getProductById: getProductById,
};
