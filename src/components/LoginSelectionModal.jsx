// LoginSelectionModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSelectionModal = ({ onClose, onSelectUser }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'black' }}>Login as:</h2>
        <div className="space-y-4">
          <button
            onClick={() => {
              console.log("User button clicked"); // Debugging statement
              onSelectUser(); // Call the user selection function
            }}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-600"
          >
            User
          </button>
          <button
            onClick={() => {
              console.log("Vendor button clicked"); // Debugging statement
              navigate('/login/vendor'); // Navigate to vendor login
              onClose(); // Close the modal after navigating
            }}
            className="bg-green-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-green-600"
          >
            Vendor
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-bold hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginSelectionModal;
