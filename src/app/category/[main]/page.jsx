import SolutionsSection from "@/components/SolutionsSection";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const categoryBannerImages = {
  "photo-frames-gifts": "/gift-banner.png",
  "t-shirts-caps-bags": "/clothing-bags.png",
  "banners": "/banner-banners.png",
  "office-stationeries-notebooks": "/stationeries.png",
  "drinkware": "/drinkware.png",
  "all-products": "/banner.png",
};

const normalizeToKey = (str) =>
  decodeURIComponent(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function MainCategoryPage({ params }) {
  const { main } = params;
  const normalizedKey = normalizeToKey(main);

  const categoryTitle = decodeURIComponent(main)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const items = products.filter(
    (p) => normalizeToKey(p.category) === normalizedKey
  );
  const bannerImage = categoryBannerImages[normalizedKey] || "/banner.png";

  return (
    <div className="px-4 md:px-8 py-6 bg-gray-50 text-gray-800">
      {/* Banner Image */}
      <div className="flex items-center justify-center mb-6 w-full">
        <img
          src={bannerImage}
          alt="Category Banner"
          className="w-full max-w-screen-xl object-contain rounded"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10 mt-10">
        Shop {categoryTitle}
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={`/category/${normalizedKey}/${item.slug}`}
              className="flex flex-col items-center bg-gray-200 hover:scale-105 transition-transform p-4 rounded"
            >
              <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover rounded shadow w-full h-full"
                />
              </div>
              <p className="mt-4 font-medium text-center text-sm sm:text-base">
                {item.title}
              </p>
              <p className="text-center text-gray-600 font-semibold text-sm sm:text-base">
                ₹{item.price}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Banner CTA Section */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-300 px-6 py-10 mt-16 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Your Thoughts, Our Prints
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-700">
            Shop from a wide range of custom products, including t-shirts,
            hoodies, mugs, and more. Our products are made with high-quality
            materials and are designed to last.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Shop Now
          </button>
        </div>
        <img
          src="/card.png"
          alt="Category Banner"
          className="w-full max-w-xs md:max-w-md object-contain"
        />
      </section>

      <div className="mt-20">
        <SolutionsSection />
      </div>
    </div>
  );
}
