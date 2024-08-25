// src/ReportGeneration.js
import React, { useState, useEffect } from "react";

const GenerateReport = () => {
  const [reportType, setReportType] = useState("");
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Sample data fetching function to simulate API call
    const fetchReports = async () => {
      const response = [
        { name: "Monthly Report Jan", date: "31/01/2024" },
        { name: "Monthly Report Jan", date: "31/01/2024" },
        { name: "Half Yearly Report", date: "31/01/2024" },
        { name: "Monthly Report Feb", date: "31/01/2024" },
        { name: "Monthly Report Mar", date: "31/01/2024" },
      ];
      setReports(response);
      setFilteredReports(response);
    };

    fetchReports();
  }, []);

  const handleGenerate = () => {
    // Functionality to generate report based on selected type
    if (reportType) {
      alert(`Generating ${reportType} report...`);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = reports.filter((report) =>
      report.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredReports(filtered);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Generate Report</h1>
      <div className="flex space-x-4 mb-4">
        <select
          className="p-2 border rounded w-1/3"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Monthly">Monthly Report</option>
          <option value="Quarterly">Quarterly Report</option>
          <option value="Half Yearly">Half Yearly Report</option>
          <option value="Yearly">Yearly Report</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Reports"
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded mb-4 w-full"
      />

      <h2 className="text-xl font-bold mb-2">Recent Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Report Name</th>
              <th className="py-2 px-4 border">Date Generated</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 border">{report.name}</td>
                <td className="py-2 px-4 border">{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component Placeholder */}
      <div className="flex justify-center mt-4">
        <span className="mx-2">Showing 5 results</span>
        <button className="px-2 py-1 border rounded">1</button>
        <button className="px-2 py-1 border rounded">2</button>
        <button className="px-2 py-1 border rounded">...</button>
        <button className="px-2 py-1 border rounded">9</button>
        <button className="px-2 py-1 border rounded">10</button>
      </div>
    </div>
  );
};

export default GenerateReport;
