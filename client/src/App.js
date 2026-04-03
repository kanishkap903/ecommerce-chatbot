import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Chatbot from "./components/Chatbot";

function App() {
  const [cart, setCart] = useState([
    {
      _id: "1",
      name: "Shoes",
      price: 2000,
      quantity: 2
    }
  ]);

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