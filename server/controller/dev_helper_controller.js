const devHelperService = require("../service/dev_helper_service");

const devHelperController = {
  insertProducts: (req, res) => {
    console.log("print", req.body);
    devHelperService
      .insertProducts(req.body)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = devHelperController;
