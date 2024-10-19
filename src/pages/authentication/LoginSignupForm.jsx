import React, { useState } from 'react';
import SignupSelectionModal from './SignupSelectionModal';
import LoginForm from './LoginForm';
import UserSignupForm from './UserSignupForm';
import VendorSignupForm from './VendorSignupForm';

const LoginSignupForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupType, setSignupType] = useState(null); // Can be 'user' or 'vendor'
  const [showLogin, setShowLogin] = useState(false);  // Track whether to show the login form

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectUser = () => {
    setSignupType('user');
    handleCloseModal();
  };

  const handleSelectVendor = () => {
    setSignupType('vendor');
    handleCloseModal();
  };

  const handleShowLogin = () => {
    setShowLogin(true);   // Show the login form
    setSignupType(null);  // Hide signup forms
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to FusionXpress</h1>

      {/* If no form is selected, show buttons for login and sign up */}
      {!signupType && !showLogin && (
        <>
          <button
            className="w-64 bg-blue-600 text-white font-bold py-3 rounded-lg mb-4 hover:bg-blue-700"
            onClick={handleShowLogin} // Show login form on click
          >
            Login
          </button>
          <button
            className="w-64 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600"
            onClick={handleOpenModal}
          >
            Sign Up
          </button>
        </>
      )}

      {/* Render the login form */}
      {showLogin && <LoginForm />}

      {/* Render the User or Vendor Signup Form based on the user's selection */}
      {signupType === 'user' && <UserSignupForm />}
      {signupType === 'vendor' && <VendorSignupForm />}

      {/* Modal for selecting between User and Vendor */}
      <SignupSelectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectUser={handleSelectUser}
        onSelectVendor={handleSelectVendor}
      />
    </div>
  );
};

export default LoginSignupForm;
