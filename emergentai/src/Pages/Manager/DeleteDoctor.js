import React, { useState, useEffect } from 'react';
import Sideboard from '../../components/Manager/SideBoard';
import TopNav from '../../components/Manager/TopNav';

const DeleteDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);

  // Simulate fetching data
  useEffect(() => {
    const dummyData = [
      { DoctorID: "01", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist" },
      { DoctorID: "02", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Infectious Diseases" },
      { DoctorID: "03", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Pulmonologist" },
      { DoctorID: "04", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist" },
      { DoctorID: "05", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist" },
      { DoctorID: "06", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "General Physician" },
      { DoctorID: "07", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist" },
      { DoctorID: "08", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist" },
    ];
    setDoctors(dummyData);
  }, []);

  const handleDeleteClick = (doctorID) => {
    setDoctorToDelete(doctorID);
    setShowModal(true);
  };

  const handleDelete = () => {
    const filteredDoctors = doctors.filter((doctor) => doctor.DoctorID !== doctorToDelete);
    setDoctors(filteredDoctors);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setDoctorToDelete(null);
  };

  return (
    <div className="flex h-screen">
      <Sideboard className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white" />
      <div className="flex-1 flex flex-col ml-6">
        <TopNav className="fixed top-0 left-64 right-0 bg-gray-700 text-white p-4 z-10" />
        <div className="pt-8 flex-1 overflow-auto p-6">
          <h2 className="text-xl font-semibold mb-4">Delete Doctors</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2">DoctorID</th>
                <th className="border px-4 py-2">Doctor Name</th>
                <th className="border px-4 py-2">Contact</th>
                <th className="border px-4 py-2">Specialization</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.DoctorID}>
                  <td className="border px-4 py-2">{doctor.DoctorID}</td>
                  <td className="border px-4 py-2">{doctor.DoctorName}</td>
                  <td className="border px-4 py-2">{doctor.Contact}</td>
                  <td className="border px-4 py-2">{doctor.Specialization}</td>
                  <td className="border px-4 py-2">
                    <button 
                      className="bg-red-500 text-white px-3 py-1 rounded" 
                      onClick={() => handleDeleteClick(doctor.DoctorID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
                <p>Are you sure you want to delete this doctor?</p>
                <div className="mt-4 flex justify-end space-x-4">
                  <button 
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-between items-center">
            <p>Showing 10 results out of 1230</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 border rounded">2</button>
              <span>...</span>
              <button className="px-3 py-1 border rounded">9</button>
              <button className="px-3 py-1 border rounded">10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctor;
