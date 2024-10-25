import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTh, FaList } from "react-icons/fa";
import { apiGetAllAdverts } from "../../services/user";

const AdvertList = () => {
  const [adverts, setAdverts] = useState([]);
  const [view, setView] = useState("grid"); // 'grid' or 'list'
  // const [categoryFilter, setCategoryFilter] = useState("all"); // Category filter
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 5; // Number of items per page
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide for the text slider

  const sliderText = ["Search", "Find", "Own it"];

  const fetchAdverts = async () => {
    try {
      const filter = JSON.stringify({
        $or: [
          { title: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
        ],
      });
      const sort = JSON.stringify({
        price: sortOrder,
      });
      const res = await apiGetAllAdverts(filter, sort);
      setAdverts(res.data.data);
    } catch (error) {
      console.log("Error fetching adverts", error);
    }
  };

  useEffect(() => {
    fetchAdverts();
  }, [searchTerm, sortOrder]);

  // Handle text slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderText.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [sliderText.length]);

  const totalPages = Math.ceil(adverts.length / itemsPerPage);

  // Get the adverts for the current page
  const currentAdverts = adverts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <ToastContainer />

      <div className="bg-purple-600 text-white rounded-2xl text-center p-4 mb-4">
        <h1 className="text-2xl font-bold">Search, Find & Own It!</h1>
        <p>Discover the best adverts at unbeatable prices.</p>
      </div>

      <div className="flex">
        <div className="w-1/4 p-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Special Offers</h2>
            {/* Text Slider */}
            <div className="text-center mt-3">
              <h3 className="text-2xl md:text-3xl font-bold">
                {sliderText[currentSlide]}
              </h3>
            </div>
            <p>Black Friday is Almost here!</p>
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

          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-1/3 mr-2"
            />
            {/* <select
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
            </select> */}

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded p-2"
            >
              {/* <option value="default">Sort By</option> */}
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col"
            }
          >
            {currentAdverts.map((advert) => (
              <Link
                to={`/home/advert/${advert.id}`}
                key={advert.id}
                className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img
                  src={`https://savefiles.org/${advert.image}?shareable_link=461`}
                  alt={advert.name}
                  className="w-full h-64 object-cover mb-2 rounded-md"
                />
                <h2 className="text-lg font-semibold">{advert.name}</h2>
                <p className="text-gray-700">${advert.price}</p>
              </Link>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
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
