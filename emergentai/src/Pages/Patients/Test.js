import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Patient/Sidebar";
import TopNav from "../../components/Patient/TopNav";

const Test = () => {
  const [records, setRecords] = useState([]); // Holds the test records
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [recordsPerPage] = useState(7); // Number of records per page

  // useEffect to fetch data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://api.example.com/test-records');
  //     const data = await response.json();
  //     setRecords(data);
  //   };
  //   fetchData();
  // }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(records.length / recordsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-2">Test Record List</h2>
            <p className="text-sm text-gray-500 mb-6">
              View a log of history of your test records over time
            </p>

            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 bg-gray-100">Type of Test</th>
                  <th className="px-4 py-2 text-left text-gray-600 bg-gray-100">Result</th>
                  <th className="px-4 py-2 text-left text-gray-600 bg-gray-100">Diagnosis</th>
                  <th className="px-4 py-2 text-left text-gray-600 bg-gray-100">Date of Test</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((record, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{record.typeOfTest}</td>
                    <td className="px-4 py-2">{record.result}</td>
                    <td className="px-4 py-2">{record.diagnosis}</td>
                    <td className="px-4 py-2">{record.dateOfTest}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">
                Showing {currentRecords.length} results
              </p>

              <div className="flex space-x-2">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Test;
