import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Lab/Sidebar";
import TopNav from "../../components/Lab/TopNav";

const Lab = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://your-api-endpoint.com/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
              onClick={handleAddPatientClick}
              className="bg-blue-900 text-white px-4 py-2 rounded-full"
            >
              Add Patient
            </button>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {/* Pending Tests Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Pending Tests</p>
              <h3 className="text-3xl font-bold">1230</h3>
              <p className="text-green-500 mt-2">▲ 3.2%</p>
            </div>

            {/* Completed Tests Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Completed Tests</p>
              <h3 className="text-3xl font-bold">20</h3>
              <p className="text-red-500 mt-2">▼ 0.2%</p>
            </div>

            {/* Total Tests Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500">Total Tests</p>
              <h3 className="text-3xl font-bold">10</h3>
              <p className="text-red-500 mt-2">▼ 0.1%</p>
            </div>
          </div>

          {/* Incoming Tests Table */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Incoming Tests</h3>
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

export default Lab;
