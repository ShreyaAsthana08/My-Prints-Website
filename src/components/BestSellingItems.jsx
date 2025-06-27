import React from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function BestSellingProducts() {
  // Show more best selling products (e.g., top 6)
  return (
    <section 
    
    className="py-10 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.slice(0, 8).map((product) => (
          <Link
            key={product.slug}
            href={`/category/${product.category}/${product.slug}`}
            data-aos="flip-left"
            className="block bg-white rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-500">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
