import React, { useState } from "react";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-md bg-white">
        <div className="md:w-1/2 w-full">
          <img
            src="/business-card.webp"
            alt="Business Cards"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-2">It's good to be on the list.</h2>
          <p className="mb-4 text-lg">Get 15% off* your first order when you sign up for our emails</p>
          <input
            type="email"
            placeholder="Subscription email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-600 mb-4">
            Yes, I'd like to receive special offer emails from <strong>My Prints</strong>, as well as news about products,
            services and my designs in progress. Read our{" "}
            <a href="#" className="underline text-blue-600">
              Privacy and Cookie policy
            </a>.
          </p>
          <button
            className={`w-full bg-gray-400 text-white font-semibold py-2 rounded-md ${
              email ? "hover:bg-gray-600 cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!email}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
