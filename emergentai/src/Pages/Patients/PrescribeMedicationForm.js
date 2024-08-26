import React, { useState } from 'react';

const PrescribeMedicationForm = () => {
  const [formData, setFormData] = useState({
    hospital: '',
    sampleType: '',
    collectionProcedure: '',
    baselineSmear: '',
    culture: '',
    firstLineDST: '',
    secondLineDST: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, like an API call
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Prescribe Medication for John Doe</h1>
      <p className="mb-2">Test Results: MTB Detected, Rifampicin resistance detected</p>

      <div className="mb-4">
        <label htmlFor="hospital" className="block font-medium text-gray-700">Refer patient to an MDR-TB Initiation hospital</label>
        <input
          type="text"
          id="hospital"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Mulago"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sampleType" className="block font-medium text-gray-700">Sample Type</label>
        <input
          type="text"
          id="sampleType"
          name="sampleType"
          value={formData.sampleType}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Take on an empty stomach"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="collectionProcedure" className="block font-medium text-gray-700">Collection Procedure</label>
        <input
          type="text"
          id="collectionProcedure"
          name="collectionProcedure"
          value={formData.collectionProcedure}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Take on an empty stomach"
          required
        />
      </div>

      <h2 className="text-lg font-semibold mb-2">Tests Ordered</h2>

      <div className="mb-4">
        <label htmlFor="baselineSmear" className="block font-medium text-gray-700">Baseline Smear</label>
        <input
          type="date"
          id="baselineSmear"
          name="baselineSmear"
          value={formData.baselineSmear}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="culture" className="block font-medium text-gray-700">Culture</label>
        <input
          type="date"
          id="culture"
          name="culture"
          value={formData.culture}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="firstLineDST" className="block font-medium text-gray-700">1st Line DST</label>
        <input
          type="date"
          id="firstLineDST"
          name="firstLineDST"
          value={formData.firstLineDST}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="secondLineDST" className="block font-medium text-gray-700">2nd Line DST</label>
        <input
          type="date"
          id="secondLineDST"
          name="secondLineDST"
          value={formData.secondLineDST}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block font-medium text-gray-700">Additional Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Results should be reported back to Dr. Smith for treatment decisions."
          required
        />
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

export default PrescribeMedicationForm;
