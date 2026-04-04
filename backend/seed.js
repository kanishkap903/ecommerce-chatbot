const mongoose = require("mongoose");
const Product = require("./models/Product");
const Cart = require("./models/Cart");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err));

const seed = async () => {
  await Product.deleteMany({});
  await Cart.deleteMany({});

  const products = await Product.insertMany([
    { name: "Laptop", price: 45000, category: "Electronics", description: "High performance", image: "https://via.placeholder.com/150" },
    { name: "Phone", price: 15000, category: "Electronics", description: "Smartphone", image: "https://via.placeholder.com/150" },
    { name: "Shoes", price: 2000, category: "Fashion", description: "Comfortable shoes", image: "https://via.placeholder.com/150" }
  ]);

  await Cart.create({
    userId: "123",
    items: products.map(p => ({
      productId: p._id,
      name: p.name,
      price: p.price,
      quantity: 1
    }))
  });

  console.log("Database seeded!");
  mongoose.disconnect();
};

seed();