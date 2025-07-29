
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const products = {
    '1': {
      id: 1,
      name: 'Classic Black Blazer',
      price: 299,
      originalPrice: 399,
      description: 'A timeless black blazer crafted from premium wool blend fabric. Perfect for both professional and casual settings, this blazer features a tailored fit with structured shoulders and a modern silhouette.',
      images: [
        'https://readdy.ai/api/search-image?query=elegant%20black%20blazer%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20model%20wearing%20sophisticated%20business%20attire%2C%20luxury%20fashion%20brand%20aesthetic%2C%20modern%20professional%20wardrobe&width=600&height=750&seq=blazer1&orientation=portrait',
        'https://readdy.ai/api/search-image?query=black%20blazer%20detail%20shot%20showing%20fabric%20texture%20and%20buttons%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20close-up%20garment%20details&width=600&height=750&seq=blazer2&orientation=portrait',
        'https://readdy.ai/api/search-image?query=black%20blazer%20back%20view%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20modern%20professional%20wardrobe&width=600&height=750&seq=blazer3&orientation=portrait'
      ],
      colors: ['Black'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'Blazers',
      material: '70% Wool, 30% Polyester',
      care: 'Dry clean only',
      features: ['Tailored fit', 'Structured shoulders', 'Two-button closure', 'Interior pockets'],
      isNew: false,
      isSale: true
    },
    '2': {
      id: 2,
      name: 'Premium White Shirt',
      price: 159,
      description: 'A crisp white dress shirt made from premium cotton with a classic collar and button-down style. Essential for any wardrobe, this shirt offers comfort and sophistication.',
      images: [
        'https://readdy.ai/api/search-image?query=crisp%20white%20dress%20shirt%20on%20white%20background%2C%20premium%20cotton%20fabric%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20elegant%20business%20attire%2C%20sophisticated%20wardrobe%20essential&width=600&height=750&seq=shirt1&orientation=portrait',
        'https://readdy.ai/api/search-image?query=white%20shirt%20collar%20and%20button%20detail%2C%20premium%20cotton%20fabric%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20close-up%20garment%20details&width=600&height=750&seq=shirt2&orientation=portrait'
      ],
      colors: ['White'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      category: 'Shirts',
      material: '100% Premium Cotton',
      care: 'Machine wash cold, hang dry',
      features: ['Classic collar', 'Button-down style', 'Wrinkle-resistant', 'Tailored fit'],
      isNew: true,
      isSale: false
    },
    '3': {
      id: 3,
      name: 'Essential Cotton T-Shirt',
      price: 89,
      description: 'A premium cotton t-shirt designed for everyday comfort and style. Made from soft, breathable cotton with a modern fit that works perfectly for casual wear or layering.',
      images: [
        'https://readdy.ai/api/search-image?query=premium%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20comfortable%20everyday%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=600&height=750&seq=tshirt1&orientation=portrait',
        'https://readdy.ai/api/search-image?query=cotton%20t-shirt%20fabric%20detail%20showing%20soft%20texture%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20close-up%20garment%20details&width=600&height=750&seq=tshirt1detail&orientation=portrait'
      ],
      colors: ['White'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      category: 'T-Shirts',
      material: '100% Premium Cotton',
      care: 'Machine wash cold, tumble dry low',
      features: ['Soft cotton fabric', 'Modern fit', 'Reinforced seams', 'Pre-shrunk'],
      isNew: true,
      isSale: false
    },
    '10': {
      id: 10,
      name: 'Striped T-Shirt',
      price: 79,
      description: 'A classic striped t-shirt that brings timeless style to your casual wardrobe. Made from soft cotton with navy stripes on white background for a sophisticated look.',
      images: [
        'https://readdy.ai/api/search-image?query=classic%20striped%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20comfortable%20everyday%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=600&height=750&seq=tshirt2&orientation=portrait'
      ],
      colors: ['Navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      category: 'T-Shirts',
      material: '100% Cotton',
      care: 'Machine wash cold, tumble dry low',
      features: ['Classic stripes', 'Comfortable fit', 'Soft cotton', 'Durable construction'],
      isNew: false,
      isSale: false
    },
    '11': {
      id: 11,
      name: 'Organic Cotton T-Shirt',
      price: 95,
      description: 'An environmentally conscious t-shirt made from 100% organic cotton. Soft, sustainable, and stylish - perfect for the eco-minded fashion lover.',
      images: [
        'https://readdy.ai/api/search-image?query=organic%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20sustainable%20fashion%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20eco-friendly%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=600&height=750&seq=tshirt3&orientation=portrait'
      ],
      colors: ['Gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      category: 'T-Shirts',
      material: '100% Organic Cotton',
      care: 'Machine wash cold, tumble dry low',
      features: ['Organic cotton', 'Sustainable production', 'Soft texture', 'Eco-friendly'],
      isNew: true,
      isSale: false
    }
  };

  const product = products[productId as keyof typeof products] || products['1'];

  const relatedProducts = [
    {
      id: 4,
      name: 'Tailored Trousers',
      price: 249,
      image: 'https://readdy.ai/api/search-image?query=elegant%20tailored%20trousers%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20sophisticated%20business%20attire%2C%20modern%20professional%20wardrobe&width=300&height=375&seq=trousers1&orientation=portrait'
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 449,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20accessories%2C%20clean%20studio%20lighting%2C%20premium%20leather%20goods%2C%20sophisticated%20fashion%20accessory%2C%20elegant%20handbag%20design&width=300&height=375&seq=bag1&orientation=portrait'
    },
    {
      id: 6,
      name: 'Cashmere Sweater',
      price: 329,
      image: 'https://readdy.ai/api/search-image?query=luxury%20cashmere%20sweater%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20knitwear%2C%20clean%20studio%20lighting%2C%20premium%20cashmere%20fabric%2C%20sophisticated%20winter%20clothing%2C%20elegant%20sweater%20design&width=300&height=375&seq=sweater1&orientation=portrait'
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', { product, selectedSize, quantity });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-black cursor-pointer">Home</Link>
            </li>
            <li><span>/</span></li>
            <li>
              <Link href="/shop" className="hover:text-black cursor-pointer">Shop</Link>
            </li>
            <li><span>/</span></li>
            <li className="text-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      activeImageIndex === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title and Price */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {product.isNew && (
                  <span className="bg-black text-white px-2 py-1 text-xs font-medium">NEW</span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium">SALE</span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-black">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded text-center cursor-pointer whitespace-nowrap ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-subtract-line"></i>
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                >
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                Add to Cart - ${product.price * quantity}
              </button>
              <button className="w-full border-2 border-black text-black py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                <div className="flex items-center justify-center space-x-2">
                  <i className="ri-heart-line"></i>
                  <span>Add to Wishlist</span>
                </div>
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-black mb-4">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="text-black">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Care:</span>
                  <span className="text-black">{product.care}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Features:</span>
                  <span className="text-black">{product.features.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-black mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black">${relatedProduct.price}</span>
                    <Link href={`/product/${relatedProduct.id}`}>
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
      </div>

      <Footer />
    </div>
  );
}
