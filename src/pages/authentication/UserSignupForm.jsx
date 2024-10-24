import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { useNavigate } from "react-router-dom";
import { apiUserSignup } from "../../services/auth"; 
import loadingGif from "../../assets/loading.gif"; // Import loading GIF

const UserSignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading GIF

    try {
      const payload = {
        username,
        email,
        password,
        role: "user", 
      };

      const response = await apiUserSignup(payload); // API call
      console.log(response.data);
      toast.success('Registered successfully');
      navigate("/login"); // Redirect to login page after signup
    } catch (error) {
      console.log(error);
      toast.error('Registration failed, please try again'); // Show error toast
    } finally {
      setLoading(false); // Hide loading GIF
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-200 to-pink-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">User Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              name="password"
              type="password"
              placeholder="*************"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <img src={loadingGif} alt="Loading..." className="h-6 mx-auto" /> // Show loading GIF
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
      {/* Toast Container for showing messages */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default UserSignupForm;
