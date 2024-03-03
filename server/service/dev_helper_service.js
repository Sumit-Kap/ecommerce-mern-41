const Products = require("../models/Products");

const devHelperService = {
  insertProducts: (reqBody) => {
    const { id, title, category, description, image, rating, price } = reqBody;
    const products = new Products({
      id: id,
      image: image,
      title: title,
      category: category,
      description: description,
      rating: rating,
      price: price,
    });
    return products.save();
  },
};

module.exports = devHelperService;
