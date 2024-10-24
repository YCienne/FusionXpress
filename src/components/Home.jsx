import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import kitchen1 from '../assets/images/kitchen1.jpg';
import cosmetic1 from '../assets/images/cosmetic1.jpg';
import fashion from '../assets/images/fashion.jpg';
import black3 from '../assets/images/black3.jpg';
import cosmetic2 from '../assets/images/cosmetic2.jpg';
import nutri from '../assets/nutri.jpg';
import house2 from '../assets/house2.jpg';
import ladies3 from '../assets/ladies3.jpg';
import sneaker1 from '../assets/sneaker1.jpg';
import bag from '../assets/bag.jpg';

// Import category images from the 'cats' folder
import bed1 from '../assets/cats/bed1.jpg';
import fash from '../assets/cats/fash.jpg';
import electronics from '../assets/cats/electronics.jpg';
import estate from '../assets/cats/estate.jpg';
import lipstick from '../assets/cats/lipstick.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { image: kitchen1, title: "Cozy Home Deals", description: "Revamp Your Kitchen Today With Incredible Deals From FusionXpress!", color: "text-yellow-300" },
    { image: cosmetic1, title: "Treat Your Skin Beautifully", description: "Stunning Products To Help You Feel Your Best", color: "text-pink-400" },
    { image: fashion, title: "Express Your Style", description: "Dress to impress and make the best of everyday", color: "text-blue-500" },
    { image: black3, title: "Super Sales", description: "Special Offers You Can't Resist", color: "text-red-400" },
    { image: cosmetic2, title: "Beauty Deals For Everyone", description: "Take Care Of Your Skin To Make Sure You Are Always Going", color: "text-purple-300" }
  ];

  const textSlide = {
    title: "Welcome to FusionXpress",
    description: "Explore a world of variety at your convenience.",
    color: "text-white",
  };

  // Updated category images array
  const categoryImages = [
    { image: bed1, title: "HOME" },
    { image: fash, title: "FASHION" },
    { image: electronics, title: "ELECTRONICS" },
    { image: estate, title: "REAL ESTATE" },
    { image: lipstick, title: "BEAUTY" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (slides.length + 1)); // Loop through the slides
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleCategoryClick = () => {
    navigate(`/home/category-list`);
  };

  const handleViewAllProductsClick = () => {
    navigate('/home/adverts');
  };

  return (
    <div className="min-h-screen bg-gray-100 px-[40px]">
      {/* Banner Carousel */}
      <div className="relative h-[500px] rounded-l-3xl rounded-r-3xl overflow-hidden">
        {/* Text-only Slide */}
        <div className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${currentSlide === 0 ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="relative h-full bg-gradient-to-r from-blue-600 to-purple-500 flex items-center justify-center">
            <div className="text-center">
              <h1 className={`text-4xl font-bold ${textSlide.color} mb-4`}>{textSlide.title}</h1>
              <p className={`text-2xl ${textSlide.color}`}>{textSlide.description}</p>
            </div>
          </div>
        </div>

        {/* Regular Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${currentSlide === index + 1 ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transform: `translateX(${(index + 1 - currentSlide) * 100}%)` }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
                <div className={`max-w-lg ${slide.color}`}>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-2xl font-bold md:text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[...Array(slides.length + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Category */}
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>

        {/* Category Cards Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {categoryImages.map((item, index) => (
            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={handleCategoryClick}>
              <div className="w-40 h-40 mb-4 shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Adverts Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Popular Adverts</h2>
          <button 
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
            onClick={handleViewAllProductsClick}
          >
            View All Adverts
          </button>
        </div>

        {/* Adjusted Grid for Popular Adverts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[ // Popular adverts data
            { image: ladies3, title: "Ladies Fashion", description: "Stylish outfits for women", price: "$45.00" },
            { image: sneaker1, title: "Sneaker Collection", description: "Latest sneaker styles", price: "$89.99" },
            { image: nutri, title: "Nutri", description: "Healthy food options", price: "$12.99" },
            { image: house2, title: "House for Sale", description: "Lovely 3 bedroom house", price: "$300,000" },
            { image: bag, title: "Fashion Bag", description: "Trendy handbag for all occasions", price: "$55.00" }
          ].map((item, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 group">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                <p className="text-white">{item.description}</p>
                <p className="text-yellow-400 font-bold">{item.price}</p>
              </div>
            </div>
          ))}  
        </div>
      </div>
    </div>
  );
};

export default Home;
