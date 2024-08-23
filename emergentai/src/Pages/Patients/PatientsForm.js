import React, { useState } from "react";
import TopNav from "../../components/Patient/TopNav";
import Sidebar from "../../components/Patient/Sidebar";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    age: "",
    gender: "Female",
    district: "",
    subCounty: "",
    parish: "",
    village: "",
    nearestHealthUnit: "",
    nin: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.age) tempErrors.age = "Age is required";
    if (!formData.district) tempErrors.district = "District is required";
    if (!formData.subCounty) tempErrors.subCounty = "Sub-County is required";
    if (!formData.parish) tempErrors.parish = "Parish is required";
    if (!formData.village) tempErrors.village = "Village is required";
    if (!formData.nearestHealthUnit)
      tempErrors.nearestHealthUnit = "Nearest Health Unit is required";
    if (!formData.nin) tempErrors.nin = "NIN is required";
    if (!formData.nextOfKin) tempErrors.nextOfKin = "Next of Kin is required";
    if (!formData.nextOfKinPhoneNumber)
      tempErrors.nextOfKinPhoneNumber = "Next of Kin Phone Number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data to API
      fetch("/api/submit-patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // Handle successful submission
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
        });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-white p-4 rounded-lg shadow-md mt-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-600">Add Patient</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">A. Bio Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">B. Address of the Patient</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.district && (
                    <p className="text-red-500 text-sm mt-1">{errors.district}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-600">Sub-County</label>
                  <input
                    type="text"
                    name="subCounty"
                    value={formData.subCounty}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.subCounty && (
                    <p className="text-red-500 text-sm mt-1">{errors.subCounty}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Parish</label>
                  <input
                    type="text"
                    name="parish"
                    value={formData.parish}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.parish && (
                    <p className="text-red-500 text-sm mt-1">{errors.parish}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Village</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.village && (
                    <p className="text-red-500 text-sm mt-1">{errors.village}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Nearest Health Unit</label>
                  <input
                    type="text"
                    name="nearestHealthUnit"
                    value={formData.nearestHealthUnit}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.nearestHealthUnit && (
                    <p className="text-red-500 text-sm mt-1">{errors.nearestHealthUnit}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">NIN</label>
                  <input
                    type="text"
                    name="nin"
                    value={formData.nin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.nin && (
                    <p className="text-red-500 text-sm mt-1">{errors.nin}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Next of Kin</label>
                  <input
                    type="text"
                    name="nextOfKin"
                    value={formData.nextOfKin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.nextOfKin && (
                    <p className="text-red-500 text-sm mt-1">{errors.nextOfKin}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-1 text-gray-600 font-medium">Next of Kin Phone Number</label>
                  <input
                    type="text"
                    name="nextOfKinPhoneNumber"
                    value={formData.nextOfKinPhoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {errors.nextOfKinPhoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.nextOfKinPhoneNumber}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Save to continue
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PatientForm;
