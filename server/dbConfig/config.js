const mongoose = require("mongoose");
// Establishing connection with the mongodb database.
const dbConfig = {
  connect: () => {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((err) => {
        console.log(`Something went wrong:${err}`);
      });
  },
};

module.exports = dbConfig;
