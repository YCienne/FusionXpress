import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTh, FaList } from "react-icons/fa";
import dummyAdvert from "../../../data.json"


const AdvertList = () => {
  
  const [adverts] = useState(dummyAdvert);
  const [view, setView] = useState("grid"); // 'grid' or 'list'
  const [categoryFilter, setCategoryFilter] = useState("all"); // Category filter
  const [sortOrder, setSortOrder] = useState("default"); // Sort order
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 5; // Number of items per page

  // Function to filter and sort adverts
  const filteredAdverts = () => {
    let filtered = adverts;

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (advert) => advert.category === categoryFilter
      );
    }

    // Filter by search term (keywords)
    if (searchTerm) {
      filtered = filtered.filter(
        (advert) =>
          advert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          advert.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by price
    if (sortOrder === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  // Get the current adverts for the current page
  const currentAdverts = () => {
    const filtered = filteredAdverts();
    const indexOfLastAdvert = currentPage * itemsPerPage;
    const indexOfFirstAdvert = indexOfLastAdvert - itemsPerPage;
    return filtered.slice(indexOfFirstAdvert, indexOfLastAdvert);
  };

  // Calculate total pages
  const totalPages = () => {
    return Math.ceil(filteredAdverts().length / itemsPerPage);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <ToastContainer />

      {/* Top Banner */}
      <div className="bg-purple-600 text-white text-center p-4 mb-4">
        <h1 className="text-2xl font-bold">Search, Find & Own It!</h1>
        <p>Discover the best adverts at unbeatable prices.</p>
      </div>

      <div className="flex">
        {/* Side Banner */}
        <div className="w-1/4 p-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Side Banner</h2>
            <p>Promotions and offers go here!</p>
          </div>
        </div>

        <div className="flex-1 mb-4">
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">Advert List</h1>
            <div>
              <button onClick={() => setView("grid")} className="p-2">
                <FaTh />
              </button>
              <button onClick={() => setView("list")} className="p-2">
                <FaList />
              </button>
            </div>
          </div>

          {/* New Search Bar, Filter, and Sort Options */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-1/3 mr-2"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded p-2 mr-2"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="accessories">Accessories</option>
              <option value="kitchen">Kitchen</option>
              <option value="toys">Toys</option>
              <option value="beauty">Beauty</option>
              <option value="books">Books</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded p-2"
            >
              <option value="default">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col"
            }
          >
            {currentAdverts().map((advert) => (
              <Link
                to={`/home/advert/${advert.id}`} // Changed to ensure correct path
                key={advert.id}
                className={`border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105`}
              >
                <img
                  src={advert.image}
                  alt={advert.name}
                  className="w-full h-64 object-cover mb-2 rounded-md"
                />
                <h2 className="text-lg font-semibold">{advert.name}</h2>
                <p className="text-gray-700">${advert.price}</p>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
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

export default AdvertList;
