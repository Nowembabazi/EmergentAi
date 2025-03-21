// src/Dashboard.js
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import TopNav from "../../components/Manager/TopNav";
import Sideboard from "../../components/Manager/SideBoard";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Manager = () => {
  const barData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "TB Active",
        data: [15, 10, 25, 32, 8, 5, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "TB Inactive",
        data: [5, 2, 7, 10, 2, 1, 10],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patient Statistics',
      },
    },
  };

  // Data for the pie chart
  const pieData = {
    labels: ["Total Recovered", "Ongoing Cases"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <Sideboard className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white" />
      <div className="flex-1 flex flex-col ml-64">
        <TopNav className="fixed top-0 left-64 right-0 bg-gray-700 text-white p-4 z-10" />
        <div className="pt-16 flex-1 overflow-auto p-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Hello Jane</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Doctor</button>
          </header>
          <p className="text-gray-600 mb-4">Patient reports are updated in real time always</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-white p-4 rounded shadow">
              <Bar data={barData} options={barOptions} />
            </div>
            {/* Pie Chart */}
            <div className="bg-white p-4 rounded shadow">
              <Pie data={pieData} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Doctor Statistics</h2>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="border-b p-2">Doctor Name</th>
                    <th className="border-b p-2">Number of Patients</th>
                    <th className="border-b p-2">Total Recovered Patients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b p-2">Kizza Frank</td>
                    <td className="border-b p-2">50</td>
                    <td className="border-b p-2">20</td>
                  </tr>
                  <tr>
                    <td className="border-b p-2">Kizza Frank</td>
                    <td className="border-b p-2">50</td>
                    <td className="border-b p-2">20</td>
                  </tr>
                  <tr>
                    <td className="border-b p-2">Kizza Frank</td>
                    <td className="border-b p-2">50</td>
                    <td className="border-b p-2">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Total Recovered Patients</h2>
              <Pie data={pieData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
