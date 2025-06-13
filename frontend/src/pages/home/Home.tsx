
import React from 'react';
import Carousel from './Carousel';
import Counter from './Numbers/Counter';

const Home: React.FC = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQE-yJgliGUIPw/feedshare-shrink_2048_1536/B56ZYor9.lGsAs-/0/1744439342613?e=1752710400&v=beta&t=_IQvKjEUvqqNj76OQg0DzvzGs7sS0GlY_nkYE3XJwiA',
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
        <Counter />
      {/* Main Content */}
    </div>
  );
};

export default Home;
