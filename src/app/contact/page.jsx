"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-red-600">Bulk Order Contact</h1>
        <p className="mb-6 text-gray-700 text-center">
          Want to place a bulk order? Fill out the form below and our team will contact you soon!
        </p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold text-lg">
            Thank you! We have received your request and will get in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="tel"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message / Requirements</label>
              <textarea
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Tell us about your bulk order requirements"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 font-semibold"
            >
              Submit Bulk Order Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}