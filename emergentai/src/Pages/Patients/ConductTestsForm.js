import React, { useState } from 'react';

const ConductTestsForm = () => {
  const [formData, setFormData] = useState({
    testType: '',
    patientName: 'John Doe',
    selectedTest: '',
    reasonForTest: '',
    labTechnician: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg space-y-4">
      <h1 className="text-xl font-semibold mb-4">Conduct tests on John Doe</h1>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Which kind of test are you carrying out?</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="testType"
              value="X-ray tests"
              checked={formData.testType === 'X-ray tests'}
              onChange={handleChange}
              className="form-radio"
              required
            />
            <span className="ml-2">X-ray tests</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="testType"
              value="Laboratory tests"
              checked={formData.testType === 'Laboratory tests'}
              onChange={handleChange}
              className="form-radio"
              required
            />
            <span className="ml-2">Laboratory tests</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="patientName" className="block font-medium text-gray-700">Patient Name</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          readOnly
        />
      </div>

   
      <div className="mb-4">
        <label htmlFor="selectedTest" className="block font-medium text-gray-700">Type of Test</label>
        <select
          id="selectedTest"
          name="selectedTest"
          value={formData.selectedTest}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        >
          <option value="">Select test</option>
          <option value="Blood Test">Blood Test</option>
          <option value="Urine Test">Urine Test</option>
          <option value="X-ray">X-ray</option>
        
        </select>
      </div>

     
      <div className="mb-4">
        <label htmlFor="reasonForTest" className="block font-medium text-gray-700">Reason for Test</label>
        <textarea
          id="reasonForTest"
          name="reasonForTest"
          value={formData.reasonForTest}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Reason for test"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="labTechnician" className="block font-medium text-gray-700">Lab Technician</label>
        <select
          id="labTechnician"
          name="labTechnician"
          value={formData.labTechnician}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        >
          <option value="">Select technician</option>
          <option value="Technician 1">Technician 1</option>
          <option value="Technician 2">Technician 2</option>
          <option value="Technician 3">Technician 3</option>
         
        </select>
      </div>

     
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
};

export default ConductTestsForm;
