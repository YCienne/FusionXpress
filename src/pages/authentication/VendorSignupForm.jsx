import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiVendorSignup } from "../../services/auth";
import loadingGif from "../../assets/loading.gif"; // Import loading GIF

const VendorSignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storeName, setStoreName] = useState("");
  const [phone, setPhone] = useState("");
  // const [profilePicture, setProfilePicture] = useState(null); // For file input

  const navigate = useNavigate();

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading GIF

    try {
      const payload = {
        fullName,
        email,
        password,
        storeName,
        phoneNumber: phone,
        // profilePicture,
        role: "vendor",
      };
      const response = await apiVendorSignup(payload); 
      console.log(response.data);
      // Show success toast: "Registered successfully"
      navigate("/login");
    } catch (error) {
      console.log(error);
      // Show error toast
    } finally {
      setLoading(false); // Hide loading GIF
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-200 to-pink-300">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Vendor Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                name="password"
                placeholder="***********"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Store Name</label>
              <input
                type="text"
                name="storeName"
                placeholder="Store Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
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
    </div>
  );
};

export default VendorSignupForm;
