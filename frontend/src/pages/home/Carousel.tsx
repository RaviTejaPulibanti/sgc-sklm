import React, { useState, useEffect } from 'react';
import './carousel.css'; // Import regular CSS file

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlay, interval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const carousel = document.querySelector('.carousel');
    carousel?.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      carousel?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

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

      {/* Navigation Arrows */}
      <button 
        className="nav-arrow prev-arrow" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button 
        className="nav-arrow next-arrow" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;