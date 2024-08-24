import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../../components/Lab/Sidebar';
import TopNav from '../../components/Lab/TopNav';

const CompletedTests = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Hardcoded dummy data
  const dummyData = [
    { id: 1, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 2, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 3, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 4, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 5, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 6, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 7, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 8, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 9, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
    { id: 10, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', testType: 'Culture', resultStatus: 'Sent', dateAdded: '12/04/2024' },
  ];

  const [data] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const currentPageData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Handle the view details click
  const handleViewDetails = () => {
    navigate(`/view-tests`); // Navigate to the view-tests page with the specific test ID
  };

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <Sidebar className="w-64 bg-gray-800 text-white fixed h-full" />

      {/* Main content area */}
      <div className="flex-1 ml-6 flex flex-col">
        {/* Fixed Top Navigation */}
        <TopNav className="fixed top-0 left-64 right-0 bg-white shadow h-16 z-10" />

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto p-6 mt-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Completed Tests</h2>
          <p className="text-gray-600">View a log of history of the test records over time</p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left text-gray-500">Patient Name</th>
                  <th className="p-3 text-left text-gray-500">Age</th>
                  <th className="p-3 text-left text-gray-500">Gender</th>
                  <th className="p-3 text-left text-gray-500">Test Type</th>
                  <th className="p-3 text-left text-gray-500">Result Status</th>
                  <th className="p-3 text-left text-gray-500">Date Added</th>
                  <th className="p-3 text-left text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.age}</td>
                    <td className="p-3">{item.gender}</td>
                    <td className="p-3">{item.testType}</td>
                    <td className="p-3">{item.resultStatus}</td>
                    <td className="p-3">{item.dateAdded}</td>
                    <td className="p-3">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => handleViewDetails(item.id)} // Handle click event
                      >
                        View details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm">Showing {resultsPerPage} results out of {data.length}</p>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 border rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTests;
