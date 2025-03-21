import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; // Import Ant Design icons
import Side from "../../components/Facilities/Side";
import TopNav from "../../components/Facilities/TopNav";

const FacilityCard = ({ facilityName }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for add facility modal
  const [facilityDetails, setFacilityDetails] = useState({
    name: "",
    district: "",
    parish: "",
    village: "",
    telephone: "",
  });

  const [newFacilityDetails, setNewFacilityDetails] = useState({
    name: "",
    district: "",
    parish: "",
    village: "",
    telephone: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openAddModal = () => setIsAddModalOpen(true); // Open add facility modal
  const closeAddModal = () => setIsAddModalOpen(false); // Close add facility modal

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFacilityDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleNewFacilityInputChange = (e) => {
    const { name, value } = e.target;
    setNewFacilityDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateFacility = () => {
    // Here you would handle the facility update logic, like making an API request
    console.log("Updated Facility Details:", facilityDetails);
    closeUpdateModal();
  };

  const handleAddFacility = () => {
    // Logic to add a new facility, e.g., API request
    console.log("New Facility Details:", newFacilityDetails);
    closeAddModal();
  };

  return (
    <div className="flex h-screen">
      <Side className="w-1/4" /> {/* Adjust width as needed */}
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-4">
          <div>
            <button
              onClick={openAddModal} // Call the function to open the add facility modal
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mb-4 hover:bg-blue-600 transition"
            >
              Add Facility
            </button>
          </div>

          <div className="bg-gray-100 shadow-lg rounded-lg px-8 py-6 mb-4">
            <h2 className="text-xl font-semibold mb-4">{facilityName}Mulago</h2>
            <div className="flex justify-between mb-4">
              <button
                onClick={openUpdateModal}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center"
              >
                <EditOutlined className="mr-2" />
                Update Facility
              </button>
              <button
                onClick={openDeleteModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex items-center"
              >
                <DeleteOutlined className="mr-2" />
                Delete Facility
              </button>
            </div>

            {/* Update Facility Modal */}
            {isUpdateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                  <h2 className="text-lg font-semibold mb-4">
                    Update Facility Details
                  </h2>
                  <form>
                    {/* Existing form fields */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Facility Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={facilityDetails.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        District
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={facilityDetails.district}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Parish
                      </label>
                      <input
                        type="text"
                        name="parish"
                        value={facilityDetails.parish}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Village
                      </label>
                      <input
                        type="text"
                        name="village"
                        value={facilityDetails.village}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Telephone Number
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        value={facilityDetails.telephone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={closeUpdateModal}
                        type="button"
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition mr-2"
                      >
                        Close
                      </button>
                      <button
                        onClick={handleUpdateFacility}
                        type="button"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Delete Facility Modal */}
            {isDeleteModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                  <h2 className="text-lg font-semibold mb-4">
                    Delete {facilityName}
                  </h2>
                  <p>Are you sure you want to delete this facility?</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closeDeleteModal}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition mr-2"
                    >
                      Cancel
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Add Facility Modal */}
            {isAddModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                  <h2 className="text-lg font-semibold mb-4">
                    Add New Facility
                  </h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Facility Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={newFacilityDetails.name}
                        onChange={handleNewFacilityInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        District
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={newFacilityDetails.district}
                        onChange={handleNewFacilityInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Parish
                      </label>
                      <input
                        type="text"
                        name="parish"
                        value={newFacilityDetails.parish}
                        onChange={handleNewFacilityInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Village
                      </label>
                      <input
                        type="text"
                        name="village"
                        value={newFacilityDetails.village}
                        onChange={handleNewFacilityInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Telephone Number
                      </label>
                      <input
                        type="text"
                        name="telephone"
                        value={newFacilityDetails.telephone}
                        onChange={handleNewFacilityInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={closeAddModal}
                        type="button"
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition mr-2"
                      >
                        Close
                      </button>
                      <button
                        onClick={handleAddFacility}
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                      >
                        Add Facility
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacilityCard;
