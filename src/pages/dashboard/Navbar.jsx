import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-purple-700 text-white h-12 flex items-center justify-between px-4 shadow-lg">
      <div className="text-lg font-semibold">Vendor Dashboard</div>
      <div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-white hover:text-gray-200 transition duration-300"
        >
          <FiUser className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
