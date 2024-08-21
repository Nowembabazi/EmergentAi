import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-900">emergentAI</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-900">Product</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">Solutions</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">Resources</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">Why Us</a>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-full hidden md:block">
          Register
        </button>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Product</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Solutions</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Resources</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Why Us</a>
          <a href="#" className="block px-4 py-2 bg-blue-900 text-white hover:bg-blue-700">Register</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
