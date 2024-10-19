import React, { useState } from 'react';
import { toast } from 'react-toastify';  // Import react-toastify for success messages

const EditProductForm = ({ product, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    image: null, // Initially, image is null
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

  // Handle form submission for editing the product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the onUpdate function passed down as a prop
    onUpdate(formData);

    // Display a success toast message after editing
    toast.success('Product updated successfully!');
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Edit Product</h2>

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

      {/* Current Image Display */}
      <div className="mb-4">
        <label className="block text-gray-700">Current Image</label>
        {product.image && (
          <img
            src={product.image}
            alt="Product"
            className="w-32 h-32 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Image Upload Input for Editing */}
      <div className="mb-4">
        <label className="block text-gray-700">Update Product Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProductForm;
