import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-xl">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 bg-blue-800">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-8 space-y-3">
        <Link
          to="/patient"
          className="flex items-center px-6 py-3 text-blue-600 bg-blue-100 rounded-lg mx-4 hover:bg-blue-200 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <HomeOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/medical"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <UserOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Medical History</span>
        </Link>

        <Link
          to="/test"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <UserOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Test Records</span>
        </Link>

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

      {/* Logout */}
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

export default Sidebar;
