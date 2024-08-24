// NewTests.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../../components/Lab/Sidebar';
import TopNav from '../../components/Lab/TopNav';

const NewTests = () => {
  const navigate = useNavigate(); // Hook for navigation
  const dummyData = [
    { id: 1, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 2, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 3, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 4, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 5, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 6, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
    { id: 7, name: 'Nakawunde Jenifer', age: 22, gender: 'Female', phone: '0708210793', testType: 'Culture' },
  ];

  const [data] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const currentPageData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handleViewDetails = () => {
    navigate(`/view-tests`); 
  };
  

  return (
    <div className="flex h-full">
      <Sidebar className="w-68 bg-gray-800 text-white fixed h-full"/>
      <div className="flex-1">
        <TopNav />
        <div className="p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-700">New Tests</h2>
          <p className="text-gray-500">View a log of history of the test records over time</p>
          
          <div className="mt-4 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left text-gray-500">Patient Name</th>
                  <th className="p-3 text-left text-gray-500">Age</th>
                  <th className="p-3 text-left text-gray-500">Gender</th>
                  <th className="p-3 text-left text-gray-500">Phone Number</th>
                  <th className="p-3 text-left text-gray-500">Test Type</th>
                  <th className="p-3 text-left text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.age}</td>
                    <td className="p-3">{item.gender}</td>
                    <td className="p-3">{item.phone}</td>
                    <td className="p-3">{item.testType}</td>
                    <td className="p-3">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={() => handleViewDetails(item.id)}
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

export default NewTests;
