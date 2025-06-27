"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (slug) => {
    const updatedCart = cart.filter(item => item.slug !== slug);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  if (cart.length === 0) {
    return (
      <div className="flex text-gray-800 flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4">
        <FaShoppingCart className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-gray-700">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6 text-center">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Your Cart</h2>
      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={`${item.slug || item.title || 'item'}-${index}`}
            className="flex flex-col text-gray-800 sm:flex-row items-center gap-6 bg-white rounded shadow p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="object-contain rounded bg-gray-100"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100')}
            />
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mb-2">{item.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-red-600 font-bold text-xl">₹{item.price}</span>
                <span className="text-gray-400 line-through">
                  ₹{Math.round(item.price * 1.2)}
                </span>
                <span className="text-green-600 font-semibold text-sm">20% OFF</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-600">Quantity: {item.quantity || 1}</span>
                <button
                  className="ml-4 text-red-500 hover:underline text-sm"
                  onClick={() => handleRemove(item.slug)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-300">Total: ₹{total}</span>
        <Link
          href="/buynow"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-semibold transition"
        >
          Proceed to Buy
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
