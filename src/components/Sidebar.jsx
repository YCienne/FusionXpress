import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import profilePic from '../assets/images/profile-pic.jpg'; // Import your profile image
import { apiGetVendorData } from '../services/vendor';

const Sidebar = ({ isCollapsed, toggleSidebar, }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tooltip, setTooltip] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [vendor, setVendor] = useState({});

  useEffect(() => {
    const fetchVendorData = async () => {
      // setLoading(true); // Set loading to true when fetching starts
      try {
        const fetchedVendorData = await apiGetVendorData(); // Call your API function
        console.log(fetchedVendorData);
        setVendor(fetchedVendorData); // Set the vendor state with fetched data
      } catch (error) {
        console.error("Error fetching vendor data:", error);
        // setError("Failed to load vendor data.");
      } finally {
        // setLoading(false); // Set loading to false when done
      }
    };

    fetchVendorData();
  }, []);

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

  const handleMouseEnter = (name) => {
    if (isCollapsed) setTooltip(name);
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

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
          <h4 className="text-lg font-semibold">{vendor.fullName}</h4>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-40 right-0 z-10"
            style={{ top: '100%', marginTop: '10px' }} // Positioning the dropdown below the image
          >
            <Link to="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="space-y-6 mt-10">
        <div className="relative">
          <Link
            to="/dashboard/overview"
            className={`flex items-center text-2xl space-x-2 hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
            onMouseEnter={() => handleMouseEnter('Overview')}
            onMouseLeave={handleMouseLeave}
          >
            <FiHome />
            {!isCollapsed && <span>Overview</span>}
          </Link>
          {isCollapsed && tooltip === 'Overview' && <div className="absolute left-16 bg-black text-white text-sm rounded px-2 py-1">{tooltip}</div>}
        </div>

        <div className="relative">
          <Link
            to="/dashboard/post-ad"
            className={`flex items-center space-x-2 text-2xl hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
            onMouseEnter={() => handleMouseEnter('Post Ad')}
            onMouseLeave={handleMouseLeave}
          >
            <FiPlusCircle />
            {!isCollapsed && <span>Post Ad</span>}
          </Link>
          {isCollapsed && tooltip === 'Post Ad' && <div className="absolute left-16 bg-black text-white text-sm rounded px-2 py-1">{tooltip}</div>}
        </div>

        <div className="relative">
          <Link
            to="/dashboard/view-ads"
            className={`flex items-center text-2xl space-x-2 hover:text-teal-700 ${isCollapsed ? 'justify-center' : ''}`}
            onMouseEnter={() => handleMouseEnter('View Ads')}
            onMouseLeave={handleMouseLeave}
          >
            <FiEye />
            {!isCollapsed && <span>View Ads</span>}
          </Link>
          {isCollapsed && tooltip === 'View Ads' && <div className="absolute left-16 bg-black text-white text-sm rounded px-2 py-1">{tooltip}</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
