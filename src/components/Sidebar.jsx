import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import profilePic from '../assets/images/profile-pic.jpg'; // Import your profile image

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-pink-500 text-white h-screen p-4 transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Toggle Sidebar Button */}
      <button onClick={toggleSidebar} className="mb-6">
        {isCollapsed ? <FiChevronRight className="text-2xl" /> : <FiChevronLeft className="text-2xl" />}
      </button>

      {/* Profile Card */}
      <div className={`relative ${isCollapsed ? 'hidden' : 'flex flex-col items-center'}`}>
        <div className="w-32 rounded-full">
          <img
            src={profilePic}
            alt="Vendor"
            className="w-24 h-24 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
        </div>
        <div className="mt-2">
          <h4 className="text-lg font-semibold">Vendor Name</h4>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-40 right-0 z-10"
            style={{ top: '100%', marginTop: '10px' }} // Positioning the dropdown below the image
          >
            <Link
              to="/dashboard/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </Link>
            {/* Removed Logout button from here */}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="space-y-6 mt-10"> {/* Added margin for spacing */}
        <Link
          to="/dashboard/overview"
          className={`flex items-center  text-2xl space-x-2 hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <FiHome />
          {!isCollapsed && <span>Overview</span>}
        </Link>

        <Link
          to="/dashboard/add-product"
          className={`flex items-center space-x-2 text-2xl hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <FiPlusCircle />
          {!isCollapsed && <span>Add New Product</span>}
        </Link>

        <Link
          to="/dashboard/view-products"
          className={`flex items-center  text-2xl space-x-2 hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <FiEye />
          {!isCollapsed && <span>View Products</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
