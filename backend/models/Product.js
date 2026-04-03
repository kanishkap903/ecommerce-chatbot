<<<<<<< HEAD
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String
});

=======
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String
});

>>>>>>> 57dae106bd84886e960715c542a55d69bf131529
module.exports = mongoose.model("Product", productSchema);