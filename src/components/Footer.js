import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
          <span className="font-bold text-lg">Shopspot</span>
        </div>
        <div>
          <span className="flex flex-wrap justify-center md:justify-end">© {new Date().getFullYear()} Your Website. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
