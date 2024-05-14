import React, { useEffect, useState } from 'react'
import "../App.css"
import HeroImg from "../assests/images/advertising.png"
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { apiConnector } from '../api calls/apiConnector';

export const Home = () => {
    const categories = [
        { id: 1, name: 'Fashion' },
        { id: 2, name: 'Electronics' },
        { id: 3, name: 'Books' },
        { id: 4, name: 'Home & Kitchen' },
        { id: 5, name: 'Beauty & Personal Care' },
      ];
    
      const [allProducts, setAllProducts] = useState([]);
      const [showProduct, setShowProduct] = useState([]);
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

  const fetchallproduct = async()=>{
    try {
      const response = await apiConnector("POST",`http://127.0.0.1:4000/api/v1/product/getProducts`);
      if(! response.data.success){
          throw new Error(response?.data?.message);
      }
      else{
        console.log(response);
        const productDetail = response.data.products;
        setAllProducts(productDetail);
        setShowProduct(productDetail?.slice(0,2));
        console.log(productDetail?.slice(0,2));
      }
    } catch (error) {
      console.log("ONE PRODUCT API ERROR............", error);
      console.log(error?.response?.data?.message);
    }  
  }

  useEffect(()=>{
    fetchallproduct();
  },[]);
      
  return (
    <div>
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container w-11/12 mx-auto px-4">
        <div className="flex gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl text-start font-bold mb-4">Welcome to ShopSpot Store</h1>
            <p className="text-lg mb-8 text-start">Discover the latest trends in fashion, electronics, and more!</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Shop Now</button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold">Login</button>
            </div>
          </div>
          <div className="text-center w-2/4 lg:text-right">
            <img src={HeroImg} alt="Hero" className="rounded-lg w-full mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
        </div>

        {/* category */}
        <div className="bg-gray-100 py-8">
      <div className="container mx-auto rounded-lg bg-white shadow-md p-6 flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-gray-800 text-lg font-semibold mb-4 md:mb-0 md:mr-4">Browse Categories:</h2>
        <div className="relative">
          <select
            className="block appearance-none bg-gray-200 text-gray-800 border border-gray-200 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
            defaultValue=""
          >
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

        {/* cards and one card */}
          <div className='flex gap-20 items-center justify-center'>
          { 
            showProduct?.length === 0 ? <p>No Product Now</p> :
            showProduct?.map((one => (
              <div key={one._id} className="max-w-xs py-10">
                <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                  <img className="rounded-t-lg w-[20rem] h-[15rem] object-cover" src={one?.image} alt="" />
                  <div className="py-2 px-3 flex flex-col justify-start rounded-lg bg-white">
                    <h1 className="text-gray-700 font-bold text-start text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{one?.productName}</h1>
                    <p className="text-gray-700 tracking-wide text-start">{one?.description}</p>
                    <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                  </div>
                  <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                    <span className="text-md">₹ {one.sellingPrice}</span>
                  </div>
                </div>
              </div>
            )))
          }
          <div>
          <button className="button-64 relative mx-auto flex items-center justify-center transition duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500">
          <span className="text relative"><p className='text-center absolute top-1/2 -translate-y-1/2 text-2xl font-bold'>Show More</p></span>
          </button>
          </div>
          </div>  
        {/* news letter */}
        <section id="newsletter" className={`section-p1 flex justify-between items-center px-16 bg-cover mt-5 mb-20 bg-no-repeat bg-center`} >
          <div className="newstext">
            <h4 className="text-white text-start font-semibold text-2xl">Sign Up for Newsletters</h4>
            <p className="text-gray-200 font-medium">Get Email updates about our latest shop and <span className="text-yellow-400">special offers.</span></p>
          </div>
          <div className="form flex items-center justify-center w-full md:w-2/5">
            <input type="text" placeholder="Your email address" className="input-newsletter w-2/3" />
            <button className="btn-normal ml-2 bg-[#088178] px-4 py-3 text-white">Sign Up</button>
          </div>
        </section>

        
        {/* fotter */}
          <footer className="bg-gray-900 text-white mt-5 py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Us */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna at urna convallis tristique.</p>
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
              <p>&copy; 2024 Ecommerce Store. All rights reserved.</p>
            </div>
          </footer>

    </div>
  )
}


