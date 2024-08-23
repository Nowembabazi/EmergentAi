import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientBio = () => {
    const [patientData, setPatientData] = useState({});
    const [medicalRecords, setMedicalRecords] = useState([]);
    const [testResults, setTestResults] = useState([
        {
            visit: 'Visit 1: Baseline month',
            isOpen: false,
            specimenDetails: {
                testType: 'Culture',
                presumptiveNo: '001',
                tbNo: '001',
                collectedBy: 'Dr. Kisubi Musa',
                typeOfSpecimen: 'Sputum',
                timeOfCollection: '10:00 AM',
                dateOfCollection: '10:00 AM',
            },
            laboratoryResults: {
                testNo: '001',
                volume: '10ml',
                specimenAppearance: 'Clear',
                results: 'MTB Detected, Rifampicin sensitive detected',
            },
        },
        {
            visit: 'Visit 2: Month 2',
            isOpen: false,
            specimenDetails: {
                testType: '',
                presumptiveNo: '',
                tbNo: '',
                collectedBy: '',
                typeOfSpecimen: '',
                timeOfCollection: '',
                dateOfCollection: '',
            },
            laboratoryResults: {
                testNo: '',
                volume: '',
                specimenAppearance: '',
                results: '',
            },
        },
    ]);

    useEffect(() => {
        // Simulate fetching data from a dummy API
        const fetchData = async () => {
            try {
                const patientResponse = await axios.get('https://dummyapi.com/patient/01');
                const recordsResponse = await axios.get('https://dummyapi.com/patient/01/records');

                // Dummy data
                const dummyPatientData = {
                    patientID: '01',
                    firstName: 'Jenifer',
                    lastName: 'Nakawunde',
                    age: '29 years',
                    dob: '12/04/2024',
                    gender: 'Female',
                    phone: '0708210793',
                };
                const dummyMedicalRecords = [
                    {
                        diagnosis: 'TB Positive',
                        testResult: 'TB Active',
                        medication: 'Penicillin',
                        duration: '14 days',
                        symptoms: 'Coughing',
                        dateOfVisit: '12/04/2024',
                    },
                    {
                        diagnosis: 'TB Positive',
                        testResult: 'TB Active',
                        medication: 'Penicillin',
                        duration: '14 days',
                        symptoms: 'Coughing',
                        dateOfVisit: '12/04/2024',
                    },
                ];

                // Set dummy data
                setPatientData(dummyPatientData);
                setMedicalRecords(dummyMedicalRecords);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const toggleCollapse = (index) => {
        setTestResults((prevResults) =>
            prevResults.map((result, idx) =>
                idx === index ? { ...result, isOpen: !result.isOpen } : result
            )
        );
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                {/* Existing Sections */}
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Bio Information</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate Report</button>
                </div>
                <div className="mt-4">
                    <p><strong>PatientID:</strong> {patientData.patientID}</p>
                    <p><strong>First Name:</strong> {patientData.firstName}</p>
                    <p><strong>Last Name:</strong> {patientData.lastName}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Date of Birth:</strong> {patientData.dob}</p>
                    <p><strong>Gender:</strong> {patientData.gender}</p>
                    <p><strong>Phone:</strong> {patientData.phone}</p>
                </div>
                <hr className="my-4" />
                <h2 className="text-xl font-bold">Files and Documents</h2>
                <ul className="list-disc pl-5">
                    <li>Jenifer-X-ray.pdf</li>
                    <li>Jenifer-X-ray_scanned.jpeg</li>
                </ul>
                <hr className="my-4" />
                <h2 className="text-xl font-bold">Patient Progress</h2>
                <div className="flex justify-between items-center mt-4">
                    <span>Baseline Month Visit</span>
                    <span>Tests Conducted</span>
                    <span>Medication Prescribed</span>
                    <span>Follow-up Visit</span>
                </div>
                <div className="relative mt-2">
                    <div className="absolute w-full bg-gray-200 h-2"></div>
                    <div className="absolute bg-blue-500 h-2" style={{ width: '70%' }}></div>
                    <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 left-1/3 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 left-2/3 h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gray-400"></div>
                </div>
                <div className="flex justify-between mt-2 text-center">
                    <span>Dr. Jane Lule</span>
                    <span>Dr. Musa Bowe</span>
                    <span>Dr. John Mukibi</span>
                    <span>Dr. Mary Katali</span>
                </div>
                <hr className="my-4" />
                <h2 className="text-xl font-bold">Medical Records</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">New Visit</button>
                <table className="min-w-full bg-white mt-4">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border">Diagnosis</th>
                            <th className="py-2 px-4 border">Test Result</th>
                            <th className="py-2 px-4 border">Medication</th>
                            <th className="py-2 px-4 border">Duration</th>
                            <th className="py-2 px-4 border">Symptoms</th>
                            <th className="py-2 px-4 border">Date of Visit</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicalRecords.map((record, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border">{record.diagnosis}</td>
                                <td className="py-2 px-4 border">{record.testResult}</td>
                                <td className="py-2 px-4 border">{record.medication}</td>
                                <td className="py-2 px-4 border">{record.duration}</td>
                                <td className="py-2 px-4 border">{record.symptoms}</td>
                                <td className="py-2 px-4 border">{record.dateOfVisit}</td>
                                <td className="py-2 px-4 border">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    <button className="bg-green-500 text-white px-2 py-1 rounded ml-2">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr className="my-4" />

                {/* New Section: Test Results */}
                <h2 className="text-xl font-bold">Test Results</h2>
                <div className="mt-4">
                    {testResults.map((result, index) => (
                        <div key={index} className="border-b border-gray-300 mb-4">
                            <button
                                onClick={() => toggleCollapse(index)}
                                className="flex justify-between w-full bg-gray-100 px-4 py-2 text-left text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-200"
                            >
                                {result.visit}
                                <span>{result.isOpen ? '▼' : '►'}</span>
                            </button>
                            {result.isOpen && (
                                <div className="p-4 bg-white rounded-lg shadow-inner">
                                    <div className="flex justify-between">
                                        <div>
                                            <p><strong>Test Type:</strong> {result.specimenDetails.testType}</p>
                                            <p><strong>Presumptive No:</strong> {result.specimenDetails.presumptiveNo}</p>
                                            <p><strong>TB No:</strong> {result.specimenDetails.tbNo}</p>
                                            <p><strong>Collected By:</strong> {result.specimenDetails.collectedBy}</p>
                                        </div>
                                        <div>
                                            <p><strong>Type of Specimen:</strong> {result.specimenDetails.typeOfSpecimen}</p>
                                            <p><strong>Time of collection:</strong> {result.specimenDetails.timeOfCollection}</p>
                                            <p><strong>Date of collection:</strong> {result.specimenDetails.dateOfCollection}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p><strong>Test No:</strong> {result.laboratoryResults.testNo}</p>
                                        <p><strong>Volume:</strong> {result.laboratoryResults.volume}</p>
                                        <p><strong>Specimen Appearance:</strong> {result.laboratoryResults.specimenAppearance}</p>
                                        <p><strong>Results:</strong> {result.laboratoryResults.results}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientBio;
