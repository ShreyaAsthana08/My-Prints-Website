"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Simple Toast component
function Toast({ message, show }) {
  return (
    <div
      className={`fixed top-6 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-green-700 text-white px-6 py-3 rounded shadow-lg text-base`}
      style={{ minWidth: 220, textAlign: "center" }}
    >
      {message}
    </div>
  );
}

const BuyNowPage = () => {
  const [item, setItem] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });
  const toastTimeout = useRef();
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      const cart = JSON.parse(stored);
      if (cart.length > 0) {
        setItem(cart[cart.length - 1]); // last item in cart
      }
    }
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast({ show: false, message: "" }), 2000);
  };

  const handlePlaceOrder = () => {
    showToast("Order placed successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-700">No Item Selected</h2>
        <p className="text-gray-500 mb-6 text-center">
          Please select an item to buy.
        </p>
        <a
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <>
      <Toast message={toast.message} show={toast.show} />
      <div className="max-w-2xl mx-auto p-6 text-gray-800 bg-white rounded-lg shadow-md mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Buy Now</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
<img
  src={item.image}
  alt={item.title}
  width={180}
  height={180}
  className="object-contain rounded-lg bg-gray-100"
/>



          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold text-red-600 mb-2">₹{item.price}</p>
            <p className="text-sm text-gray-500 mb-4">
              Category: <span className="capitalize">{item?.category?.replace(/-/g, " ") || "Unknown"}</span>
            </p>
            <div className="flex flex-col gap-2">
              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  className="ml-2 border rounded px-2 py-1 w-16"
                  readOnly
                />
              </label>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold mt-4"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNowPage;
