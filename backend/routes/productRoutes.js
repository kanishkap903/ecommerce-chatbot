<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

=======
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

>>>>>>> 57dae106bd84886e960715c542a55d69bf131529
module.exports = router;