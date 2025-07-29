
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Black Blazer',
      price: 299,
      image: 'https://readdy.ai/api/search-image?query=elegant%20black%20blazer%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20model%20wearing%20sophisticated%20business%20attire%2C%20luxury%20fashion%20brand%20aesthetic%2C%20modern%20professional%20wardrobe&width=400&height=500&seq=blazer1&orientation=portrait',
      category: 'Blazers'
    },
    {
      id: 2,
      name: 'Premium White Shirt',
      price: 159,
      image: 'https://readdy.ai/api/search-image?query=crisp%20white%20dress%20shirt%20on%20white%20background%2C%20premium%20cotton%20fabric%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20elegant%20business%20attire%2C%20sophisticated%20wardrobe%20essential&width=400&height=500&seq=shirt1&orientation=portrait',
      category: 'Shirts'
    },
    {
      id: 3,
      name: 'Essential Cotton T-Shirt',
      price: 89,
      image: 'https://readdy.ai/api/search-image?query=premium%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20comfortable%20everyday%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=400&height=500&seq=tshirt1&orientation=portrait',
      category: 'T-Shirts'
    },
    {
      id: 4,
      name: 'Leather Handbag',
      price: 449,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20accessories%2C%20clean%20studio%20lighting%2C%20premium%20leather%20goods%2C%20sophisticated%20fashion%20accessory%2C%20elegant%20handbag%20design&width=400&height=500&seq=bag1&orientation=portrait',
      category: 'Accessories'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://readdy.ai/api/search-image?query=elegant%20fashion%20model%20wearing%20minimalist%20black%20and%20white%20clothing%20collection%2C%20professional%20fashion%20photography%2C%20clean%20white%20studio%20background%20with%20subtle%20shadows%2C%20modern%20minimalist%20aesthetic%2C%20luxury%20fashion%20brand%20campaign%2C%20sophisticated%20styling%2C%20high-end%20fashion%20photography%2C%20contemporary%20design%20elements&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Timeless
                <br />
                <span className="font-pacifico text-4xl md:text-6xl">Elegance</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-lg">
                Discover our curated collection of premium fashion pieces designed for the modern individual who values quality and sophistication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                    Shop Collection
                  </button>
                </Link>
                <button 
                  onClick={() => setShowNewsletter(true)}
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully selected pieces that embody our commitment to quality, style, and timeless design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black">${product.price}</span>
                    <Link href={`/product/${product.id}`}>
                      <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Every piece is crafted with meticulous attention to detail using only the finest materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-truck-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Free Shipping</h3>
              <p className="text-gray-600">
                Complimentary shipping on all orders over $200 with fast, reliable delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-refresh-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Easy Returns</h3>
              <p className="text-gray-600">
                30-day return policy with no questions asked if you're not completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://readdy.ai/api/search-image?query=luxury%20fashion%20boutique%20interior%20with%20minimalist%20design%2C%20elegant%20clothing%20displays%2C%20modern%20retail%20space%2C%20sophisticated%20fashion%20store%20environment%2C%20clean%20white%20background%20with%20black%20accents%2C%20premium%20fashion%20brand%20aesthetic%2C%20contemporary%20design%20elements&width=1920&height=600&seq=cta1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the Bucquin Experience
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive sales, and styling tips from our fashion experts.
          </p>
          <Link href="/shop">
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Explore Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-black">Stay Updated</h3>
              <button
                onClick={() => setShowNewsletter(false)}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-xl"></i>
                </div>
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get 15% off your first order plus exclusive access to new collections.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black text-sm"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                Subscribe & Save 15%
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
