import React from "react";
import Sidebar from "../../components/Patient/Sidebar";
import TopNav from "../../components/Patient/TopNav";

const Patient = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <TopNav />

        {/* Content Wrapper */}
        <div className="container mx-auto px-6 py-8">
          {/* Greeting Section */}
          <div
            className="bg-white shadow-md rounded-lg p-6 mb-6"
            style={{ borderLeft: "8px solid #f87171" }}
          >
            <h2 className="text-2xl text-gray-700 font-semibold">
              Hello Jenifer
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Your Next Appointment on <strong>Saturday, 15 June</strong> at{" "}
              <strong>09:00AM</strong>
            </p>
          </div>

          {/* Dashboard Grid Layout */}
          <div className="flex flex-wrap gap-6">
            {/* Left Section with two cards */}
            <div className="flex flex-col flex-1 gap-6 md:w-2/3 lg:w-2/3">
              {/* Prescription Section */}
              <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  My Prescription
                </h3>
                <p className=" text-gray-600 mt-1">
                  <strong>Medication:</strong> Isoniazid
                </p>
                <p className=" text-gray-600 mt-1">
                  <strong>Dosage:</strong> 300mg daily
                </p>
                <p className=" text-gray-600 mt-1">
                  <strong>Instructions:</strong> Take on an empty stomach
                </p>
              </div>

              {/* Next Appointment Section */}
              <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                <h3 className="text-xl text-gray-600 font-semibold mb-4">
                  Next Appointment
                </h3>
                <p className=" text-gray-600 mt-1">
                  <strong>Date:</strong> 12/08/2024
                </p>
                <p className=" text-gray-600 mt-1">
                  <strong>Time:</strong> 09:00AM
                </p>
                <p className=" text-gray-600 mt-1">
                  <strong>Doctor:</strong> Dr. Smith
                </p>
              </div>
            </div>

            {/* Video Section on the right */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 lg:w-1/3 flex-shrink-0">
              <h3 className="text-xl font-semibold mb-4">
                How to easily get cured from TB
                <span className="text-blue-500"> (Watch video below)</span>
              </h3>
              <div className="relative pb-9/16 h-0 overflow-hidden mb-4">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/your_video_link"
                  title="Proper Medication Adherence"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-400">
                Proper Medication Adherence
              </p>
              <p className="text-xs text-gray-300">
                Learn the importance of taking your TB medication correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
