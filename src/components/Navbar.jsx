"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import LocationSelector from './LocationSelector';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  return (
    <div className="w-full shadow-sm text-gray-900 bg-white z-50 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-14 py-2 relative">
        {/* Logo & Flag */}
        <div className="flex items-center gap-4 md:gap-6 min-w-[120px]">
          <Link href="/">
            <img src="/my print logo.png" alt="Logo" className="w-24 md:w-32" />
          </Link>
          <div className="hidden sm:flex items-center space-x-2">
            <LocationSelector />
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-2xl ml-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {/* Centered SearchBar */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-full max-w-xs md:max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5 min-w-[250px] justify-end text-sm">
          <Link href="/contact">
            <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition">
              Order in Bulk
            </button>
          </Link>
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-8 px-4 relative">
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-40 flex">
          <div className="w-72 bg-white h-full shadow-lg flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <img src="/my print logo.png" alt="Logo" className="w-24" />
              <button
                className="text-2xl"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubMenu(null);
                }}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              {categories.map((category, idx) => (
                <div key={idx}>
                  <button
                    className="w-full text-left py-2 font-medium flex justify-between items-center hover:text-red-600"
                    onClick={() =>
                      setMobileSubMenu(mobileSubMenu === idx ? null : idx)
                    }
                  >
                    {category.title}
                    <span className="ml-2">{mobileSubMenu === idx ? '▲' : '▼'}</span>
                  </button>
                  {mobileSubMenu === idx && (
                    <ul className="pl-4 pb-2">
                      {category.products.map((product, pid) => (
                        <li
                          key={pid}
                          className="py-1 text-sm hover:text-red-500 cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileSubMenu(null);
                            window.location.href = `/category/${encodeURIComponent(category.title.toLowerCase().replace(/\s+/g, '-'))}`;
                          }}
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="border-t mt-2 pt-2 flex flex-col gap-2">
                <Link href="/contact" className="text-red-500 font-semibold">Order in Bulk</Link>
                <Link href="/signin-signup" className="flex items-center gap-2">
                  <FaUserCircle className="text-xl" /> Sign In
                </Link>
                <Link href="/cart" className="flex items-center gap-2">
                  <FaShoppingCart className="text-xl" /> Cart
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span>📞</span>
                  <div>
                    <p className="font-medium">Happy to help</p>
                    <p className="text-black font-semibold text-md">6292 xxxxxx</p>
                  </div>
                </div>
                <div className="mt-2">
                  <LocationSelector />
                </div>
              </div>
            </div>
          </div>
          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileSubMenu(null);
            }}
          />
        </div>
      )}
    </div>
  );
}