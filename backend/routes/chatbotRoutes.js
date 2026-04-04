const express = require("express");
const router = express.Router();

// Simple logic-based chatbot
router.post("/", (req, res) => {
  const { message } = req.body;
  let reply = "I didn't understand that.";

  const msg = message.toLowerCase();
  if (msg.includes("hi") || msg.includes("hello")) reply = "Hello! How can I help you?";
  else if (msg.includes("product")) reply = "We have laptops, phones, and shoes. Check the products page!";
  else if (msg.includes("price")) reply = "Our prices range from ₹2000 to ₹45000.";
  else if (msg.includes("cart")) reply = "You can view your cart by clicking on the cart icon.";

  res.json({ reply });
});

module.exports = router;