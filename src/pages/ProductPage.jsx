import React from 'react';


function ProductPage() {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Product Name</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <img src="product-image.jpg" alt="Product" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">Product Description</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum diam, sit amet lacinia velit tristique sit amet.</p>
            <div className="mt-4">
              <span className="text-gray-700 font-semibold">$99.99</span>
         <button className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default ProductPage;
