import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUserLogin } from '../../services/auth'; // Import your API call
import { useNavigate } from "react-router-dom";
import loadingGif from "../../assets/loading.gif"; // Import loading GIF

const UserLoginForm = () => {
  const [loading, setLoading] = useState(false); // Loading state for showing GIF
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading GIF

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiUserLogin({ email, password }); // Make API call
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken); // Store token
        toast.success('Login successful!');
        navigate('/home'); // Redirect to home page after successful login
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // Hide loading GIF
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-300">
      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="*************"
            required
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <img src={loadingGif} alt="Loading..." className="h-6 mx-auto" /> // Show loading GIF
          ) : (
            "Login"
          )}
        </button>
      </form>

      {/* Toast Container for showing messages */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default UserLoginForm;