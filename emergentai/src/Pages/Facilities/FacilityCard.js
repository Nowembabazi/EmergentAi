import React, { useState } from 'react';

const FacilityCard = ({ facilityName }) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openUpdateModal = () => setIsUpdateModalOpen(true);
    const closeUpdateModal = () => setIsUpdateModalOpen(false);

    const openDeleteModal = () => setIsDeleteModalOpen(true);
    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">{facilityName}</h2>
            <div className="flex justify-between">
                <button 
                    onClick={openUpdateModal} 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Update Facility
                </button>
                <button 
                    onClick={openDeleteModal} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                    Delete Facility
                </button>
            </div>

            {/* Update Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Update {facilityName}</h2>
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

            {/* Delete Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Delete {facilityName}</h2>
                        <p>Are you sure you want to delete this facility?</p>
                        <div className="mt-4 flex justify-end">
                            <button 
                                onClick={closeDeleteModal} 
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition mr-2"
                            >
                                Cancel
                            </button>
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacilityCard;
