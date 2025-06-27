"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import LocationSelector from './LocationSelector';
import { products } from "@/lib/products";

import SearchBar from "@/components/SearchBar";

const categories = [
  {
    title: 'All Products',
    products: [
      { name: 'Calendars', image: '/calender.png' },
      { name: 'Acrylic Clocks', image: '/clock.png' },
      { name: 'Medals', image: '/medal.png' },
      { name: 'Baggy Hats', image: '/baggy-hats.png' },
      { name: 'Bags', image: '/bag.png' },
      { name: 'Black Coffee Mugs', image: '/mug.png' },
       { name: 'Greeting Cards', image: '/card.png' },
       { name: 'tumbler', image: '/sipper.png' },
       
      { name: 'Customize-keychain', image: '/key.png' }
    ]
  },
  {
    title: 'Office Stationeries & Notebooks',
    products: [
      { name: 'Custom Posters', image: '/posters.png' },
      { name: 'Diary Notebook', image: '/dairy.png' },
      { name: 'Pens', image: '/penn.png' },
      { name: 'Greeting Cards', image: '/card.png' }
    ]
  },
  {
    title: 'Drinkware',
    products: [
      { name: 'Mugs', image: '/mug.png' },
      { name: 'Water Bottles', image: '/bottle.png' },
      { name: 'stainless-steel Bottles', image: '/bottle2.png' },
      { name: 'tumbler', image: '/sipper.png' }
    ]
  },
  {
    title: 'T-Shirts, Caps & Bags',
    products: [
      { name: 'Custom T-Shirts', image: '/tshirt.png' },
      { name: 'Polo T-Shirts', image: '/polo.png' },
      { name: 'Caps', image: '/cap.png' },
      { name: 'printed T-shirt', image: '/printed-tshirt.png' },
       { name: 'trendy-bag', image: '/bagg.png' },
        { name: 'bags', image: '/bag.png' }
    ]
  },
  {
    title: 'Photo Frames & Gifts',
    products: [
      { name: 'Wooden Frames', image: '/wooden.png' },
      { name: 'Photo Gifts', image: '/frame.png' },
      { name: 'Family Photo Puzzle', image: '/puzzel.png' },
      { name: 'Customize-keychain', image: '/key.png' }
    ]
  }
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProductImage, setHoveredProductImage] = useState(null);

  return (
    <div
     
      
      className="w-full shadow-sm  text-gray-900 bg-white z-50 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-14  relative">
        {/* Logo & Flag */}
        <div className="flex items-center gap-6 min-w-[200px]">
          <Link href="/">
            <img src="/my print logo.png" alt="Logo" className="w-32" />
          </Link>
          {/* <img src="/flag-india.png" alt="India" className="h-5" /> */}

               <div className="flex items-center space-x-2">
  {/* Other Nav Items */}
  <LocationSelector />
</div>

        </div>

   

        {/* Centered SearchBar */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 min-w-[250px] justify-end text-sm">
         <Link href="/contact"><button className="border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
            Order in Bulk
          </button></Link> 

          <div className="flex items-center gap-1">
            <span>📞</span>
            <div>
              <p className="font-medium">Happy to help</p>
              <p className="text-black font-semibold text-md">6292 xxxxxx</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-lg">
            <Link href="/signin-signup">
              <FaUserCircle className="hover:text-red-500 cursor-pointer text-3xl" />
            </Link>
            <Link href="/cart">
              <FaShoppingCart className="hover:text-red-500 cursor-pointer text-3xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 px-4 relative">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="group relative"
            onMouseEnter={() => {
              setActiveCategory(idx);
              setHoveredProductImage(category.products[0]?.image || null);
            }}
            onMouseLeave={() => {
              setActiveCategory(null);
              setHoveredProductImage(null);
            }}
          >
            <Link
              href={`/category/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, '-'))}`}
              className="text-sm py-3 font-medium transition duration-200 hover:text-red-600"
            >
              {category.title}
            </Link>

            {activeCategory === idx && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[700px] max-w-3xl w-auto overflow-x-clip flex gap-4 bg-gray-100 shadow-lg py-6 px-4 z-50">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                  {category.products.map((product, pid) => (
                    <li
                      key={pid}
                      className="hover:text-red-500 cursor-pointer"
                      onMouseEnter={() => setHoveredProductImage(product.image)}
                      // Clicking an item navigates to the category page
                      onClick={() =>
                        window.location.href = `/category/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, '-'))}`
                      }
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>

                <div className="hidden md:block w-64">
                  <img
                    src={hoveredProductImage}
                    alt="Preview"
                    className="w-full h-auto object-cover rounded shadow"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
       
      </nav>

    </div>
  );
}
