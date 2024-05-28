import React, { useEffect, useState } from 'react';
import "../App.css";
import HeroImg from "../assests/images/advertising.png";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { apiConnector } from '../api calls/apiConnector';
import Content from '../components/Content';
import { useSelector } from 'react-redux';

export const Home = () => {
  const user = useSelector(state => state.user);
  const categories = [
    { id: 1, name: 'Fashion' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Books' },
    { id: 4, name: 'Home & Kitchen' },
    { id: 5, name: 'Beauty & Personal Care' },
  ];

  const [allProducts, setAllProducts] = useState([]);
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
      price: '$29.99',
    },
  ];

  const fetchallproduct = async () => {
    try {
      const response = await apiConnector("POST", `http://127.0.0.1:4000/api/v1/product/getProducts`);
      if (!response.data.success) {
        throw new Error(response?.data?.message);
      } else {
        // console.log(response);
        const productDetail = response.data.products;
        setAllProducts(productDetail);
        localStorage.setItem('products', JSON.stringify(productDetail));
        // console.log(productDetail?.slice(0,2));
      }
    } catch (error) {
      console.log("ONE PRODUCT API ERROR............", error);
      console.log(error?.response?.data?.message);
      let temp = [];
      localStorage.setItem('products', JSON.stringify(temp));
    }
  };

  useEffect(() => {
    fetchallproduct();
  }, []);
  // console.log(Object.keys(user).length);
  return (
    <div className="font-gilroy">
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to ShopSpot Store</h1>
              <p className="text-lg mb-8">Discover the latest trends in fashion, electronics, and more!</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Shop Now</button>
                {Object.keys(user).length <= 0 && <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold">Login</button>}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={HeroImg} alt="Hero" className="rounded-lg w-full mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Content />
      </div>

      {/* Newsletter */}
      <section id="newsletter" className="section-p1 flex justify-between items-center px-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white mt-5 mb-20 py-8">
        <div className="newstext">
          <h4 className="text-2xl font-semibold mb-2">Sign Up for Newsletters</h4>
          <p className="text-lg">Get Email updates about our latest shop and <span className="text-yellow-400">special offers.</span></p>
        </div>
        <div className="form flex items-center justify-center w-full md:w-2/5">
          <input type="text" placeholder="Your email address" className="input-newsletter w-2/3 rounded-l-lg px-4 py-2" />
          <button className="btn-normal ml-2 bg-[#088178] px-4 py-3 text-white rounded-r-lg">Sign Up</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>ShopSpot is a cutting-edge e-commerce platform designed to provide a seamless online shopping experience.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Shop</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">About</a></li>
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street, City</p>
            <p>Email: shopspot.info@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Follow Us */}
          <div className='flex flex-col items-center'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-xl inline-block transform transition duration-300 hover:scale-110">
                <FaFacebook className="text-blue-500"></FaFacebook>
              </a>
              <a href="/" className="text-xl inline-block transform transition duration-300 hover:scale-110">
                <FaTwitter className="text-blue-400"></FaTwitter>
              </a>
              <a href="/" className="text-xl inline-block transform transition duration-300 hover:scale-110">
                <FaEnvelope className="text-gray-700"></FaEnvelope>
              </a>
              <a href="/" className="text-xl inline-block transform transition duration-300 hover:scale-110">
                <FaInstagram className="text-pink-500"></FaInstagram>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 Shopspot Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
