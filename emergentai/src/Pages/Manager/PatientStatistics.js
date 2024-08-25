// src/PatientDashboard.js
import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const PatientStatistics = () => {
  // Bar chart data for "Patients Over Time"
  const barData = {
    labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024"],
    datasets: [
      {
        label: "Patients Over Time",
        data: [50, 30, 20, 25],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
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
        text: 'Patients Over Time',
      },
    },
  };

  // Pie chart data for "Sputum Conversions"
  const pieData = {
    labels: ["Positive Results", "Negative Results"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  // Line chart data for "Positive Test Results Over Time"
  const lineDataPositive = {
    labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024"],
    datasets: [
      {
        label: "Positive Test Results",
        data: [1, 3, 4, 2, 1, 2],
        borderColor: "#36A2EB",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Line chart data for "TB Symptoms Severity Over Time"
  const lineDataSymptoms = {
    labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024"],
    datasets: [
      {
        label: "Symptoms Severity",
        data: [1, 2, 4, 3, 2, 1],
        borderColor: "#4BC0C0",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Patient Statistics Summary</h1>
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
      <h2 className="text-2xl font-bold mt-8 mb-4">Patient Health Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart for Positive Test Results */}
        <div className="bg-white p-4 rounded shadow">
          <Line data={lineDataPositive} />
        </div>
        {/* Line Chart for TB Symptoms Severity */}
        <div className="bg-white p-4 rounded shadow">
          <Line data={lineDataSymptoms} />
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics;
