import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    price: 999,
    category: "Men",
    image: "/images/shirt1.jpg",
  },
  {
    id: 2,
    name: "Women's Kurti",
    price: 1299,
    category: "Women",
    image: "/images/kurti1.jpg",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1999,
    category: "Men",
    image: "/images/jacket1.jpg",
  },
  {
    id: 4,
    name: "Cotton Saree",
    price: 1499,
    category: "Women",
    image: "/images/saree1.jpg",
  },
];

function Products() {
  const navigate = useNavigate();

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = currentCart.find((item) => item.id === product.id);

    const updatedCart = existingItem
      ? currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...currentCart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h2>Featured Products</h2>
      <p>Click “Add to Cart” and you will be redirected to your cart automatically.</p>

      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {products.map((product) => (
          <article
            key={product.id}
            style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "16px", background: "#fff" }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ marginBottom: "6px" }}>{product.name}</h3>
            <p style={{ color: "#666", margin: "4px 0" }}>Category: {product.category}</p>
            <p style={{ fontWeight: "700", margin: "8px 0" }}>₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 14px", cursor: "pointer" }}
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
