"use client";

import BestSellingProducts from "@/components/BestSellingItems";
import PopularProducts from "@/components/PopularProducts";
import Slider from "@/components/Slider";
import SolutionsSection from "@/components/SolutionsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Hero Slider */}
      <Slider />

      {/* Popular Products */}
      <section className="px-4 md:px-8 lg:px-16 py-6">
        <PopularProducts />
      </section>

      {/* Best Selling Products */}
      <section className="px-4 md:px-8 lg:px-16 py-6">
        <BestSellingProducts />
      </section>

      {/* Banner Section 1 */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-300 px-4 md:px-12 py-10 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Thoughts, Our Prints</h1>
          <p className="mb-6 text-base md:text-lg text-gray-700">
            Shop from a wide range of custom products, including t-shirts, hoodies, mugs, and more. Our products are made with high-quality materials and are designed to last.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/card.png" alt="Product Display" className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="px-4 md:px-8 lg:px-16 py-6">
        <SolutionsSection />
      </section>

      {/* Subscription Section */}
      <section className="px-4 md:px-8 lg:px-16 py-6">
        <SubscriptionSection />
      </section>

      {/* Banner Section 2 */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-300 px-4 md:px-12 py-10 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Thoughts, Our Prints</h1>
          <p className="mb-6 text-base md:text-lg text-gray-700">
            Shop from a wide range of custom products, including t-shirts, hoodies, mugs, and more. Our products are made with high-quality materials and are designed to last.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/calender.png" alt="Calendar Display" className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>
    </div>
  );
}
