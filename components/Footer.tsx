'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="https://static.readdy.ai/image/cb44676a403568365f384c6b35f57d6e/099ae3120353201d13e72f4ac1fd26ec.png"
              alt="Bucquin"
              className="h-8 w-auto filter invert"
            />
            <p className="text-gray-300 text-sm">
              Premium fashion clothing brand delivering timeless style and exceptional quality from London.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-facebook-line text-xl"></i>
                </div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-twitter-line text-xl"></i>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/shop?category=men" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/shop?category=women" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-white text-sm"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2024 Bucquin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}