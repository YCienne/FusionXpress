// src/components/SignUpModal.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleUserSignup = () => {
    navigate('/signup/user'); // Redirect to user signup form
    onClose(); // Close the modal
  };

  const handleVendorSignup = () => {
    navigate('/signup/vendor'); // Redirect to vendor signup form
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'black' }}>Sign Up As</h2> {/* Adjusted color for visibility */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleUserSignup}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            User
          </button>
          <button
            onClick={handleVendorSignup}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Vendor
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
