import React, { useState } from "react";
import axios from "axios";

const GenerateReport = () => {
  const [testResults, setTestResults] = useState("Sputum Conversion");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Simulating an API call to fetch the data based on selected test result
    setTimeout(() => {
      const results = [
        {
          diagnosis: "TB Positive",
          testResult: "Sputum",
          medication: "Penicillin",
          duration: "14 days",
          allergies: "Irritation",
          symptoms: "Coughing",
          dateOfVisit: "12/04/2024",
        },
        {
          diagnosis: "TB Positive",
          testResult: "Sputum",
          medication: "Penicillin",
          duration: "7 days",
          allergies: "Irritation",
          symptoms: "Fever",
          dateOfVisit: "12/03/2024",
        },
        {
          diagnosis: "TB Positive",
          testResult: "Sputum",
          medication: "Penicillin",
          duration: "14 days",
          allergies: "Irritation",
          symptoms: "Coughing",
          dateOfVisit: "12/02/2024",
        },
        {
          diagnosis: "TB Positive",
          testResult: "Sputum",
          medication: "Penicillin",
          duration: "5 days",
          allergies: "Irritation",
          symptoms: "Coughing",
          dateOfVisit: "12/01/2024",
        },
      ];
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Generate Report</h2>

        <div className="flex items-center mb-6">
          <label htmlFor="testResults" className="mr-4">
            Test Results
          </label>
          <select
            id="testResults"
            value={testResults}
            onChange={(e) => setTestResults(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          >
            <option value="Sputum Conversion">Sputum Conversion</option>
            <option value="Blood Test">Blood Test</option>
            <option value="X-Ray">X-Ray</option>
          </select>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={handleSearch}
            className="bg-gray-200 text-black px-4 py-2 rounded"
          >
            {loading ? "Searching..." : "Search"}
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Print
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-4">Search Results</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-200">Diagnosis</th>
              <th className="p-4 bg-gray-200">Test Result</th>
              <th className="p-4 bg-gray-200">Medication</th>
              <th className="p-4 bg-gray-200">Duration</th>
              <th className="p-4 bg-gray-200">Allergies</th>
              <th className="p-4 bg-gray-200">Symptoms</th>
              <th className="p-4 bg-gray-200">Date of Visit</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{result.diagnosis}</td>
                <td className="p-4">{result.testResult}</td>
                <td className="p-4">{result.medication}</td>
                <td className="p-4">{result.duration}</td>
                <td className="p-4">{result.allergies}</td>
                <td className="p-4">{result.symptoms}</td>
                <td className="p-4">{result.dateOfVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenerateReport;
