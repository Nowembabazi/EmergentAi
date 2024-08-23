import React, { useState, useEffect } from "react";
import { UserOutlined, MailOutlined, PhoneOutlined, SettingOutlined, BellOutlined, GlobalOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Modal, Input } from "antd";
import { Link } from "react-router-dom";
import SideNav from "../../components/Faculty/SideNav";
import TopNav from "../../components/Faculty/TopNav";

const LanguageSettings = () => {
  const [formData, setFormData] = useState({
    username: "Jane Carol",
    email: "jane@gmail.com",
    phone: "+256708210796",
    language: "en", // Default language
  });
  
  const [languages, setLanguages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [password, setPassword] = useState(""); 

  // Fetch list of languages from API
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all"); // Example API that includes language data
        const languageSet = new Set();
        response.data.forEach(country => {
          Object.values(country.languages || {}).forEach(lang => languageSet.add(lang));
        });
        setLanguages([...languageSet]);
      } catch (error) {
        console.error("Failed to fetch languages", error);
      }
    };

    fetchLanguages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showModal = () => {
    setIsModalVisible(true); // Show modal
  };

  const handleOk = async () => {
    if (!password) {
      alert("Please enter your password.");
      return;
    }
    setIsModalVisible(false);
    try {
      const response = await axios.delete("/api/delete-account", {
        data: { password },
      });
      alert("Account deleted successfully!");
    } catch (error) {
      console.error("Failed to delete account", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Hide modal
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
    <div className="flex h-screen overflow-hidden">
      <SideNav />

      <div className="flex-1 flex flex-col">
        <TopNav />

        <div className="flex-1 overflow-y-auto pt-16 pb-8 bg-gray-100">
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            <div className="bg-white shadow-md rounded-lg p-6 flex space-x-4">
              {/* Left Panel */}
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
                    <button className="w-full py-2 px-2 text-left text-white bg-blue-500 rounded-md flex items-center">
                      <SettingOutlined className="mr-2" />
                      Profile Settings
                    </button>
                  </Link>
                  <Link to="/notification-settings">
                    <button className="w-full py-2 text-left text-gray-700 flex items-center">
                      <BellOutlined className="mr-2" />
                      Notification Preferences
                    </button>
                  </Link>
                  <Link to="/language-settings">
                    <button className="w-full py-2 text-left text-gray-700 flex items-center">
                      <GlobalOutlined className="mr-2" />
                      Language Preferences
                    </button>
                  </Link>
                  <button
                    className="w-full py-2 text-left text-gray-700 flex items-center"
                    onClick={showModal}
                  >
                    <DeleteOutlined className="mr-2" />
                    Delete Account
                  </button>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 max-w-xl">
                <h2 className="text-xl font-bold mb-4 text-gray-600">Language Preferences</h2>
                <div className="space-y-6">
                  {/* Language Dropdown */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full focus:outline-none"
                    >
                      {languages.map((language, index) => (
                        <option key={index} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>
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
        </div>
      </div>
      <Modal
        title="Confirm Deletion"
        open={isModalVisible} // Use "open" instead of "visible"
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>Please enter your password to confirm:</p>
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="text-red-500 mt-2">
          This action will permanently delete your account.
        </p>
      </Modal>
    </div>
  );
};

export default LanguageSettings;
