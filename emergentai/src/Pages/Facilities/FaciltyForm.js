import React, { useState } from "react";
import Side from "../../components/Facilities/Side";
import TopNav from "../../components/Facilities/TopNav";

function FacilityForm() {
  const [formData, setFormData] = useState({
    facility: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    designationId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dummy API call
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <Side className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-10" />

      {/* Main Content Area */}
      <div className="flex-1 ml-6">
        {/* Fixed Top Navigation */}
        <TopNav className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-10" />
        
        {/* Content Area */}
        <div className=" p-4 bg-gray-100 min-h-screen flex items-center justify-center">
          <form
            className="w-full max-w-md bg-white p-6 shadow-md rounded"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700">Facility</label>
              <select
                name="facility"
                value={formData.facility}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a facility</option>
                <option value="Facility 1">Facility 1</option>
                <option value="Facility 2">Facility 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Designation ID *</label>
              <input
                type="text"
                name="designationId"
                value={formData.designationId}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              CREATE FACILITY ADMIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FacilityForm;
