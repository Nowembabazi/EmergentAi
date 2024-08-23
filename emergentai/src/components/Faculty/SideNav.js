import React from "react";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const SideNav = () => {
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
        <a
          href="/Faculty"
          className="flex items-center px-6 py-3 text-blue-600 bg-blue-100 rounded-lg mx-4 hover:bg-blue-200 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <HomeOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          href="/patient-table"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <UserOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Patients</span>
        </a>
        <a
          href="/profile-settings"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <SettingOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Settings</span>
        </a>
      </div>

      {/* Logout */}
      <div className="flex items-center justify-center mt-auto mb-8">
        <a
          href="#logout"
          className="flex items-center px-6 py-3 text-red-600 hover:bg-red-100 rounded-lg mx-4 transition duration-300 ease-in-out"
        >
          <div className="mr-4">
            <LogoutOutlined className="w-6 h-6" />
          </div>
          <span className="font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
