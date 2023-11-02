import productService from "../services/productService";
require("dotenv").config();

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
  // let id = req.query.id;
  let products = await productService.productGetAllService();
  console.log(products);
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
    let product = await productService.getProductByIdService(req.query.id);
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Can not get product from server ...",
    });
  }
};

//test
// let productGetAllPagi = async (req, res) => {
//   const page = req.query.page;
//   const per_page = +process.env.LIMIT_TAKE;
//   if (!page) page = 0;
//   try {
//     let products = await productService.productGetAllPagiService(+page);
//     const total_pages = Math.ceil(+products?.count / per_page);
//     console.log("---------------------------------------");

//     console.log(page, per_page, total_pages, products);

//     return res.status(200).json({
//       errCode: 0,
//       errMessage: "ok",
//       products,
//       page,
//       per_page,
//       total_pages,
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "error from server ...",
//     });
//   }
// };
module.exports = {
  productCreate: productCreate,
  productGetAll: productGetAll,
  productUpdate: productUpdate,
  productDelete: productDelete,
  getProductById: getProductById,
};
