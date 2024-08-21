import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
          <img src="path-to-logo/emergentai-logo.png" alt="Emergent AI Logo" className="h-8 mr-4" />
          <div className="hidden md:flex space-x-8">
            <a href="#product" className="text-gray-600 hover:text-blue-500">Product</a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-500">Solutions</a>
            <a href="#resources" className="text-gray-600 hover:text-blue-500">Resources</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-500">Why Us</a>
          </div>
        </div>

      
        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hidden md:block hover:bg-blue-700">
            Register
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XIcon className="h-6 w-6 text-gray-600" /> : <MenuIcon className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#product" className="block text-gray-600 hover:text-blue-500 py-2">Product</a>
          <a href="#solutions" className="block text-gray-600 hover:text-blue-500 py-2">Solutions</a>
          <a href="#resources" className="block text-gray-600 hover:text-blue-500 py-2">Resources</a>
          <a href="#why-us" className="block text-gray-600 hover:text-blue-500 py-2">Why Us</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full w-full mt-4 hover:bg-blue-700">
            Register
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
