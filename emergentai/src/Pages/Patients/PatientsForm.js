import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    age: '',
    gender: 'Female',
    district: '',
    subCounty: '',
    parish: '',
    village: '',
    nearestHealthUnit: '',
    nin: '',
    nextOfKin: '',
    nextOfKinPhoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.age) tempErrors.age = 'Age is required';
    if (!formData.district) tempErrors.district = 'District is required';
    if (!formData.subCounty) tempErrors.subCounty = 'Sub-County is required';
    if (!formData.parish) tempErrors.parish = 'Parish is required';
    if (!formData.village) tempErrors.village = 'Village is required';
    if (!formData.nearestHealthUnit) tempErrors.nearestHealthUnit = 'Nearest Health Unit is required';
    if (!formData.nin) tempErrors.nin = 'NIN is required';
    if (!formData.nextOfKin) tempErrors.nextOfKin = 'Next of Kin is required';
    if (!formData.nextOfKinPhoneNumber) tempErrors.nextOfKinPhoneNumber = 'Next of Kin Phone Number is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data to API
      fetch('/api/submit-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          // Handle successful submission
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error
        });
    }
  };

  return (
    <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Add Patient</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">A. Bio Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Phone Number</label>
            <input 
              type="text" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Age</label>
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div>
            <label className="block mb-1">Gender</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">B. Address of the Patient</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">District</label>
            <input 
              type="text" 
              name="district" 
              value={formData.district} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
          </div>
          <div>
            <label className="block mb-1">Sub-County</label>
            <input 
              type="text" 
              name="subCounty" 
              value={formData.subCounty} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.subCounty && <p className="text-red-500 text-sm">{errors.subCounty}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Parish</label>
            <input 
              type="text" 
              name="parish" 
              value={formData.parish} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.parish && <p className="text-red-500 text-sm">{errors.parish}</p>}
          </div>
          <div>
            <label className="block mb-1">Village</label>
            <input 
              type="text" 
              name="village" 
              value={formData.village} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.village && <p className="text-red-500 text-sm">{errors.village}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Nearest Health Unit</label>
            <input 
              type="text" 
              name="nearestHealthUnit" 
              value={formData.nearestHealthUnit} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.nearestHealthUnit && <p className="text-red-500 text-sm">{errors.nearestHealthUnit}</p>}
          </div>
          <div>
            <label className="block mb-1">NIN</label>
            <input 
              type="text" 
              name="nin" 
              value={formData.nin} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.nin && <p className="text-red-500 text-sm">{errors.nin}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-1">Next of Kin</label>
            <input 
              type="text" 
              name="nextOfKin" 
              value={formData.nextOfKin} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.nextOfKin && <p className="text-red-500 text-sm">{errors.nextOfKin}</p>}
          </div>
          <div>
            <label className="block mb-1">Phone Number</label>
            <input 
              type="text" 
              name="nextOfKinPhoneNumber" 
              value={formData.nextOfKinPhoneNumber} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded" 
            />
            {errors.nextOfKinPhoneNumber && <p className="text-red-500 text-sm">{errors.nextOfKinPhoneNumber}</p>}
          </div>
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition">
        Save to continue
      </button>
    </form>
  );
};

export default PatientForm;
