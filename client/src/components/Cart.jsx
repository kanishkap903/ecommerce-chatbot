import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get("http://localhost:5000/api/cart?userId=123");
      setCart(res.data);
    };
    fetchCart();
  }, []);

  if (!cart || cart.length === 0) return <h2>Your cart is empty</h2>;

  const total = cart.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <p key={item.productId}>{item.name} x {item.quantity} — ₹{item.price * item.quantity}</p>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate("/checkout")}>Go to Checkout</button>
    </div>
  );
};

export default Cart;