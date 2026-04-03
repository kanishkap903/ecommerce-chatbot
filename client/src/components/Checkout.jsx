import React, { useState } from "react";
import axios from "axios";

const Checkout = ({ cart }) => {
  const [address, setAddress] = useState("");

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    try {
      await axios.post(
        "https://ecommerce-chatbot-7k66.onrender.com/api/order/create",
        {
          userId: "123",
          items: cart,
          totalAmount,
          address,
        }
      );

      alert("Order Placed Successfully!");
    } catch (err) {
      console.log(err);
      alert("Error placing order");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      {cart.map((item) => (
        <p key={item._id}>
          {item.name} x {item.quantity}
        </p>
      ))}

      <h3>Total: ₹{totalAmount}</h3>

      <input
        type="text"
        placeholder="Enter address"
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;