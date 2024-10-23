import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dummyAdvert from "../../../data.json"
// import { apiGetAdvertDetails } from "../../services/user"; // Commented out for now

const AdvertDetails = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Enhanced slider text content
  const sliderText = [
    "🔥 Limited-time Offer: Buy Now and Save Big!",
    "🎉 Free Shipping on All Orders Over $50!",
    "💥 Shop the Latest Products and Enjoy Exclusive Discounts!",
  ];

  useEffect(() => {
    // Slider effect to change text every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderText.length]);

  useEffect(() => {
    const data = dummyAdvert.find(ad => ad.id == id)
    setAdvert(data)
    /*
    const fetchAdvert = async () => {
      try {
        const response = await apiGetAdvertDetails(id);
        setAdvert(response.data);
        setLoading(false);
      } catch (err) {
        setError("Advert not found");
        setLoading(false);
      }
    };

    fetchAdvert();
    */
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/adverts" className="text-blue-600 underline mb-4 block">
        Back to Advert List
      </Link>

      {/* Card layout for advert details */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105 duration-300">
        {/* Image on the left */}
        <div className="md:w-1/2">
          <img
            src={advert?.image || "https://via.placeholder.com/300"}
            alt={advert?.name || "Advert"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details on the right */}
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">
            {advert?.name || "Advert Name"}
          </h1>
          <p className="text-xl font-semibold text-green-600 mt-2">
            ${advert?.price || "0.00"}
          </p>
          <p className="text-gray-700 mt-4">
            {advert?.description || "Advert description goes here."}
          </p>
        </div>
      </div>

      {/* Text banner with slider */}
      <div className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-4 rounded-lg">
        <h2 className="text-xl font-bold tracking-wider">
          {sliderText[currentSlide]}
        </h2>
      </div>
    </div>
  );
};

export default AdvertDetails; // Dummy data for adverts

