const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const chatbotRoute = require("./routes/chatbotRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON body

const orderRoute = require("./routes/orderRoutes");
app.use("/api/order", orderRoute);

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/chat", chatbotRoute);

app.listen(5000, () => console.log("Server running on port 5000"));