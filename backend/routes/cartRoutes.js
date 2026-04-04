const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Get cart items
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.json([]);
    res.json(cart.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;