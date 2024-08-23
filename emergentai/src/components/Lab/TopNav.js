import React from "react";

const TopNav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center">
      <div className="text-lg font-semibold">Dashboard</div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
            placeholder="Search"
          />
          <button className="absolute right-2 top-2">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.41-1.41l3.88 3.88a1 1 0 01-1.42 1.42l-3.88-3.88zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <button className="relative">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4h2v-2h-2v2zm0-4h2V7h-2v3z"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </button>

        <div className="flex items-center space-x-2">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
          />
          <div className="text-sm">
            <p className="font-semibold">Jesse Cord</p>
            <p className="text-xs text-gray-500">Doctor</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
