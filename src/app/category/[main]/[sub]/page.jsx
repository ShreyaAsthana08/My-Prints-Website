"use client";
import React, { use, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";

// Simple Toast component
function Toast({ message, show }) {
  return (
    <div
      className={`fixed top-6 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-gray-900 text-white px-6 py-5 rounded-lg shadow-lg text-base`}
      style={{ minWidth: 220, textAlign: "center" }}
    >
      {message}
    </div>
  );
}

// Zoom Modal component
function ZoomModal({ image, alt, open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={image}
          alt={alt}
          width={700}
          height={700}
          className="rounded-lg shadow-lg object-contain max-h-[80vh] max-w-[90vw] bg-white"
        />
        <button
          className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full px-3 py-1 text-lg"
          onClick={onClose}
          aria-label="Close zoom"
        >
          ×
        </button>
      </div>
    </div>
  );
}

// Magnifier component
function ImageMagnifier({ src, alt, width, height, zoom = 2 }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPos({ x, y });
  };

  return (
    <div
      className="relative w-full flex justify-center"
      style={{ width, height }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain rounded-lg max-h-[400px] w-auto"
        style={{ pointerEvents: "auto" }}
      />
      {show && (
        <div
          className="absolute pointer-events-none border-2 border-orange-400 rounded-full"
          style={{
            left: pos.x - 60,
            top: pos.y - 60,
            width: 120,
            height: 120,
            overflow: "hidden",
            boxShadow: "0 0 8px 2px #0002",
            zIndex: 10,
            background: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `-${pos.x * zoom - 60}px -${pos.y * zoom - 60}px`,
          }}
        />
      )}
    </div>
  );
}

export default function ProductPage({ params }) {
  const { main, sub } = typeof params.then === "function" ? use(params) : params;
  const router = useRouter();

  const product = products.find(
    (p) => p.slug === sub && p.category === main
  );

  // Toast state
  const [toast, setToast] = React.useState({ show: false, message: "" });
  const toastTimeout = useRef();

  // Zoom state
  const [zoomOpen, setZoomOpen] = useState(false);

  const showToast = (message) => {
    setToast({ show: true, message });
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast({ show: false, message: "" }), 2000);
  };

  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) cart = JSON.parse(stored);
      const exists = cart.find(
        (item) => item.slug === product.slug && item.category === product.category
      );
      if (!exists) {
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        showToast("Added to cart!");
      } else {
        showToast("Item already in cart!");
      }
    }
  };

  const handleBuyNow = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) cart = JSON.parse(stored);
      const exists = cart.find(
        (item) => item.slug === product.slug && item.category === product.category
      );
      if (!exists) {
        showToast("Please add the item to the cart first!");
        return;
      }
      router.push("/buynow");
    }
  };

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Toast message={toast.message} show={toast.show} />
      <ZoomModal
        image={product.image}
        alt={product.title}
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
      />
      <div className="max-w-6xl mx-auto p-4 md:p-10 text-gray-800 bg-white rounded-lg shadow-lg mt-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image Section with Magnifier */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 rounded-lg p-4 w-full flex justify-center relative group">
              <ImageMagnifier
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                zoom={2.2}
              />
              <span className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Hover to Zoom
              </span>
            </div>
            <div className="flex gap-2 mt-4">
              <Image
                src={product.image}
                alt="Thumbnail"
                width={60}
                height={60}
                className="rounded border border-gray-200 object-contain bg-white"
              />
              <Image
                src={product.image}
                alt="Thumbnail"
                width={60}
                height={60}
                className="rounded border border-gray-200 object-contain bg-white"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">{product.title}</h1>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="font-medium text-gray-700">{product.rating || 4.5}</span>
                <span className="text-gray-400 text-sm">(120 reviews)</span>
              </div>
              <p className="text-lg text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-end gap-4 mb-6">
                <span className="text-3xl font-bold text-red-600">₹{product.price}</span>
                <span className="text-gray-400 line-through text-lg">₹{Math.round(product.price * 1.2)}</span>
                <span className="text-green-600 font-semibold text-base">20% OFF</span>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-1">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  className="w-20 border border-gray-300 rounded p-2"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-pink-600 text-white px-8 py-3 rounded font-semibold hover:bg-pink-500 transition"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{product.stock ? "✅ In Stock" : "❌ Out of Stock"}</p>
                <p>🚚 Free delivery in 3-5 working days</p>
                <p>🔄 7-day easy returns</p>
              </div>
            </div>
            <div className="mt-8 border-t pt-4">
              <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
              <div className="text-sm text-gray-500 italic">
                ★★★★☆ {product.rating || 4.5}/5 (120 reviews)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
