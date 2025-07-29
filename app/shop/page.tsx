
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'blazers', name: 'Blazers' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'tshirts', name: 'T-Shirts' },
    { id: 'trousers', name: 'Trousers' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Brown'];

  const products = [
    {
      id: 1,
      name: 'Classic Black Blazer',
      price: 299,
      originalPrice: 399,
      image: 'https://readdy.ai/api/search-image?query=elegant%20black%20blazer%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20model%20wearing%20sophisticated%20business%20attire%2C%20luxury%20fashion%20brand%20aesthetic%2C%20modern%20professional%20wardrobe&width=400&height=500&seq=blazer1&orientation=portrait',
      category: 'blazers',
      color: 'Black',
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Premium White Shirt',
      price: 159,
      image: 'https://readdy.ai/api/search-image?query=crisp%20white%20dress%20shirt%20on%20white%20background%2C%20premium%20cotton%20fabric%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20elegant%20business%20attire%2C%20sophisticated%20wardrobe%20essential&width=400&height=500&seq=shirt1&orientation=portrait',
      category: 'shirts',
      color: 'White',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Essential Cotton T-Shirt',
      price: 89,
      image: 'https://readdy.ai/api/search-image?query=premium%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20comfortable%20everyday%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=400&height=500&seq=tshirt1&orientation=portrait',
      category: 'tshirts',
      color: 'White',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Tailored Trousers',
      price: 249,
      image: 'https://readdy.ai/api/search-image?query=elegant%20tailored%20trousers%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20sophisticated%20business%20attire%2C%20modern%20professional%20wardrobe&width=400&height=500&seq=trousers1&orientation=portrait',
      category: 'trousers',
      color: 'Navy',
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 449,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20accessories%2C%20clean%20studio%20lighting%2C%20premium%20leather%20goods%2C%20sophisticated%20fashion%20accessory%2C%20elegant%20handbag%20design&width=400&height=500&seq=bag1&orientation=portrait',
      category: 'accessories',
      color: 'Brown',
      sizes: ['One Size'],
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: 'Cashmere Sweater',
      price: 329,
      image: 'https://readdy.ai/api/search-image?query=luxury%20cashmere%20sweater%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20knitwear%2C%20clean%20studio%20lighting%2C%20premium%20cashmere%20fabric%2C%20sophisticated%20winter%20clothing%2C%20elegant%20sweater%20design&width=400&height=500&seq=sweater1&orientation=portrait',
      category: 'women',
      color: 'Gray',
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: 'Silk Dress',
      price: 399,
      originalPrice: 499,
      image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20dress%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20womens%20clothing%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20sophisticated%20evening%20wear%2C%20modern%20dress%20design&width=400&height=500&seq=dress1&orientation=portrait',
      category: 'women',
      color: 'Black',
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: 'Wool Coat',
      price: 599,
      image: 'https://readdy.ai/api/search-image?query=luxury%20wool%20coat%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20outerwear%2C%20clean%20studio%20lighting%2C%20premium%20wool%20fabric%2C%20sophisticated%20winter%20clothing%2C%20elegant%20coat%20design&width=400&height=500&seq=coat1&orientation=portrait',
      category: 'men',
      color: 'Gray',
      sizes: ['M', 'L', 'XL', 'XXL'],
      isNew: true,
      isSale: false
    },
    {
      id: 9,
      name: 'Leather Wallet',
      price: 89,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20wallet%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20accessories%2C%20clean%20studio%20lighting%2C%20premium%20leather%20goods%2C%20sophisticated%20mens%20accessory%2C%20elegant%20wallet%20design&width=400&height=500&seq=wallet1&orientation=portrait',
      category: 'accessories',
      color: 'Black',
      sizes: ['One Size'],
      isNew: false,
      isSale: false
    },
    {
      id: 10,
      name: 'Striped T-Shirt',
      price: 79,
      image: 'https://readdy.ai/api/search-image?query=classic%20striped%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20high-end%20casual%20wear%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20comfortable%20everyday%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=400&height=500&seq=tshirt2&orientation=portrait',
      category: 'tshirts',
      color: 'Navy',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: false,
      isSale: false
    },
    {
      id: 11,
      name: 'Organic Cotton T-Shirt',
      price: 95,
      image: 'https://readdy.ai/api/search-image?query=organic%20cotton%20t-shirt%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20minimalist%20styling%2C%20sustainable%20fashion%2C%20clean%20studio%20lighting%2C%20luxury%20fashion%20brand%20aesthetic%2C%20eco-friendly%20clothing%2C%20modern%20casual%20wardrobe%20essential&width=400&height=500&seq=tshirt3&orientation=portrait',
      category: 'tshirts',
      color: 'Gray',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      isSale: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedColor !== 'all' && product.color !== selectedColor) return false;
    if (selectedSize !== 'all' && !product.sizes.includes(selectedSize)) return false;
    if (priceRange !== 'all') {
      const price = product.price;
      switch (priceRange) {
        case 'under-100':
          if (price >= 100) return false;
          break;
        case '100-300':
          if (price < 100 || price > 300) return false;
          break;
        case '300-500':
          if (price < 300 || price > 500) return false;
          break;
        case 'over-500':
          if (price <= 500) return false;
          break;
      }
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Shop Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium fashion pieces designed for the modern wardrobe.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-black mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedSize('all')}
                    className={`px-3 py-2 text-sm border rounded cursor-pointer whitespace-nowrap ${
                      selectedSize === 'all'
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    All
                  </button>
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm border rounded cursor-pointer whitespace-nowrap ${
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

              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">Color</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      value="all"
                      checked={selectedColor === 'all'}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">All Colors</span>
                  </label>
                  {colors.map(color => (
                    <label key={color} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="mr-2 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-black mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === 'all'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">All Prices</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="under-100"
                      checked={priceRange === 'under-100'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">Under $100</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="100-300"
                      checked={priceRange === '100-300'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">$100 - $300</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="300-500"
                      checked={priceRange === '300-500'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">$300 - $500</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value="over-500"
                      checked={priceRange === 'over-500'}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">Over $500</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer pr-8"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-medium">
                        SALE
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{product.color}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-black">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSize('all');
                    setSelectedColor('all');
                    setPriceRange('all');
                  }}
                  className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <ShopContent />
    </Suspense>
  );
}
