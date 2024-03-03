const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creates the product schema
const ProductSchema = Schema({
  id: { type: Number, required: true, index: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Object, required: true },
});

const Products = mongoose.model("Products", ProductSchema);
module.exports = Products;

// HLD
// Category ->
