import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, BarChartOutlined, FileTextOutlined, AppstoreAddOutlined, SettingOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';

const DropdownMenu = ({ isOpen, toggleDropdown }) => (
  <div className="relative">
   
    <button
      onClick={() => toggleDropdown(!isOpen)}
      className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
      aria-expanded={isOpen}
    >
      <div className="mr-4">
        <FileTextOutlined className="w-6 h-6" />
      </div>
      <span className="font-medium">Model Performance</span>
      <DownOutlined className="ml-2 w-4 h-4" />
    </button>
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-blue-500 text-white rounded-lg shadow-lg">
        <Link
          to="/approve-doctor"
          className="block px-4 py-2 hover:bg-blue-600 rounded-t-lg transition duration-300 ease-in-out"
          onClick={() => toggleDropdown(false)}
        >
          Approve
        </Link>
        <Link
          to="/delete-doctor"
          className="block px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => toggleDropdown(false)}
        >
          Delete
        </Link>
        <Link
          to="/add-doctor"
          className="block px-4 py-2 hover:bg-blue-600 rounded-b-lg transition duration-300 ease-in-out"
          onClick={() => toggleDropdown(false)}
        >
          Add
        </Link>
      </div>
    )}
  </div>
);

const Sideboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (open) => {
    setIsDropdownOpen(open);
  };

  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-xl">
 
      <div className="flex items-center justify-center h-20 bg-blue-800">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

     
      <div className="flex flex-col mt-8 space-y-3">
        <Link
          to="/dashboard"
          className="flex items-center px-6 py-3 text-blue-600 bg-blue-100 rounded-lg mx-4 hover:bg-blue-200 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <HomeOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/statistics"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <BarChartOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Statistics</span>
        </Link>

        <Link
          to="/reports"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <FileTextOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Reports</span>
        </Link>

        <DropdownMenu
          isOpen={isDropdownOpen}
          toggleDropdown={(open) => setIsDropdownOpen(open)}
        />

        <Link
          to="/profile-settings"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <SettingOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-auto mb-8">
        <Link
          to="#logout"
          className="flex items-center px-6 py-3 text-red-600 hover:bg-red-100 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <LogoutOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sideboard;
