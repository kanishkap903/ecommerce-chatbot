console.log("Server file loaded");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://admin:kanishka123@cluster0.rwaipkt.mongodb.net/ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.log("MongoDB ERROR:", err);
  });

// ✅ ROUTES
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/chat", chatbotRoutes);

// ✅ TEST ROUTES
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/test", (req, res) => {
  res.send("TEST WORKING");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});