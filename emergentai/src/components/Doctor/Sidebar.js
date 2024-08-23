import React from "react";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 bg-blue-900">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-10"
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-8 space-y-4">
        <a
          href="/doctor"
          className="flex items-center px-6 py-2 text-blue-500 hover:bg-gray-100"
        >
          <div className="mr-4">
            {/* Dashboard Icon */}
            <HomeOutlined className="w-6 h-6" />
          </div>
          <span>Dashboard</span>
        </a>
        <a
          href="/patient-table"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
          
            <UserOutlined className="w-6 h-6" />
          </div>
          <span>Patients</span>
        </a>
        <a
          href="/profile-settings"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
           
            <SettingOutlined className="w-6 h-6" />
          </div>
          <span>Settings</span>
        </a>
      </div>

      {/* Logout */}
      <div className="flex items-center justify-center mt-auto mb-8">
        <a
          href="#logout"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <div className="mr-4">
            {/* Logout Icon */}
            <LogoutOutlined className="w-6 h-6" />
          </div>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
