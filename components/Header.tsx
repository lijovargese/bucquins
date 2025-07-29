'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src="https://static.readdy.ai/image/cb44676a403568365f384c6b35f57d6e/099ae3120353201d13e72f4ac1fd26ec.png"
              alt="Bucquin"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-black transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/shop" className="text-gray-900 hover:text-black transition-colors cursor-pointer">
              Shop
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-black transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-black transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/account" className="text-gray-900 hover:text-black transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-user-line text-xl"></i>
              </div>
            </Link>
            <Link href="/cart" className="text-gray-900 hover:text-black transition-colors relative cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-shopping-bag-line text-xl"></i>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <nav className="py-4 space-y-4">
              <Link href="/" className="block text-gray-900 hover:text-black transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/shop" className="block text-gray-900 hover:text-black transition-colors cursor-pointer">
                Shop
              </Link>
              <Link href="/about" className="block text-gray-900 hover:text-black transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="block text-gray-900 hover:text-black transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}