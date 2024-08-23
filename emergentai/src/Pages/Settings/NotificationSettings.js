import React, { useState } from "react";
import { Switch, Menu } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  BellOutlined,
  GlobalOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Sidebar from "../../components/Doctor/Sidebar";
import TopNav from "../../components/Doctor/TopNav";

const NotificationSettings = () => {
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    sms: true,
    app: false,
  });
  const [formData, setFormData] = useState({
    username: "Jane Carol",
    email: "jane@gmail.com",
    phone: "+256708210796",
  });

  const handleSwitchChange = (type) => {
    const newPreferences = {
      ...notificationPreferences,
      [type]: !notificationPreferences[type],
    };
    setNotificationPreferences(newPreferences);
    axios.post("/api/notification-preferences", newPreferences);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNav />

        <div className="flex-1 overflow-y-auto pt-16 pb-8 bg-gray-100">
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            <div className="bg-white shadow-md rounded-lg p-6 flex space-x-4">
              <div className="w-64">
                <div className="flex flex-col items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="profile"
                    className="rounded-full w-20 h-20 object-cover mb-4"
                  />
                  <h2 className="text-lg font-semibold">{formData.username}</h2>
                  <p className="text-gray-500">{formData.email}</p>
                </div>
                <div className="mt-6 space-y-4">
                  <Link to="/profile-settings">
                    <button className="w-full py-2  px-2 text-left text-white bg-blue-500 rounded-md">
                      Profile Settings
                    </button>
                  </Link>
                  <Link to="/notification-settings">
                    <button className="w-full py-2 text-left text-gray-700">
                      Notification Preferences
                    </button>
                  </Link>
                  <Link to="/language-settings">
                    <button className="w-full py-2 text-left text-gray-700">
                      Language Preferences
                    </button>
                  </Link>
                  <Link to="/delete-account">
                    <button className="w-full py-2 text-left text-gray-700">
                      Delete Account
                    </button>
                  </Link>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Switch
                      checked={notificationPreferences.email}
                      onChange={() => handleSwitchChange("email")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS Notifications</span>
                    <Switch
                      checked={notificationPreferences.sms}
                      onChange={() => handleSwitchChange("sms")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>App Notifications</span>
                    <Switch
                      checked={notificationPreferences.app}
                      onChange={() => handleSwitchChange("app")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
