import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProductPage from './ProductPage';
import Hero from '../component/Hero';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Homepage = () => {
  const router = createBrowserRouter([
    {
      path: '/',
    },
    {
      path: '/login',
      element: <login/>
    },
    {
      path: '/Products',
      element: <ProductPage/>
    }
  ])
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      

      <Hero/>
      

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

      <Footer/>
      
    </div>
  );
}

export default Homepage;
