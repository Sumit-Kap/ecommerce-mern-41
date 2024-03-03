require("dotenv").config(); // loading up environment variables.
const express = require("express");
const cors = require("cors"); // CORS A.com -> B.Com
const devHelperRoutes = require("./routes/dev_helper_routes");
const app = express();
const dbConfig = require("./dbConfig/config");
const productRoutes = require("./routes/product_routes");
app.use(cors()); // we are open to all
app.use(express.json()); // receiving the JSON data in POST request -> body parser
dbConfig.connect(); // calling the connect function of database.
devHelperRoutes.devHelperRoutes(app);
productRoutes.routes(app);
// AWS - API gateway -> Load balancer - S1, S2, S3
app.get("/health", (req, res) => {
  res.send("<h1>It works</h1>");
});

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log(`server running on PORT:${process.env.PORT}`);
});
