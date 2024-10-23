import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose, handleLogin }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = React.useState(null); // State for role selection

  const handleUserLogin = () => {
    setSelectedRole("user"); // Set the role to "user"
    handleLogin("user"); // Call handleLogin with user role
    onClose(); // Close the modal
  };

  const handleVendorLogin = () => {
    setSelectedRole("vendor"); // Set the role to "vendor"
    handleLogin("vendor"); // Call handleLogin with vendor role
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'black' }}>
          Login As
        </h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleUserLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            User
          </button>
          <button
            onClick={handleVendorLogin}
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

export default LoginModal;
