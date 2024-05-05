import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-bold text-xl text-gray-800">Shopspot</a>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/products" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                <a href="" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to our ShopSpot Store</h1>
          <p className="mt-4 text-lg text-gray-600">Shop the latest trends in fashion, electronics, and more.</p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">Shop Now</a>
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="bg-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Featured Products</h2>
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Card Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/400" alt="Product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
                <p className="mt-2 text-gray-600">$19.99</p>
                <a href="#" className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Add to Cart</a>
              </div>
            </div>
            {/* Repeat Product Cards for other featured products */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300">&copy; 2024 Shopspot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
