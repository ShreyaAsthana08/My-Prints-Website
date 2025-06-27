"use client";

import  BestSellingProducts, { BestSellingitems } from "@/components/BestSellingItems";

import PopularProducts from "@/components/PopularProducts";
import Slider from "@/components/Slider";
import SolutionsSection from "@/components/SolutionsSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import React from "react";


export default function HomePage() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Slider />


      {/* Popular Products */}
      
    <PopularProducts />
   
      <br />

      {/* Best Selling Product */}
     
        <BestSellingProducts />
      <br />

       <br />

          {/* banner Section */}
        <section className="bg-gradient-to-r from-orange-100 to-orange-300 p-10 flex flex-col  md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Your Thoughts, our prints</h1>
          <p className="mb-6 text-lg text-gray-700">
          Shop from a wide range of custom products, including t-shirts, hoodies, mugs, and more. Our products are made with high-quality materials and are designed to last.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Shop Now</button>
        </div>
        <img src="/card.png" alt="Fashion Model" className="max-w-md    md:mt-0" />
       
      </section>

      <br />

      {/* Solutions Section */}
       
       <SolutionsSection />
      <br />

      {/* Subscription Section */}

      <SubscriptionSection />
      <br />

         <br />

          {/* banner Section */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-300 p-10 flex flex-col  md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Your Thoughts, our prints</h1>
          <p className="mb-6 text-lg text-gray-700">
          Shop from a wide range of custom products, including t-shirts, hoodies, mugs, and more. Our products are made with high-quality materials and are designed to last.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Shop Now</button>
        </div>
        <img src="/calender.png" alt="Fashion Model" className="max-w-md    md:mt-0" />
       
      </section>

      <br />  

      
      
      

    </div>
  );
}
