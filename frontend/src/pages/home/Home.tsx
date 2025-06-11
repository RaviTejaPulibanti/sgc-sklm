import React from 'react';
import Carousel from './Carousel';

const Home: React.FC = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1557761463-34b84c0b6c2e',
      title: 'Welcome to Our Prestigious College',
      subtitle: 'Excellence in Education Since 1950',
      ctaText: 'Explore Programs',
      ctaLink: '/programs'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1557761463-34b84c0b6c2e',
      title: 'Innovative Learning Environment',
      subtitle: "State-of-the-art Facilities for Tomorrow's Leaders",
      ctaText: 'Tour Our Campus',
      ctaLink: '/campus-tour'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1557761463-34b84c0b6c2e',
      title: 'Join Our Vibrant Community',
      subtitle: 'Applications Now Open for Fall 2023',
      ctaText: 'Apply Now',
      ctaLink: '/admissions'
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-gray-50 ">
      {/* ✅ Responsive height for mobile and desktop */}
        <Carousel slides={slides} autoPlay={true} interval={6000} />
      {/* Main Content */}
    </div>
  );
};

export default Home;
