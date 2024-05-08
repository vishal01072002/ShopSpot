import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} ShopSpot. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="flex items-center space-x-6">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
