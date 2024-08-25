import React, { useState, useEffect } from 'react';

const ApproveDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    const dummyData = [
      { DoctorID: "01", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
      { DoctorID: "02", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Pulmonologist", ApprovalStatus: "Approve" },
      { DoctorID: "03", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "General Physician", ApprovalStatus: "Approve" },
      { DoctorID: "04", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
      { DoctorID: "05", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
      { DoctorID: "06", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
      { DoctorID: "07", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
      { DoctorID: "08", DoctorName: "Kizza Frank", Contact: "+256708210987", Specialization: "Radiologist", ApprovalStatus: "Approve" },
    ];
    setDoctors(dummyData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Approve Doctors</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">DoctorID</th>
            <th className="border px-4 py-2">Doctor Name</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Approval Status</th>
            <th className="border px-4 py-2">Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.DoctorID}>
              <td className="border px-4 py-2">{doctor.DoctorID}</td>
              <td className="border px-4 py-2">{doctor.DoctorName}</td>
              <td className="border px-4 py-2">{doctor.Contact}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">{doctor.ApprovalStatus}</button>
              </td>
              <td className="border px-4 py-2">{doctor.Specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <p>Showing 10 results out of 1230</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <span>...</span>
          <button className="px-3 py-1 border rounded">9</button>
          <button className="px-3 py-1 border rounded">10</button>
        </div>
      </div>
    </div>
  );
};

export default ApproveDoctors;
