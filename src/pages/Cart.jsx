import React, { useState } from 'react';
import Footer from '../components/Footer';

const CheckoutCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      window.location.href = 'https://buy.stripe.com/test_00g7um22l5E4ck87ss'; 
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-cyan-800 text-white p-6">
      <div className="container mx-auto font-gilrouy">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-6 hover:bg-gray-100 transition duration-300">
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/50" alt="Product Image" className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="text-red-600 hover:text-red-800 font-semibold"
                  >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
          <button 
            onClick={handleCheckout} 
            disabled={cartItems.length === 0}
            className={`px-6 py-3 rounded-lg shadow-md transition duration-300 ${
              cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            >
            Checkout
          </button>
        </div>
      </div>   
    </div>
        <Footer/>
            </>
  );
};

export default CheckoutCart;
