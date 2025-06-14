import React, { useState, useEffect } from 'react';
import './carousel.css'; 

interface Slide {
  id: number;
  imageUrl: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlay, interval]);
  return (
    <div className="carousel-container">
      <div 
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="slide">
            <div className="image-container">
              <img 
                src={slide.imageUrl} 
                alt={`Slide ${index + 1}`} 
                className="slide-image"
                loading="lazy"
              />
              <div className="overlay"></div>
            </div>
            <div className="content">
              <h2 
                className={`title ${currentSlide === index ? 'animate-in' : ''}`}
              >
                {slide.title}
              </h2>
              <p 
                className={`subtitle ${currentSlide === index ? 'animate-in' : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                {slide.subtitle}
              </p>
              <a 
                href={slide.ctaLink} 
                className={`cta-button ${currentSlide === index ? 'animate-in' : ''}`}
                style={{ animationDelay: '0.6s' }}
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;