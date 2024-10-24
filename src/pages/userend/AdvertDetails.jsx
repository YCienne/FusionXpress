import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dummyAdvert from "../../../data.json";
import loadingGif from '../../assets/loading.gif'; // Ensure the path is correct
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from React Icons
import { apiGetAdvertDetails } from "../../services/user";

const AdvertDetails = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderText = [
    "🔥 Limited-time Offer: Buy Now and Save Big!",
    "🎉 Free Shipping on All Orders Over $50!",
    "💥 Shop the Latest Products and Enjoy Exclusive Discounts!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderText.length]);

  const fetchAdvertDetails = async () => {
    try {
      const res = await apiGetAdvertDetails(id);
      console.log("AdvertDetails", res.data);
      setAdvert(res.data.data)
    } catch (error) {
      console.log("Error fetching advert", error);
    }
  };

  useEffect(() => {
    fetchAdvertDetails();
  }, []);

  useEffect(() => {
    const data = dummyAdvert.find(ad => ad.id == id);
    setAdvert(data);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 relative">
      {/* Card layout for advert details */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-3xl mx-auto transform transition-transform hover:scale-105 duration-300 mb-6 relative">
        <Link to="/home/adverts" className="absolute top-4 right-4 z-10">
          <AiOutlineClose className="w-8 h-8 cursor-pointer text-gray-700 hover:text-gray-900" style={{ transform: 'translate(50%, -50%)' }} />
        </Link>

        {/* Image on the left */}
        <div className="md:w-1/2">
          <img
            src={`https://savefiles.org/${advert?.image}?shareable_link=461`}
            alt={advert?.title || "Advert"}
            className="w-full h-96 object-cover" // Increased height for a larger display
          />
        </div>

        {/* Details on the right */}
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {advert?.title|| "Advert Name"}
          </h1>
          <p className="text-2xl font-bold text-green-600 mt-2">
            ${advert?.price || "0.00"}
          </p>
          <p className="text-gray-700 mt-4 text-base md:text-lg">
            {advert?.description || "Advert description goes here."}
          </p>
        </div>
      </div>

      {/* Text banner with slider */}
      <div className="mt-4 bg-gradient-to-r from-green-400 to-blue-400 text-white text-center py-4 rounded-lg">
        <h2 className="text-lg md:text-xl font-bold tracking-wider">
          {sliderText[currentSlide]}
        </h2>
      </div>
    </div>
  );
};

export default AdvertDetails;
