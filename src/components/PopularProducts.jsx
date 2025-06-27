'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'aos/dist/aos.css'; // Import AOS styles if using AOS for animations


export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchItems();
  }, []);

  return (
    <section className="py-12 bg-neutral-100">
      <h2 className="text-2xl font-semibold text-center mb-10">Most Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4 md:px-10">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/category/product/${product.id}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 line-through">₹{product.price}</p>
              <p className="text-red-600 font-semibold">
                ₹{(product.price * (1 - product.discount / 100)).toFixed(0)} ({product.discount}% OFF)
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

