// components/HeroSection.tsx
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQE-yJgliGUIPw/feedshare-shrink_2048_1536/B56ZYor9.lGsAs-/0/1744439342613?e=1752710400&v=beta&t=_IQvKjEUvqqNj76OQg0DzvzGs7sS0GlY_nkYE3XJwiA",
    "/college-image-2.jpg",
    "/college-image-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-serif">
            Welcome to Our Prestigious College
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-2xl md:max-w-3xl lg:max-w-4xl">
            Shaping futures through excellence in education, research, and innovation.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md text-base sm:text-lg font-medium transition duration-300 transform hover:scale-105">
            Explore Programs
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full transition duration-300"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full transition duration-300"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;