import React, { useState } from 'react';
import SignupSelectionModal from './SignupSelectionModal';
import LoginForm from './LoginForm';
import UserLoginForm from './UserLoginForm';
import VendorSignupForm from './VendorSignupForm'; // Assuming you have this form created
import UserSignupForm from './UserSignupForm'; // Assuming you have this form created

const LoginSignupForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState(null); // 'login' or 'signup'
  const [loginType, setLoginType] = useState(null); // 'user' or 'vendor'
  const [showForm, setShowForm] = useState(false); // Show login/signup form

  const handleOpenModal = (type) => {
    setAuthType(type); // Set to either 'login' or 'signup'
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectUser = () => {
    setLoginType('user'); // Set login type to 'user'
    setShowForm(true); // Show login/signup form based on authType
    handleCloseModal(); // Close modal
  };

  const handleSelectVendor = () => {
    setLoginType('vendor'); // Set login type to 'vendor'
    setShowForm(true); // Show login/signup form based on authType
    handleCloseModal(); // Close modal
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to FusionXpress</h1>

      {!showForm && (
        <>
          <button
            className="w-64 bg-blue-600 text-white font-bold py-3 rounded-lg mb-4 hover:bg-blue-700"
            onClick={() => handleOpenModal('login')} // Open login modal
          >
            Login
          </button>
          <button
            className="w-64 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600"
            onClick={() => handleOpenModal('signup')} // Open signup modal
          >
            Sign Up
          </button>
        </>
      )}

      {/* Conditionally render login or signup forms */}
      {showForm && loginType === 'vendor' && (authType === 'login' ? <LoginForm /> : <VendorSignupForm />)}
      {showForm && loginType === 'user' && (authType === 'login' ? <UserLoginForm /> : <UserSignupForm />)}

      {/* Reuse the same modal for both login and signup */}
      <SignupSelectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectUser={handleSelectUser}
        onSelectVendor={handleSelectVendor}
        type={authType} // Pass 'login' or 'signup' to the modal
      />
    </div>
  );
};

export default LoginSignupForm;
