import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaTh, FaList } from 'react-icons/fa';
// import { apiGetAdvertsByCategory } from '../../services/user'; // Uncomment this when you're ready

const CategoryList = () => {
  const { category } = useParams();
  const [ads, setAds] = useState([]);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Pagination control
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch ads by category from the API when ready
    /*
    const fetchAds = async () => {
      try {
        const response = await apiGetAdvertsByCategory(category);
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
    */

    // Placeholder data to use until API is ready
    setAds([
      {
        id: 1,
        image: 'https://picsum.photos/id/1018/400/300',
        title: 'Stylish Jacket',
        description: 'A trendy jacket for all seasons.',
        price: 79.99,
      },
      {
        id: 2,
        image: 'https://picsum.photos/id/1025/400/300',
        title: 'Elegant Watch',
        description: 'An elegant watch to complement any outfit.',
        price: 249.99,
      },
    ]);
  }, [category]);

  // Function to filter ads by search term
  const filteredAds = () => {
    return ads.filter(
      (ad) =>
        ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ad.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Get current ads for pagination
  const currentAds = () => {
    const filtered = filteredAds();
    const indexOfLastAd = currentPage * itemsPerPage;
    const indexOfFirstAd = indexOfLastAd - itemsPerPage;
    return filtered.slice(indexOfFirstAd, indexOfLastAd);
  };

  // Calculate total pages
  const totalPages = () => {
    return Math.ceil(filteredAds().length / itemsPerPage);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center p-4 mb-4">
        <h1 className="text-2xl font-bold">Ads in {category}</h1>
        <p>Discover amazing deals in the {category} category.</p>
      </div>

      <div className="flex">
        {/* Side Banner */}
        <div className="w-1/4 p-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Side Banner</h2>
            <p>Promotions and offers go here!</p>
          </div>
        </div>

        <div className="flex-1 mb-4">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">Advert List</h1>
            <div>
              <button onClick={() => setView('grid')} className="p-2">
                <FaTh />
              </button>
              <button onClick={() => setView('list')} className="p-2">
                <FaList />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-1/3 mr-2"
            />
          </div>

          {/* Ad Display */}
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col'
            }
          >
            {currentAds().map((ad) => (
              <div
                key={ad.id}
                className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-64 object-cover mb-2 rounded-md"
                />
                <h2 className="text-lg font-semibold">{ad.title}</h2>
                <p className="text-gray-700">${ad.price}</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center">
              Page {currentPage} of {totalPages()}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages()))
              }
              disabled={currentPage === totalPages()}
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
