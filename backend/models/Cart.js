<<<<<<< HEAD
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: String,
  quantity: Number
});

=======
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: String,
  quantity: Number
});

>>>>>>> 57dae106bd84886e960715c542a55d69bf131529
module.exports = mongoose.model("Cart", cartSchema);