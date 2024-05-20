import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { apiConnector } from '../api calls/apiConnector';
import HeroImg from "../assests/images/advertising.png"; // Ensure this path is correct

export const Home = () => {
  const categories = [
    { id: 1, name: 'Fashion' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Books' },
    { id: 4, name: 'Home & Kitchen' },
    { id: 5, name: 'Beauty & Personal Care' },
  ];

  const [showProduct, setShowProduct] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await apiConnector("POST", `http://127.0.0.1:4000/api/v1/product/getProducts`);
      if (response.data.success) {
        const productDetail = response.data.products;
        setShowProduct(productDetail?.slice(0, 2));
      } else {
        throw new Error(response?.data?.message);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to ShopSpot Store</h1>
              <p className="text-lg mb-8">Discover the latest trends in fashion, electronics, and more!</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Shop Now</button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold">Login</button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={HeroImg} alt="Hero" className="rounded-lg w-full mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto bg-white shadow-md p-6 flex flex-col md:flex-row items-center justify-center rounded-lg">
          <h2 className="text-gray-800 text-lg font-semibold mb-4 md:mb-0 md:mr-4">Browse Categories:</h2>
          <div className="relative">
            <select className="block appearance-none bg-gray-200 text-gray-800 border border-gray-200 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-300" defaultValue="">
              <option value="" disabled>Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9 11l4 4m0 0l4-4m-4 4V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showProduct.length > 0 ? (
          showProduct.map(one => (
            <div key={one.id} className="max-w-xs mx-auto">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg w-full h-48 object-cover" src={one.image} alt="" />
                <div className="py-2 px-3 flex flex-col justify-start rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-start text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{one.name}</h1>
                  <p className="text-gray-700 tracking-wide text-start">{one.description}</p>
                  <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">{one.price}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl text-gray-600">No Products Now</h2>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-10 md:py-20 px-4 md:px-16 bg-cover bg-center mt-5 mb-20 relative" style={{ backgroundImage: 'url(path/to/your/background.jpg)' }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="newstext text-white md:text-left">
            <h4 className="text-gray-800 font-semibold text-2xl mb-4">Sign Up for Newsletters</h4>
            <p className="text-gray-700 font-medium">Get email updates about our latest shop and <span className="text-yellow-400">special offers.</span></p>
          </div>
          <div className="form flex flex-col md:flex-row items-center justify-center">
            <input type="text" placeholder="Your email address" className="input-newsletter w-full md:w-auto px-4 py-2 rounded-l-lg md:rounded-l-none md:rounded-bl-lg focus:outline-none mb-4 md:mb-0 md:mr-2" />
            <button className="btn-normal bg-[#088178] px-6 py-2 text-white rounded-r-lg md:rounded-r-none md:rounded-br-lg">Sign Up</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white mt-5 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna at urna convallis tristique.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Shop</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">About</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street, City</p>
            <p>Email: shopspot.info@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-xl transform transition duration-300 hover:scale-110">
                <FaFacebook className="text-blue-500" />
              </a>
              <a href="/" className="text-xl transform transition duration-300 hover:scale-110">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="/" className="text-xl transform transition duration-300 hover:scale-110">
                <FaEnvelope className="text-gray-700" />
              </a>
              <a href="/" className="text-xl transform transition duration-300 hover:scale-110">
                <FaInstagram className="text-pink-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 ShopSpot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
