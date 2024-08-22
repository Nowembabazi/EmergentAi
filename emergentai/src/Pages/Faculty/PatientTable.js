import React, { useState, useEffect } from "react";
import axios from "axios";

const PatientTable = () => {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      const fetchedPatients = Array.from({ length: 1230 }, (_, index) => ({
        id: index + 1,
        fullName: "Jenifer Nakawunde",
        lastVisit: "12/04/2024",
        history: "View",
        result: "TB Positive",
        nextVisit: "12/05/2024",
      }));

      setPatients(fetchedPatients);
    }, 1000);
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Patient Details ({patients.length})
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Patient
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200">PatientID</th>
              <th className="p-4 bg-gray-200">Full Name</th>
              <th className="p-4 bg-gray-200">Last Visit</th>
              <th className="p-4 bg-gray-200">History</th>
              <th className="p-4 bg-gray-200">Result</th>
              <th className="p-4 bg-gray-200">Next Visit</th>
              <th className="p-4 bg-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="p-4">{patient.id.toString().padStart(2, "0")}</td>
                <td className="p-4">{patient.fullName}</td>
                <td className="p-4">{patient.lastVisit}</td>
                <td className="p-4">
                  <button className="bg-yellow-500 text-white px-4 py-1 rounded">
                    {patient.history}
                  </button>
                </td>
                <td className="p-4 text-red-500">{patient.result}</td>
                <td className="p-4">{patient.nextVisit}</td>
                <td className="p-4">
                  <button className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            Showing {resultsPerPage} results out of {patients.length}
          </span>
          <div className="flex items-center">
            {[...Array(Math.ceil(patients.length / resultsPerPage)).keys()].map(
              (number) => (
                <button
                  key={number + 1}
                  onClick={() => handlePageChange(number + 1)}
                  className={`px-3 py-1 mx-1 rounded ${
                    currentPage === number + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
