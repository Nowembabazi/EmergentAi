import React from "react";
import { Layout, Menu, Typography } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  FileOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  return (
    <Sider
      width={240}
      style={{ height: "100vh" }}
      className="shadow-lg"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="flex items-center justify-center h-20 bg-blue-800">
        <img
          src="https://via.placeholder.com/150"
          alt="EmergentAI Logo"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />} className="menu-item">
          <Link to="/lab">
            <Text>Dashboard</Text>
          </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<FileOutlined />} className="menu-item">
          <Link to="/new-test">
            <Text>New Tests</Text>
          </Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<MedicineBoxOutlined />} className="menu-item">
          <Link to="/completed-test">
            <Text>Completed Tests</Text>
          </Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<UserOutlined />} className="menu-item">
          <Link to="/profile-settings">
            <Text>Settings</Text>
          </Link>
        </Menu.Item>

        <Menu.Item key="5" icon={<LogoutOutlined />} className="menu-item" danger>
          <Link to="#logout">
            <Text>Logout</Text>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
