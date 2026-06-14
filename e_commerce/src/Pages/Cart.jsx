import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products">Browse products</Link>
        </div>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "12px", marginBottom: "10px" }}
              >
                <strong>{item.name}</strong> — ₹{item.price} × {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
          <Link to="/products">Continue shopping</Link>
        </>
      )}
    </div>
  );
}

export default Cart;