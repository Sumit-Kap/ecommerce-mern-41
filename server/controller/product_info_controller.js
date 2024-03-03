const productInfoService = require("../service/product_info_service");

const product_info_controller = {
  fetchProducts: (req, res) => {
    productInfoService
      .fetchProduct()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = product_info_controller;
