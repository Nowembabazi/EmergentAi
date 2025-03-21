import React, { useState, useEffect } from 'react';
import SideNav from '../../components/Faculty/SideNav';
import TopNav from '../../components/Faculty/TopNav';

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
                dateOfCollection: '12/04/2024',
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
                testType: '', // Placeholder for additional test data
                presumptiveNo: '', // Placeholder for additional data
                tbNo: '', // Placeholder for additional data
                collectedBy: '', // Placeholder for additional data
                typeOfSpecimen: '', // Placeholder for additional data
                timeOfCollection: '', // Placeholder for additional data
                dateOfCollection: '', // Placeholder for additional data
            },
            laboratoryResults: {
                testNo: '', // Placeholder for additional data
                volume: '', // Placeholder for additional data
                specimenAppearance: '', // Placeholder for additional data
                results: '', // Placeholder for additional data
            },
        },
    ]);

    useEffect(() => {
        const fetchData = async () => {
            // Mock data fetching for patient information
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
                    dateOfVisit: '12/05/2024',
                },
            ];

            setPatientData(dummyPatientData);
            setMedicalRecords(dummyMedicalRecords);
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
        <div className="flex h-screen bg-gray-100">
            <SideNav />
            <div className="flex-1 flex flex-col">
                <TopNav />
                <main className="flex-1 p-8 overflow-auto">
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-7xl mx-auto">
                        {/* Bio Information */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Bio Information</h2>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate Report</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <p><strong>Patient ID:</strong> {patientData.patientID}</p>
                            <p><strong>First Name:</strong> {patientData.firstName}</p>
                            <p><strong>Last Name:</strong> {patientData.lastName}</p>
                            <p><strong>Age:</strong> {patientData.age}</p>
                            <p><strong>Date of Birth:</strong> {patientData.dob}</p>
                            <p><strong>Gender:</strong> {patientData.gender}</p>
                            <p><strong>Phone:</strong> {patientData.phone}</p>
                        </div>

                        {/* Files and Documents */}
                        <hr className="my-6" />
                        <h2 className="text-2xl font-bold mb-4">Files and Documents</h2>
                        <ul className="list-disc pl-6">
                            <li>Jenifer-X-ray.pdf</li>
                            <li>Jenifer-X-ray_scanned.jpeg</li>
                        </ul>

                        {/* Patient Progress */}
                        <hr className="my-6" />
                        <h2 className="text-2xl font-bold mt-4 mb-8">Patient Progress</h2>
                        <div className="relative mt-2 mb-5">
                            <div className="absolute w-full bg-gray-200 h-2 rounded-full"></div>
                            <div className="absolute bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                            <div className="absolute top-0 left-0 h-2 w-2 mb-4rounded-full bg-blue-500"></div>
                            <div className="absolute top-0 left-1/3 h-2 w-2 m-4 rounded-full bg-blue-500"></div>
                            <div className="absolute top-0 left-2/3 h-2 w-2  mb-4 rounded-full bg-blue-500"></div>
                            <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gray-400"></div>
                        </div>
                        <div className="flex justify-between mt-16 text-center text-sm">
                            <span>Dr. Jane Lule</span>
                            <span>Dr. Musa Bowe</span>
                            <span>Dr. John Mukibi</span>
                            <span>Dr. Mary Katali</span>
                        </div>

                        {/* Medical Records */}
                        <hr className="my-6" />
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Medical Records</h2>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">New Visit</button>
                        </div>
                        <table className="min-w-full bg-white">
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

                        {/* Test Results */}
                        <hr className="my-6" />
                        <h2 className="text-2xl font-bold mb-4">Test Results</h2>
                        <div>
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
                                        <div className="p-4 bg-white rounded-lg shadow-inner mt-2">
                                            <div className="grid grid-cols-2 gap-4">
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
                </main>
            </div>
        </div>
    );
};

export default PatientBio;
