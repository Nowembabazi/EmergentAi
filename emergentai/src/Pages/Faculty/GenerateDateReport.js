import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Doctor/Sidebar';

const GenerateDateReport = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('https://dummyapi.com/reports', {
                params: {
                    from: fromDate,
                    to: toDate,
                },
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Setting dummy data for the example
            setResults([
                {
                    diagnosis: 'TB Positive',
                    testResult: 'TB Active',
                    medication: 'Penicillin',
                    duration: '14 days',
                    allergies: 'Irritation',
                    symptoms: 'Coughing',
                    dateOfVisit: '12/04/2024',
                },
                {
                    diagnosis: 'TB Positive',
                    testResult: 'TB Inactive',
                    medication: 'Penicillin',
                    duration: '7 days',
                    allergies: 'Irritation',
                    symptoms: 'Fever',
                    dateOfVisit: '12/03/2024',
                },
                {
                    diagnosis: 'TB Positive',
                    testResult: 'TB Active',
                    medication: 'Penicillin',
                    duration: '14 days',
                    allergies: 'Irritation',
                    symptoms: 'Coughing',
                    dateOfVisit: '12/02/2024',
                },
                {
                    diagnosis: 'TB Positive',
                    testResult: 'TB Inactive',
                    medication: 'Penicillin',
                    duration: '5 days',
                    allergies: 'Irritation',
                    symptoms: 'Coughing',
                    dateOfVisit: '12/01/2024',
                },
            ]);
        }
    };

    return (
        <>
        <Sidebar />
            <div className="p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-4">Generate Report</h2>
                <div className="flex mb-4">
                    <button className="mr-4 text-blue-500">Date</button>
                    <button className="text-gray-500">Tests</button>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm">From</label>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm">To</label>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={handleSearch}
                        className="bg-gray-200 px-4 py-2 rounded text-gray-700"
                    >
                        Search
                    </button>
                    <button className="bg-blue-500 px-4 py-2 rounded text-white">
                        Print
                    </button>
                </div>
            </div>

            {results.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">Search Results</h3>
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border">Diagnosis</th>
                                <th className="py-2 px-4 border">Test Result</th>
                                <th className="py-2 px-4 border">Medication</th>
                                <th className="py-2 px-4 border">Duration</th>
                                <th className="py-2 px-4 border">Allergies</th>
                                <th className="py-2 px-4 border">Symptoms</th>
                                <th className="py-2 px-4 border">Date of Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index} className="text-center">
                                    <td className="py-2 px-4 border">{result.diagnosis}</td>
                                    <td className="py-2 px-4 border">{result.testResult}</td>
                                    <td className="py-2 px-4 border">{result.medication}</td>
                                    <td className="py-2 px-4 border">{result.duration}</td>
                                    <td className="py-2 px-4 border">{result.allergies}</td>
                                    <td className="py-2 px-4 border">{result.symptoms}</td>
                                    <td className="py-2 px-4 border">{result.dateOfVisit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        </>
      
    );
};

export default GenerateDateReport;
