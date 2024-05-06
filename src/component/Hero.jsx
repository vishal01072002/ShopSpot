import React from 'react'

const Hero = () => {
  return (
    <div>
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to our ShopSpot Store</h1>
          <p className="mt-4 text-lg text-gray-600">Shop the latest trends in fashion, electronics, and more.</p>
          <div className="mt-8">
            <a href="/ProductPage" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">Shop Now</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero