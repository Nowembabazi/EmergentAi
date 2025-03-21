import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Lab/Sidebar';
import TopNav from '../../components/Lab/TopNav';

const ViewTests = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const data = {
        patientName: 'Nakawunde Jenifer',
        age: 29,
        gender: 'Female',
        phone: '0708210793',
        reasonForExamination: 'Follow up Treatment month',
        testType: 'Culture',
        presumptiveNo: '001',
        tbNo: '001',
        dateOfCollection: '12/04/2024',
        timeOfCollection: '10:00 AM',
        typeOfSpecimen: 'Sputum',
        collectedBy: 'Dr. Isma Bukenya',
        testNo: '001',
        volume: '10',
        specimenAppearance: 'Normal',
        appearance: 'Normal'
      };

      setPatientData(data);
    };

    fetchData();
  }, []);

  if (!patientData) {
    return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="flex h-screen font-sans">
      {/* Fixed Sidebar */}
      <Sidebar className="w-64 bg-gray-800 text-white fixed h-full" />
      
      {/* Main content area */}
      <div className="flex-1 ml-6 flex flex-col">
        {/* Fixed Top Navigation */}
        <TopNav className="fixed top-0 left-64 right-0 bg-white shadow-md h-16 z-10" />
        
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto p-6 mt-8 bg-gray-200">
          <h2 className="text-3xl font-bold mb-6 bg-gray-100 text-gray-700 text-raleway">Completed Tests</h2>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 bg-gray-100 text-gray-700">Patient Details</h3>
              <p>Patient Name: <span className="font-medium">{patientData.patientName}</span> &emsp; Age: <span className="font-medium">{patientData.age} years</span></p>
              <p>Gender: <span className="font-medium">{patientData.gender}</span> &emsp; Phone: <span className="font-medium">{patientData.phone}</span></p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2  bg-gray-100 text-gray-700">Test Request Details</h3>
              <p>Reason for Examination: <span className="font-medium">{patientData.reasonForExamination}</span> &emsp; Test Type: <span className="font-medium">{patientData.testType}</span></p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 bg-gray-100 text-gray-700">Specimen Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium">Presumptive No</div>
                <div>{patientData.presumptiveNo}</div>

                <div className="font-medium">TB No</div>
                <div>{patientData.tbNo}</div>

                <div className="font-medium">Date of Collection</div>
                <div>{patientData.dateOfCollection}</div>

                <div className="font-medium">Time of Collection</div>
                <div>{patientData.timeOfCollection}</div>

                <div className="font-medium">Type of Specimen</div>
                <div>{patientData.typeOfSpecimen}</div>

                <div className="font-medium">Collected by:</div>
                <div>{patientData.collectedBy}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 bg-gray-100 text-gray-700">Test Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium">Test No</div>
                <div>{patientData.testNo}</div>

                <div className="font-medium">Volume (ml)</div>
                <div>{patientData.volume}</div>

                <div className="font-medium">Specimen Appearance</div>
                <div>{patientData.specimenAppearance}</div>

                <div className="font-medium">Appearance</div>
                <div>{patientData.appearance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTests;
