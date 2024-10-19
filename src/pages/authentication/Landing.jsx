import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpModal from '../../components/SignUpModal'; // Adjusted import for the modal component
import bannerImages from '../../assets/images/banner1.jpg'; // Import your banner image
import bedroomImage from '../../assets/images/bedroom.jpg';
import toysImage from '../../assets/images/toys.jpg';
import beautyImage from '../../assets/images/beauty.jpg';
import fashionImage from '../../assets/images/fashion.jpg';

const images = [bannerImages, bedroomImage, toysImage, beautyImage, fashionImage];

// Overlay texts for each image
const overlayTexts = [
  "Discover Amazing Deals!",
  "Transform Your Bedroom!",
  "Toys for Every Age!",
  "Beauty Products Just for You!",
  "Fashion Trends You Can't Miss!",
];

const Landing = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image loading

  // Change image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageLoaded(false); // Reset image loading state
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 md:p-12 text-white h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in">Welcome to FusionXpress</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4 transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in delay-200">Buy or sell at your convenience</p>
          <div className="mt-6 space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </div>
        
        {/* Slideshow Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 h-80 overflow-hidden rounded-lg relative">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)} // Set image loaded state when the image loads
          />
          {/* Overlay Text */}
          <div className={`absolute inset-0 flex items-center justify-center text-center transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl md:text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
              {overlayTexts[currentImageIndex]}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Modal for Sign Up */}
      {modalOpen && <SignUpModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Landing;
