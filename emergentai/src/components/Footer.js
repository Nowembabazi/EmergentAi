import React from "react";

const Footer = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <div className="bg-white py-8 px-4 flex flex-col md:flex-row justify-center items-center md:space-x-16 space-y-4 md:space-y-0">
        <div className="text-center max-w-md p-4 shadow-lg rounded-lg">
          <div className="flex justify-center mb-4">
            <i className="fas fa-thumbs-up text-3xl text-blue-500"></i>
          </div>
          <h2 className="text-xl font-bold">100% Digital Health</h2>
          <p className="mt-2">The system provides a solid digital diagnosis which is secure and can be trusted by the users.</p>
        </div>
        <div className="text-center max-w-md p-4 shadow-lg rounded-lg">
          <div className="flex justify-center mb-4">
            <i className="fas fa-cog text-3xl text-blue-500"></i>
          </div>
          <h2 className="text-xl font-bold">Enhancing Our User Experience</h2>
          <p className="mt-2">We have merged human and artificial intelligence, offering a unique set of products that cater to your every need.</p>
        </div>
      </div>

      {/* TB-Prediction Section */}
      <div className="bg-blue-900 text-white py-12 px-6 text-center">
        <h3 className="text-2xl font-bold">TB-Prediction at Initial Stage</h3>
        <p className="max-w-3xl mx-auto mt-4">
          TB-prediction provides effective accurate solutions while predicting the disease even before the first symptom is recognized.
        </p>
        <ul className="mt-6 space-y-2 text-left mx-auto max-w-2xl">
          <li>• Early disease detection</li>
          <li>• Highly reliable predictive analysis</li>
          <li>• Accurate and informed data</li>
          <li>• Real-time access to required information</li>
          <li>• Easy documentation</li>
          <li>• User Communication</li>
        </ul>
        <div className="mt-6">
          <img src="cloud_image_placeholder.png" alt="Cloud AI" className="mx-auto max-w-full h-auto" />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-12 text-center">
        <h4 className="text-lg font-semibold">Transforming HealthCare, One Prediction at a Time</h4>
        <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
          Try Emergent AI
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-12 px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:space-x-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src="logo_placeholder.png" alt="Emergent AI" className="mx-auto md:mx-0 mb-4" />
            <p>Create a free account Today!</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h5 className="font-semibold">Quick Links</h5>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Subscribe to our newsletter</h5>
              <p className="mt-2">Stay updated with the latest content and news from emergent AI</p>
              <div className="mt-4 flex justify-center md:justify-start">
                <input type="email" placeholder="Your email address" className="py-2 px-4 rounded-l-md focus:outline-none" />
                <button className="bg-blue-600 text-white py-2 px-6 rounded-r-md hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p>&copy; All Rights Reserved emergentAI</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
