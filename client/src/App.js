import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Chatbot from "./components/Chatbot";

function App() {
  const [cart, setCart] = useState([]);

  // 🔥 FETCH CART FROM BACKEND
  useEffect(() => {
    fetch("https://ecommerce-chatbot-7k66.onrender.com/api/cart")
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;