import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Automatically registers all chart components
import Sideboard from '../../components/Manager/SideBoard';
import TopNav from '../../components/Manager/TopNav';

const ModelPerformance = () => {
  const [falseSputumData, setFalseSputumData] = useState({});
  const [trueSputumData, setTrueSputumData] = useState({});

  useEffect(() => {
    // Simulate fetching data for the graphs
    const fetchChartData = () => {
      const labels = ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024'];

      const falseSputum = {
        labels: labels,
        datasets: [
          {
            label: 'Model Predictions',
            data: [0, 1, 0, 1, 0, 1],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'True Conversions',
            data: [1, 0, 1, 0, 1, 0],
            borderColor: 'rgb(255, 205, 86)',
            borderWidth: 2,
            fill: false,
          }
        ],
      };

      const trueSputum = {
        labels: labels,
        datasets: [
          {
            label: 'Model Predictions',
            data: [1, 1, 1, 1, 1, 1],
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'True Conversions',
            data: [1, 1, 1, 1, 1, 1],
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
            fill: false,
          }
        ],
      };

      setFalseSputumData(falseSputum);
      setTrueSputumData(trueSputum);
    };

    fetchChartData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sideboard className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white" />
      <div className="flex-1 flex flex-col ml-6">
        <TopNav className="fixed top-0 left-64 right-0 bg-gray-700 text-white p-4 z-10" />
        <div className="pt-8 flex-1 overflow-auto p-6">
          <h2 className="text-xl font-semibold mb-4">Model Performance Vs Real Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">False Sputum Conversions</h3>
              <Line data={falseSputumData} />
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">True Sputum Conversions</h3>
              <Line data={trueSputumData} />
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="bg-white p-4 rounded shadow w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Model Version</h3>
              <p>Version: 1.2.3</p>
              <p>Last Updated: 01/06/2024</p>
              <a href="#" className="text-blue-500 underline">View Change Logs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPerformance;
