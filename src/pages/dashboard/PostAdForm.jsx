import React, { useState } from 'react';

const PostAdForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null,  // Add image to the state
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add formData to handle image upload as well
    console.log('Product added:', formData);
    // Here you can add the logic to send the form data including the image to the backend
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
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Post Ad
      </button>
    </form>
  );
};

export default PostAdForm;
