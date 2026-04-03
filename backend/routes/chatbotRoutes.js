const express = require("express");
const router = express.Router();

// Dummy products (you can later connect DB)
const products = [
  { name: "shoes", price: 2000 },
  { name: "laptop", price: 50000 },
  { name: "phone", price: 15000 }
];

router.post("/", (req, res) => {
  const msg = req.body.message.toLowerCase();

  let reply = "";

  // Greeting
  if (msg.includes("hello")) {
    reply = "Hi! Ask me about products 😊";
  }

  // Product search
  else if (msg.includes("shoes") || msg.includes("laptop") || msg.includes("phone")) {
    const result = products.filter(p => msg.includes(p.name));
    reply = result.length > 0 
  ? result.map(p => `${p.name} - ₹${p.price}`).join(", ")
  : "No products found";
  }

  // Cheap products
  else if (msg.includes("cheap") || msg.includes("under")) {
    const cheap = products.filter(p => p.price < 20000);
    reply = cheap.map(p => `${p.name} - ₹${p.price}`).join(", ");
  }

  // Cart help
 else if (msg.includes("cart")) {
  reply = "Opening cart... 🛒";

  }

  // Default
  else {
    reply = "Try asking: shoes, cheap products, laptop...";
  }

  res.json({ reply });
});

module.exports = router;