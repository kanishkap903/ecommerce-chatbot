console.log("Server file loaded");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);
console.log("Product route connected");
app.use("/api/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/chatbot", chatbotRoutes);
app.use(cors({
  origin: "*"
}));
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/test", (req, res) => {
  res.send("TEST WORKING");
});
app.get("/api/products", (req, res) => {
  res.send("DIRECT WORKING");
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});