import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { apiUpdateAdvert } from '../../services/vendor';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate for navigation
import { apiGetAdvertDetails } from '../../services/user';

const EditAdForm = ({ advertId, onUpdate }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const res = await apiGetAdvertDetails(id);
        console.log('AdvertDetails', res.data);
        setFormData(res.data.data);
      } catch (error) {
        console.error('Error fetching advert:', error);
      }
    };

    fetchAdvert();
  }, [advertId, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = new FormData();
      updatedData.append('title', formData.title);
      updatedData.append('description', formData.description);
      updatedData.append('price', formData.price);
      updatedData.append('category', formData.category);
      if (formData.image) {
        updatedData.append('image', formData.image);
      }

      // Call the API to update the advert
      await apiUpdateAdvert(id, updatedData);

      toast.success('Advert updated successfully!');
      navigate('/dashboard/view-ads'); // Navigate back to view ads page
    } catch (error) {
      console.error('Error updating advert:', error);
      toast.error('Failed to update advert.');
    }
  };

  const handleCancel = () => {
    navigate('/dashboard/view-ads'); // Redirect to the view ads page on cancel
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Edit Advert</h2>

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

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

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

      <div className="mb-4">
        <label className="block text-gray-700">Current Image</label>
        {formData.image && (
          <img
            src={formData.image}
            alt="Advert"
            className="w-32 h-32 object-cover rounded-lg"
          />
        )}
      </div>

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

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={handleCancel}
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
