<<<<<<< HEAD
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  address: String,
  status: {
    type: String,
    default: "Placed"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

=======
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  totalAmount: Number,
  address: String,
  status: {
    type: String,
    default: "Placed"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

>>>>>>> 57dae106bd84886e960715c542a55d69bf131529
module.exports = mongoose.model("Order", orderSchema);