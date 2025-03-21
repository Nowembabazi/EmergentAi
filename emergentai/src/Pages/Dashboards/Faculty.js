import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../components/Doctor/Sidebar";
import TopNav from "../../components/Doctor/TopNav";

const Faculty = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetching data from the API (Replace with your actual API endpoint)
  useEffect(() => {
    fetch("https://your-api-endpoint.com/appointments") // Replace with actual API
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle navigation
  const handleAddPatientClick = () => {
    navigate("/patient-form");
  };


  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNav />
        
        <main className="p-8 bg-gray-100 flex-1 ml-6 mr-6 mt-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-semibold">Hello Jane</h2>
              <p className="text-gray-400">Patient reports are updated in real-time always.</p>
            </div>
            <button
              onClick={handleAddPatientClick} // Handle button click
              className="bg-blue-900 text-white px-4 py-2 rounded-full"
            >
              Add Patient
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Total Patients</p>
              <h3 className="text-2xl font-bold">1230</h3>
              <p className="text-green-500">▲ 3.2%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-500">Positive TB Cases</p>
              <h3 className="text-2xl font-bold">20</h3>
              <p className="text-red-500">▼ 0.2%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-300">Negative TB Cases</p>
              <h3 className="text-2xl font-bold">10</h3>
              <p className="text-red-500">▼ 0.1%</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Today's Appointments</h3>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 border-b">Patient Name</th>
                  <th className="py-2 px-4 bg-gray-200 border-b">Time</th>
                  <th className="py-2 px-4 bg-gray-200 border-b">Contact</th>
                  <th className="py-2 px-4 bg-gray-200 border-b">Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{appointment.name}</td>
                    <td className="py-2 px-4 border-b">{appointment.time}</td>
                    <td className="py-2 px-4 border-b">{appointment.contact}</td>
                    <td className="py-2 px-4 border-b">{appointment.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Faculty;
