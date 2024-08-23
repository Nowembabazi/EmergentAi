import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 bg-blue-700">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-10"
        />
      </div>

    
      <div className="flex flex-col mt-8 space-y-4">
       
        <Link
          to="/patient"
          className="flex items-center px-6 py-2 text-blue-500 hover:bg-gray-100"
        >
          <div className="mr-4">
            <HomeOutlined className="w-6 h-6" />
          </div>
          <span>Dashboard</span>
        </Link>

        {/* Medical History */}
        <Link
          to="/medical"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
            <UserOutlined className="w-6 h-6" />
          </div>
          <span>Medical History</span>
        </Link>

        {/* Test Records */}
        <Link
          to="/test"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
            <UserOutlined className="w-6 h-6" />
          </div>
          <span>Test Records</span>
        </Link>

      
        <Link
          to="/profile-settings"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
            <SettingOutlined className="w-6 h-6" />
          </div>
          <span>Settings</span>
        </Link>
      </div>

      {/* Logout */}
      <div className="flex items-center justify-center mt-auto mb-8">
        <Link
          to="#logout"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
            <LogoutOutlined className="w-6 h-6" />
          </div>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
