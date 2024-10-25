import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPostAdvert } from '../../services/vendor'; // Assuming this is where the API call is located

const PostAdForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const adData = new FormData();
    adData.append('title', formData.title);
    adData.append('description', formData.description);
    adData.append('price', formData.price);
    adData.append('category', formData.category);
    adData.append('image', formData.image);

    try {
      const response = await apiPostAdvert(adData); 
      console.log('Advert posted:', response);
      setSuccess(true);
      navigate('/dashboard/view-ads'); // Redirect to the view ads page upon success
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

      <div className="mb-4">
        <label className="block text-gray-700">Product Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">Advert posted successfully!</p>}
      {loading && <p className="text-blue-500 mb-4">Posting advert...</p>}

      <button
        type="submit"
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        disabled={loading}
      >
        {loading ? 'Posting...' : 'Post Ad'}
      </button>
    </form>
  );
};

export default PostAdForm;
