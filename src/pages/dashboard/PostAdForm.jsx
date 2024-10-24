import React, { useState } from 'react';
import { apiPostAdvert } from '../../services/vendor'; // Assuming this is where the API call is located

const PostAdForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null,  // Add image to the state
  });

  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(null); // To handle any errors
  const [success, setSuccess] = useState(false); // To handle success status

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image input
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Select the first file from the input
    setFormData({
      ...formData,
      image: file,
    });
  };

  // Handle form submission and POST data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const adData = new FormData(); // Create FormData object
    adData.append('title', formData.title);
    adData.append('description', formData.description);
    adData.append('price', formData.price);
    adData.append('category', formData.category);
    adData.append('image', formData.image); // Append image file

    try {
      // Call the API with the FormData object
      const response = await apiPostAdvert(adData); 
      console.log('Advert posted:', response);
      setSuccess(true); // Set success to true if the request was successful
    } catch (error) {
      console.error('Error posting advert:', error);
      setError('Failed to post advert, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-green-900">Add New Ad</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Price Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Category Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Image Upload Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Product Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange} // Use this handler to capture the file
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {/* Display error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Display success message */}
      {success && <p className="text-green-500 mb-4">Advert posted successfully!</p>}

      {/* Loading indicator */}
      {loading && <p className="text-blue-500 mb-4">Posting advert...</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        disabled={loading} // Disable button while posting
      >
        {loading ? 'Posting...' : 'Post Ad'}
      </button>
    </form>
  );
};

export default PostAdForm;
