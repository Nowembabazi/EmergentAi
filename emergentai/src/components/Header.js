import React from 'react';

function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">GET TB DIGITAL DIAGNOSIS</h1>
          <p className="text-lg mb-8">
            Your health is very important and our focus is for a secure life which is tuberculosis free.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="path-to-your-image/tb-diagnosis.png" alt="TB Digital Diagnosis" className="rounded-full shadow-lg" />
        </div>
      </div>
    </header>
  );
}

export default Header;
