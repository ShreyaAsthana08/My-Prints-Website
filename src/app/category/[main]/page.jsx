import SolutionsSection from "@/components/SolutionsSection";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products"; // <-- Import your products array

const categoryBannerImages = {
  "photo-frames-gifts": "/gift-banner.png",
  "t-shirts-caps-bags": "/clothing-bags.png",
  "banners": "/banner-banners.png",
  "office-stationeries-notebooks": "/stationeries.png",
  "drinkware": "/drinkware.png",
  "all-products": "/banner.png"
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

  // Filter products by normalized category
  const items = products.filter(
    (p) => normalizeToKey(p.category) === normalizedKey
  );
  const bannerImage = categoryBannerImages[normalizedKey] || "/banner.png";

  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      <div className="flex items-center justify-center mb-6 w-full">
        <img src={bannerImage} alt="Category Banner" />
      </div>
      <h1 className="text-3xl font-semibold text-center mb-10 mt-10 ">
        Shop  {categoryTitle}
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={`/category/${normalizedKey}/${item.slug}`}
              className="flex flex-col items-center bg-gray-200 hover:scale-105 transition-transform p-4 rounded"
            >
              <div className="w-[200px] h-[200px] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover rounded shadow w-full h-full"
                />
              </div>
              <p className="mt-4 font-medium text-center">{item.title}</p>
              <p className="text-center text-gray-600 font-semibold">₹{item.price}</p>
            </Link>
          ))}
        </div>
      )}
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
        <img src="/card.png" alt="Category Banner" className="max-w-md    md:mt-0" />
      </section>
      <br />
      <SolutionsSection />
    </div>
  );
}
