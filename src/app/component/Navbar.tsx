"use client"
import React, { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
interface NavbarProps {
  // You can define any additional props you need
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          {/* Your logo or brand name goes here */}
          <span>Logo</span>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Home</a>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-700 rounded transition duration-300">About</a>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Services</a>
          <a href="#" className="text-white py-2 px-4 hover:bg-gray-700 rounded transition duration-300">Contact</a>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <FaHamburger />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
