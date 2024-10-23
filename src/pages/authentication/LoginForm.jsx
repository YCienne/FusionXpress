import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { apiLogin } from '../../services/auth'; // Commented out to prevent import error
import LoginModal from "../../components/LoginModal"; // Correct import path for LoginModal
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const LoginForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsModalOpen(true); // Open the modal after submitting the form

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await apiLogin({email, password});// Include the role in the payload
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        toast.success('Login successful!');
        navigate('/dashboard');
      }
  };

  const handleLogin = async (role) => {
    // API login logic commented out
    /*
    try {
      const response = await apiLogin({email, password,role,});// Include the role in the payload
      console.log(response.data);

      if  {
        toast.success('Login successful!'); // Display success toast

        // Redirect based on the role
        if (role === 'vendor') {
           // Redirect to vendor dashboard
        } else {
          navigate('/homepage'); // Redirect to user homepage
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.'); // Display error toast
    }
    */

    // console.log("Logging in as:", role, { email, password });
    setIsModalOpen(false); // Close modal after login attempt
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-300">
      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Username"
          >
            Email
          </label>
          <input
           name='email'
            id="email"
            type="email"
            // value={email}
            // onChange={(e) => setEmailOrUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="*************"
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
        >
          Login
        </button>
      </form>

      {/* Display the Login Modal when isModalOpen is true */}
      {isModalOpen && (
        <LoginModal
          onClose={() => setIsModalOpen(false)}
          handleLogin={handleLogin}
        />
      )}

      {/* Toast Container for showing messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default LoginForm;
