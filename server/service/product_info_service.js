const Products = require("../models/Products");

const product_info_service = {
  fetchProduct: () => {
    return Products.find({});
  },
};

module.exports = product_info_service;
