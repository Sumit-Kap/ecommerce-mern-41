const controller = require("../controller/product_info_controller");

const productRoutes = {
  routes: (app) => {
    app.get("/api/v1/product-info", controller.fetchProducts);
  },
};
module.exports = productRoutes;
