import React, { useState } from "react";
import axios from "axios";

const Checkout = ({ cart = [] }) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    if (!address) return alert("Please enter your address!");
    if (cart.length === 0) return alert("Your cart is empty!");

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/order/create", {
        userId: "123",
        items: cart,
        totalAmount,
        address,
      });
      alert("✅ Order Placed Successfully!");
      setAddress("");
    } catch (err) {
      console.error(err);
      alert("❌ Error placing order. Is your backend running?");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Checkout</h2>

      {cart.map((item) => (
        <p key={item._id}>
          {item.name} x {item.quantity} — ₹{item.price * item.quantity}
        </p>
      ))}

      <h3>Total: ₹{totalAmount.toLocaleString()}</h3>

      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      <button
        onClick={handleOrder}
        disabled={loading}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default Checkout;