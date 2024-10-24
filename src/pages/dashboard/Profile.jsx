import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader"; // Import the Loader component
import { apiGetVendorData, apiUpdateVendorData } from "../../services/vendor"; // Import the vendor API functions

const Profile = () => {
  // State to hold vendor details and loading state
  const [vendor, setVendor] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    profileImage: null, // Added field for profile image
  });
  const [loading, setLoading] = useState(true); // State to manage loading
  const [isSaving, setIsSaving] = useState(false); // State to manage saving
  const [error, setError] = useState(null); // State to manage error messages
  const [success, setSuccess] = useState(null); // State to manage success messages

  // Fetch vendor data on component mount
  useEffect(() => {
    const fetchVendorData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const fetchedVendorData = await apiGetVendorData(); // Call your API function
        console.log(fetchedVendorData);
        setVendor(fetchedVendorData); // Set the vendor state with fetched data
      } catch (error) {
        console.error("Error fetching vendor data:", error);
        setError("Failed to load vendor data.");
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchVendorData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setVendor((prevState) => ({ ...prevState, profileImage: file }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true); // Disable button and set saving state

    try {
      // Call API to update vendor info using Axios
      await apiUpdateVendorData(vendor);
      setSuccess("Profile updated successfully!"); // Success message
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error updating vendor data:", error);
      setError("Failed to save changes."); // Error message
      setSuccess(null); // Clear any previous success messages
    } finally {
      setIsSaving(false); // Enable button after saving
    }
  };

  // Display loader while fetching data
  if (loading) {
    return <Loader />;
  }

  // Display error message if there is an error
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Vendor Profile</h2>
      {success && <div className="text-green-500 mb-4">{success}</div>}{" "}
      {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={vendor.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={vendor.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={vendor.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">
            Store Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={vendor.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Profile Picture
          </label>
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
          className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
            isSaving ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSaving} // Disable button while saving
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
