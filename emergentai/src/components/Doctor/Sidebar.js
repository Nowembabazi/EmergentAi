import React from "react";
import { HomeOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-xl">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 bg-blue-900">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>

      {/* Menu */}
      <Menu mode="inline" className="mt-8" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard" icon={<HomeOutlined />} className="mx-4">
          <a href="/doctor" className="text-blue-700">Dashboard</a>
        </Menu.Item>
        <Menu.Item key="patients" icon={<UserOutlined />} className="mx-4">
          <a href="/patient-table" className="text-gray-700">Patients</a>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />} className="mx-4">
          <a href="/profile-settings" className="text-gray-700">Settings</a>
        </Menu.Item>
      </Menu>

      {/* Logout */}
      <div className="flex items-center justify-center mt-auto mb-8">
        <Menu mode="inline" className="w-full">
          <Menu.Item key="logout" icon={<LogoutOutlined />} className="mx-4">
            <a href="#logout" className="text-red-600">Logout</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
