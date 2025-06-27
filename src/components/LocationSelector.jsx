"use client";
import { useState } from "react";

const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "Brazil"
];

export default function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 border rounded text-sm bg-white text-red-500 hover:bg-gray-100 transition"
      >
        Deliver to: <span className="font-medium text-red-500">{selectedCountry}</span> ▼
      </button>

      {isOpen && (
        <ul className="absolute mt-2 bg-white border rounded shadow-lg w-48 z-10 max-h-60 overflow-y-auto">
          {countries.map((country) => (
            <li
              key={country}
              onClick={() => selectCountry(country)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
