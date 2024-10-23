import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import kitchen1 from '../assets/images/kitchen1.jpg';
import cosmetic1 from '../assets/images/cosmetic1.jpg';
import fashion from '../assets/images/fashion.jpg';
import black3 from '../assets/images/black3.jpg';
import cosmetic2 from '../assets/images/cosmetic2.jpg';
import cosmetic4 from '../assets/images/cosmetic4.jpg';
import cart from '../assets/images/cart.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSpecialSlide, setCurrentSpecialSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const slides = [
    { image: kitchen1, title: "Cozy Home Deals", description: "Revamp Your Kitchen Today With Incredible Deals From FusionXpress!" },
    { image: cosmetic1, title: "Treat Your Skin Beautifully", description: "Stunning Products To Help You Feel Your Best" },
    { image: fashion, title: "Express Your Style", description: "Dress to impress and make the best of everyday" },
    { image: black3, title: "Super Sales", description: "Special Offers You Can't Resist" },
    { image: cosmetic2, title: "Beauty Deals For Everyone", description: "Take Care Of Your Skin To Make Sure You Are Always Going" }
  ];

  const circularImages = [
    { image: "https://picsum.photos/id/200/400/400", title: "FASHION" },
    { image: "https://picsum.photos/id/201/400/400", title: "BEAUTY" },
    { image: "https://picsum.photos/id/202/400/400", title: "HOME" },
    { image: "https://picsum.photos/id/203/400/400", title: "REAL ESTATE" },
    { image: "/assets/images/home2.jpg", title: "ELECTRONICS" }
  ];

  const specialSlides = [
    { image: cart, text: "Looking for anything special? We got you." },
    { image: cosmetic4, text: "Discover exclusive offers just for you." },
    { image: "https://picsum.photos/id/1070/1200/500", text: "Limited time deals you won't want to miss!" },
    { image: "https://picsum.photos/id/1080/1200/500", text: "Exclusive discounts available now." },
    { image: "https://picsum.photos/id/1090/1200/500", text: "Check out our best-selling products!" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecialSlide((prev) => (prev === specialSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCategoryClick = () => {
    navigate(`/home/category-list`); // Navigate to the Category List page
  };

  return (
    <div className="min-h-screen bg-gray-100 px-[40px]">
      {/* Banner Carousel */}
      <div className="relative h-[500px] rounded-l-3xl rounded-r-3xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top" // Ensuring full coverage with top alignment
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
                <div className="text-white max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-2xl text-black font-bold md:text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
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

        {/* Circular Images Section */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {circularImages.map((item, index) => (
              <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleCategoryClick()}>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="relative h-[500px] rounded-l-3xl rounded-r-3xl overflow-hidden">
        {specialSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${index === currentSpecialSlide ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ transform: `translateX(${(index - currentSpecialSlide) * 100}%)` }}
          >
            <img
              src={slide.image}
              alt="Special Offer"
              className="w-full h-full object-cover object-top" // Ensuring full coverage with top alignment
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-white max-w-lg">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.text}</h2>
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
                    View All Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators for Special Offers */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {specialSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSpecialSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSpecialSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
