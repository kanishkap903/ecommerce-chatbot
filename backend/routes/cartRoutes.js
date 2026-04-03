const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ADD to cart
router.post("/", async (req, res) => {
  const item = new Cart(req.body);
  await item.save();
  res.json(item);
});

// GET cart items
router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});

module.exports = router;