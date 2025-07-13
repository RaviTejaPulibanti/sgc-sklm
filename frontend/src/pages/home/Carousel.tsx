import React, { useState, useEffect } from 'react';
import styles from './carousel.module.css'; 

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
    <div className={styles.container}>
      <div 
        className={styles.carousel}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className={styles.slide}>
            <div className={styles.imageContainer}>
              <img 
                src={slide.imageUrl} 
                alt={`Slide ${index + 1}`} 
                className={styles.slideImage}
                loading="lazy"
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <h2 
                className={`${styles.title} ${currentSlide === index ? styles.animateIn : ''}`}
              >
                {slide.title}
              </h2>
              <p 
                className={`${styles.subtitle} ${currentSlide === index ? styles.animateIn : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                {slide.subtitle}
              </p>
              <a 
                href={slide.ctaLink} 
                className={`${styles.ctaButton} ${currentSlide === index ? styles.animateIn : ''}`}
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