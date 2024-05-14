import React from 'react';

function PaymentGatewayPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Choose Payment Method</h1>
        <div className="flex justify-around">
          <div className="w-1/2 p-4 border rounded-md shadow-md hover:shadow-lg">
            <img src="https://t4.ftcdn.net/jpg/03/07/14/09/360_F_307140983_MDNd4Mtv5qgd3LAUK40ru1EPyYWL4elG.jpg" alt="Credit Card" className="mx-auto mb-4 h-16" />
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Pay with Credit Card</button>
          </div>
          <div className="w-1/2 p-4 border rounded-md shadow-md hover:shadow-lg">
            <img src="https://play-lh.googleusercontent.com/2tH3ybpe3Tb5y2vamr4s0IJ-ffW83ouOFl4qDeZ8qvKdil5OjMN5_kiQviniaIBz420=w240-h480-rw" alt="Paytm" className="mx-auto mb-4 h-16" />
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Pay with Paytm</button>
          </div>
        </div>
        <div className="flex justify-around mt-6">
          <div className="w-1/2 p-4 border rounded-md shadow-md hover:shadow-lg">
            <img src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.jpg" alt="Google Pay" className="mx-auto mb-4 h-16" />
            <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Pay with Google Pay</button>
          </div>
          <div className="w-1/2 p-4 border rounded-md shadow-md hover:shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaQfBnstiMlD75Y1Z5fBP2_bqcrF9zG0u2AJhs4qKMg&s" alt="PhonePe" className="mx-auto mb-4 h-16" />
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">Pay with PhonePe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGatewayPage;
