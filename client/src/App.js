import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Chatbot from "./components/Chatbot";
import ChatbotPopup from "./components/chatbotpopup";

function App() {
  // Cart state
  const [cart, setCart] = useState([
    { _id: "1", name: "Laptop", price: 45000, quantity: 1 },
    { _id: "2", name: "Phone", price: 15000, quantity: 1 },
    { _id: "3", name: "Shoes", price: 2000, quantity: 1 },
  ]);

  return (
    <Router>
      {/* Chatbot popup visible on all pages */}
      <ChatbotPopup />

      <Routes>
        <Route path="/" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;