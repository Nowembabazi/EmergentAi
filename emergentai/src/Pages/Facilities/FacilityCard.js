import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import Ant Design icons
import Side from "../../components/Facilities/Side";
import TopNav from "../../components/Facilities/TopNav";

const FacilityCard = ({ facilityName }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleAddFacilityClick = () => {
    navigate("/facility-form"); // Navigate to the facility form route
  };

  return (
    <div className="flex h-screen">
      <Side className="w-1/4" /> {/* Adjust width as needed */}
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-4">
          <div>
            <button
              onClick={handleAddFacilityClick} // Call the function on click
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

            {isUpdateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                  <h2 className="text-lg font-semibold mb-4">
                    Update {facilityName}
                  </h2>
                  <p>Update facility details here.</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closeUpdateModal}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

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
          </div>

          <div className="bg-gray-100 shadow-lg rounded-lg px-8 py-6 mb-4">
            <h2 className="text-xl font-semibold mb-4">{facilityName}Case Hospital</h2>
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

            {isUpdateModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                  <h2 className="text-lg font-semibold mb-4">
                    Update {facilityName}
                  </h2>
                  <p>Update facility details here.</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closeUpdateModal}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

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
          </div>

          {/* Repeat similar structure for other facilities if needed */}

        </main>
      </div>
    </div>
  );
};

export default FacilityCard;
