const devHelperController = require("../controller/dev_helper_controller");

const devHelperRoutes = {
  devHelperRoutes: (app) => {
    app.post(
      "/api/v1/dev-helper/create-products",
      devHelperController.insertProducts
    );
  },
};
module.exports = devHelperRoutes;
