import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    medication: '',
    dosage: '',
    instructions: '',
    genexpert: '',
    observation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg space-y-4">
      <h1 className="text-xl font-semibold mb-4">Prescribe Medication for John Doe</h1>
      <p className="mb-4 text-gray-700">Test Results: Smear Positive</p>

      {/* Medication and Dosage Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="medication" className="block font-medium text-gray-700">Medication</label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
            placeholder="Isoniazid"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dosage" className="block font-medium text-gray-700">Dosage</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded-md"
            placeholder="10 mg/kg body wt. (max. 300mg)"
            required
          />
        </div>
      </div>

      {/* Instructions Section */}
      <div className="mb-4">
        <label htmlFor="instructions" className="block font-medium text-gray-700">Instructions</label>
        <input
          type="text"
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Take on an empty stomach"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Save
      </button>

      <h2 className="text-lg font-semibold mb-2 mt-6">Send Sample to Genexpert to rule out Rifampicin Resistance</h2>

      {/* Genexpert and Observation Section */}
      <div className="mb-4">
        <label htmlFor="genexpert" className="block font-medium text-gray-700">Select Genexpert</label>
        <select
          id="genexpert"
          name="genexpert"
          value={formData.genexpert}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          required
        >
          <option value="">Select Genexpert</option>
          <option value="GeneXpert 1">GeneXpert 1</option>
          <option value="GeneXpert 2">GeneXpert 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="observation" className="block font-medium text-gray-700">Observation</label>
        <textarea
          id="observation"
          name="observation"
          value={formData.observation}
          onChange={handleChange}
          className="mt-1 p-2 border w-full rounded-md"
          placeholder="Observation"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default PrescriptionForm;
