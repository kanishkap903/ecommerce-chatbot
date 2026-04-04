const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.post("/create", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error placing order" });
  }
});

module.exports = router;