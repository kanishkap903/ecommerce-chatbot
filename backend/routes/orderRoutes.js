const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create Order
router.post("/create", async (req, res) => {
  try {
    const { userId, items, totalAmount, address } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      address
    });

    await newOrder.save();

    res.json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;