import React, { useState } from "react";
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import axios from "axios";
import SideNav from "../../components/Faculty/SideNav";
import TopNav from "../../components/Faculty/TopNav";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    username: "Jane Carol",
    email: "jane@gmail.com",
    phone: "+256708210796",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put("/api/update-profile", formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <SideNav />
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <TopNav />
      <div className="bg-white shadow-md rounded-lg p-8 flex space-x-8">
        
        {/* Left Panel */}
        <div className="w-64">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{formData.username}</h2>
            <p className="text-gray-500">{formData.email}</p>
          </div>
          <div className="mt-6 space-y-4">
            <button className="w-full py-2 text-left text-white bg-blue-500 rounded-md">Profile Settings</button>
            <button className="w-full py-2 text-left text-gray-700">Notification Preferences</button>
            <button className="w-full py-2 text-left text-gray-700">Language Preferences</button>
            <button className="w-full py-2 text-left text-gray-700">Delete Account</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          <div className="space-y-6">
            {/* Username */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <UserOutlined className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                placeholder="Username"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <MailOutlined className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                placeholder="Email"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <PhoneOutlined className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full focus:outline-none"
                placeholder="Phone"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start space-x-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default ProfileSettings;
