const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="bg-gray-900 text-gray-300 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-10 gap-10">
          {/* Logo & About */}
          <div className="mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <img src="/printo.png" alt="Printo Logo" className="w-32 h-auto mb-4" />
            <p className="max-w-xs text-gray-400 text-center lg:text-left">
              Crafting custom print solutions that bring your brand to life — from unboxing to marketing.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#"><i className="fab fa-facebook-f text-xl hover:text-white"></i></a>
              <a href="#"><i className="fab fa-instagram text-xl hover:text-white"></i></a>
              <a href="#"><i className="fab fa-linkedin-in text-xl hover:text-white"></i></a>
              <a href="#"><i className="fab fa-youtube text-xl hover:text-white"></i></a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            <div>
              <h3 className="text-white font-semibold mb-3">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Packaging</a></li>
                <li><a href="#" className="hover:underline">Drinkware</a></li>
                <li><a href="#" className="hover:underline">Stationery</a></li>
                <li><a href="#" className="hover:underline">Apparel</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Custom Branding</a></li>
                <li><a href="#" className="hover:underline">Design Assistance</a></li>
                <li><a href="#" className="hover:underline">Bulk Orders</a></li>
                <li><a href="#" className="hover:underline">Order Tracking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 My Prints. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;