"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// You can move this data to a separate file later
const allItems = [
  { name: "Acrylic Photo Frames", category: "photo-frames-gifts" },
  { name: "Family Puzzle", category: "photo-frames-gifts" },
  { name: "Wooden Frames", category: "photo-frames-gifts" },
  { name: "Photo Gifts", category: "photo-frames-gifts" },
  { name: "Apparel", category: "t-shirts-caps-bags" },
  { name: "Backpacks", category: "t-shirts-caps-bags" },
  { name: "Caps", category: "t-shirts-caps-bags" },
  { name: "Custom T-Shirts", category: "t-shirts-caps-bags" },
  { name: "Polo T-Shirts", category: "t-shirts-caps-bags" },
  { name: "Notebooks", category: "office-stationeries-notebooks" },
  { name: "Pens", category: "office-stationeries-notebooks" },
  { name: "Greeting Cards", category: "office-stationeries-notebooks" },
  { name: "Mugs", category: "drinkware" },
  { name: "Water Bottles", category: "drinkware" },
  { name: "Calendars", category: "all-products" },
  { name: "Clocks", category: "all-products" },
];

function normalizeToKey(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(e.target.value.length > 0);
        }}
        className="w-full p-2 border border-gray-400 rounded-lg"
        onFocus={() => {
          if (query.length > 0) setShowDropdown(true);
        }}
        autoComplete="off"
      />

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-1 z-50 bg-white shadow-lg rounded-lg max-h-72 overflow-y-auto border border-gray-200"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const mainKey = normalizeToKey(item.category);
              // const subKey = normalizeToKey(item.name); // Not needed for category page
              return (
                <Link
                  key={idx}
                  href={`/category/${mainKey}`}
                  className="block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition"
                  onClick={() => setShowDropdown(false)}
                >
                  {item.name}
                </Link>
              );
            })
          ) : (
            <p className="text-gray-500 px-4 py-2">No items match your search.</p>
          )}
        </div>
      )}
    </div>
  );
}
