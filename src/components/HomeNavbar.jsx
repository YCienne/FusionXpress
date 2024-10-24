import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import logo from '../assets/images/logo.png'; // Adjust the path accordingly

const HomeNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo} // Updated logo path
              alt="Logo"
              className="w-auto h-8"
            />
          </div>

          {/* Centered Search Input and Button */}
          <div className="relative flex-grow mx-4">
            <div className="flex justify-center">
              <div className="relative w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md w-full pr-12" // Added padding-right for the button
                  placeholder="Search..."
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 bottom-0 flex items-center justify-center p-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700"
                >
                  <CiSearch className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative ml-3">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <FaUser className="w-5 h-5 text-gray-600" />
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      My profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
