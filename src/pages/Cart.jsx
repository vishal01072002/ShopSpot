import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate(); // Use useNavigate hook to navigate

  const handleCheckout = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="container mx-auto px-4 py-8 font-gilroy">
      <h1 className="text-3xl font-semibold mb-8">Checkout Cart</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/50" alt="Product Image" className="w-12 h-12 rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 font-semibold">Remove</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutCart;
