import React from 'react';

const PaymentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h2>
        <form className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500" placeholder="Enter your card number" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-3">
              <label htmlFor="expiry" className="block text-gray-700 font-semibold">Expiry</label>
              <input type="text" id="expiry" name="expiry" className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500" placeholder="MM/YY" />
            </div>
            <div className="space-y-3">
              <label htmlFor="cvc" className="block text-gray-700 font-semibold">CVC</label>
              <input type="text" id="cvc" name="cvc" className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500" placeholder="CVC" />
            </div>
            <div className="space-y-3">
              <label htmlFor="zip" className="block text-gray-700 font-semibold">ZIP Code</label>
              <input type="text" id="zip" name="zip" className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500" placeholder="ZIP Code" />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">Pay Now</button>
        </form>
      </div>

      <div className="mt-8 text-gray-600 text-lg">
        <p className="mb-2 text-center">Or, choose other payment options:</p>
        <div className="flex items-center justify-center space-x-4">
          <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="Visa" className="h-10" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrGZwA4SrbIYgUWAm7YhsEttZi8N6QihqI9SS5z9fig&s" alt="Mastercard" className="h-10" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpiphuYZrYZFR7cfeWzwp8zOgJg45aj4Ky9c5RPN-NQ&s" alt="PayPal" className="h-10" />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
// import React, { useState } from 'react';

// const PaymentPage = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     expiry: '',
//     cvc: '',
//     zip: ''
//   });

//   const isFormValid = () => {
//     const { cardNumber, expiry, cvc, zip } = formData;
//     return cardNumber && expiry && cvc && zip;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handlePaymentClick = () => {
//     if (isFormValid()) {
//       window.location.href = "https://buy.stripe.com/test_00g7um22l5E4ck87ss";
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
//       <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h2>
//         <form className="space-y-6">
//           <div className="space-y-3">
//             <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">Card Number</label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500"
//               placeholder="Enter your card number"
//             />
//           </div>
//           <div className="grid grid-cols-3 gap-3">
//             <div className="space-y-3">
//               <label htmlFor="expiry" className="block text-gray-700 font-semibold">Expiry</label>
//               <input
//                 type="text"
//                 id="expiry"
//                 name="expiry"
//                 value={formData.expiry}
//                 onChange={handleInputChange}
//                 className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500"
//                 placeholder="MM/YY"
//               />
//             </div>
//             <div className="space-y-3">
//               <label htmlFor="cvc" className="block text-gray-700 font-semibold">CVC</label>
//               <input
//                 type="text"
//                 id="cvc"
//                 name="cvc"
//                 value={formData.cvc}
//                 onChange={handleInputChange}
//                 className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500"
//                 placeholder="CVC"
//               />
//             </div>
//             <div className="space-y-3">
//               <label htmlFor="zip" className="block text-gray-700 font-semibold">ZIP Code</label>
//               <input
//                 type="text"
//                 id="zip"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleInputChange}
//                 className="w-full border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg px-4 py-2 transition focus:outline-none focus:border-blue-500"
//                 placeholder="ZIP Code"
//               />
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={handlePaymentClick}
//             disabled={!isFormValid()}
//             className={`w-full py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
//               isFormValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             }`}
//           >
//             Pay Now
//           </button>
//         </form>
//       </div>

//       <div className="mt-8 text-gray-600 text-lg">
//         <p className="mb-2 text-center">Or, choose other payment options:</p>
//         <div className="flex items-center justify-center space-x-4">
//           <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="Visa" className="h-10" />
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrGZwA4SrbIYgUWAm7YhsEttZi8N6QihqI9SS5z9fig&s" alt="Mastercard" className="h-10" />
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpiphuYZrYZFR7cfeWzwp8zOgJg45aj4Ky9c5RPN-NQ&s" alt="PayPal" className="h-10" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
