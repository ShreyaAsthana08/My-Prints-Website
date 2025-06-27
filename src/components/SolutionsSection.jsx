import React from "react";

const productSections = [
  {
    title: "Packaging Solutions",
    description:
      "Elevate your brand presentation with custom packaging—from eco-friendly boxes to branded labels and mailers.",
    buttonText: "Explore Packaging",
    image: "/Packaging.webp",
  },
  {
    title: "Marketing Materials",
    description:
      "Make a lasting impression with flyers, brochures, visiting cards and professional stationery tailored to your brand's voice .",
    buttonText: "Browse Marketing Materials",
    image: "/marketing.webp",
  },
  {
    title: "Premium Embellished Products",
    description:
      "Add a touch of luxury with gold foils, embossed textures, and finishes that stand out. Perfect for high-end branding.",
    buttonText: "Shop Premium Products",
    image: "/premium.webp",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Explore Our Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {productSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 object-cover p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                  {section.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
