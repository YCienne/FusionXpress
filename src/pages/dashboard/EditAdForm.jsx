import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';  // Import react-toastify for success messages
// import { apiUpdateAdvert } from '../../services/vendor'; // Go up two levels to reach the services folder

const EditAdForm = ({ advertId, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null, // Initially, image is null
  });

  // Dummy data for testing
  const dummyAdvert = {
    title: 'Sample Advert',
    description: 'This is a sample advert description.',
    price: '99.99',
    category: 'Electronics',
    image: 'path_to_sample_image.jpg', // Replace with actual image path or URL
  };

  useEffect(() => {
    // Fetch advert details based on advertId (use dummy data for now)
    const fetchAdvert = async () => {
      try {
        // const response = await apiGetAdvert(advertId); // Uncomment when ready
        // const advert = response.data; // Assuming the advert data is returned in the response
        // setFormData(advert); // Set the form data with the fetched advert

        // For now, using dummy data
        setFormData(dummyAdvert); 
      } catch (error) {
        console.error('Error fetching advert:', error);
      }
    };

    fetchAdvert();
  }, [advertId]);

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

  // Handle form submission for editing the advert
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a FormData object to handle image uploads
      const updatedData = new FormData();
      updatedData.append('title', formData.title);
      updatedData.append('description', formData.description);
      updatedData.append('price', formData.price);
      updatedData.append('category', formData.category);
      if (formData.image) {
        updatedData.append('image', formData.image);
      }

      // Call the apiUpdateAdvert function to update the advertisement
      // const response = await apiUpdateAdvert(advertId, updatedData); // Uncomment when ready
      // if (response.status === 200) {
      //   onUpdate(response.data); // Trigger the onUpdate function with updated advert data
      //   toast.success('Advert updated successfully!');
      // }

      // For now, simulate a successful update
      onUpdate({ ...formData, id: advertId }); // Dummy update
      toast.success('Advert updated successfully!'); // Dummy success message

    } catch (error) {
      console.error('Error updating advert:', error);
      toast.error('Failed to update advert.'); // Error handling
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Edit Advert</h2>

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
        {dummyAdvert.image && (
          <img
            src={dummyAdvert.image}
            alt="Advert"
            className="w-32 h-32 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Image Upload Input for Editing */}
      <div className="mb-4">
        <label className="block text-gray-700">Update Advert Image</label>
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

export default EditAdForm;
