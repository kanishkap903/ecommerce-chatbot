import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <p key={item._id}>
          {item.name} x {item.quantity}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={() => navigate("/checkout")}>
        Go to Checkout
      </button>
    </div>
  );
};

export default Cart;