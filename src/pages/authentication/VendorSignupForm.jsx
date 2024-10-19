import React, { useState } from 'react';

const VendorSignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [password, setPassword] = useState('');

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API for vendor signup
    console.log({ fullName, email, phone, username, profilePicture, password });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-200 to-pink-300"> {/* Background gradient added here */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"> {/* Adjusted width for shorter layout */}
        <h2 className="text-3xl font-bold mb-4 text-center">Vendor Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Flex container for email and password fields */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Flex container for username and phone number fields */}
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Username/Store Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorSignupForm;
