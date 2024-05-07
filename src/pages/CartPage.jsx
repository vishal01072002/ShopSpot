// import React from 'react'

// function CartPage() {
//   return (
//     <div>
//      cart page
//     </div>
//   )
// }

// export default CartPage
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const CartPage = ({ location }) => {
    const product = location.state.product;

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <img src="https://via.placeholder.com/400" alt="Product" className="w-full h-48 object-cover mb-4" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Remove from Cart</button>
                    </div>
                </div>
                {/* You can repeat the above card for multiple products in the cart */}
                {/* Total Price */}
                <div className="mt-8 flex justify-end items-center">
                    <p className="text-xl font-semibold mr-4">Total:</p>
                    <p className="text-xl font-semibold">${product.price}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;

