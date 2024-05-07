import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 transition-all duration-500">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-bold text-xl text-gray-800 transition-all duration-300 hover:text-gray-900">Shopspot</a>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-gray-900">Home</a>
                <a href="/shop" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-gray-900">Shop</a>
                <a href="/about" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-gray-900">About</a>
                <a href="/contact" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-gray-900">Contact</a>
              </div>
            </div>

            <div className="hidden sm:block sm:ml-6">
          <Link to="/login"> <button className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 transition-all duration-300">Login</button></Link>   
           <Link to="/signup">  <button className="text-gray-800 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 transition-all duration-300">Signup</button></Link> 
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
