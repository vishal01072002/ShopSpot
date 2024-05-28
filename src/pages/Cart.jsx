import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';

const CheckoutCart = () => {
  const dispatch = useDispatch();
  const allProducts = JSON.parse(localStorage.getItem('products'))
  const cart = useSelector((state) => state.cart);
  const [cartItem, setCartItem] = useState(allProducts.filter((item=>{
    return (cart.includes(item._id))
  })));

  
  const removeFromCart = (productId)=>{
    let tempCart = [...cart]
    const temp = tempCart.filter((item) => {
      return (item !== productId);
    })
    console.log(temp,cart);
    dispatch({type: 'removeCart', payload: temp});
    setCartItem(allProducts.filter(item=>{
      return (temp.includes(item._id))}))
  }

  const totalPrice = cartItem.reduce((acc, item) => acc + item.sellingPrice, 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
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
            {cartItem.map(item => (
              <div key={item._id} className="flex items-center justify-between p-6 hover:bg-gray-100 transition duration-300">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt="Product Image" className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.productName}</h2>
                    <p className="text-gray-500">&#8377;{item.sellingPrice}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item._id)} 
                  className="text-red-600 hover:text-red-800 font-semibold"
                  >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Total Price: &#8377;{totalPrice}</h2>
          <button 
            onClick={handleCheckout} 
            disabled={cartItem.length === 0}
            className={`px-6 py-3 rounded-lg shadow-md transition duration-300 ${
              cartItem.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
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
