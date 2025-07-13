// Marquee.tsx
import React from 'react';
import './Marquee.css';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  backgroundColor?: string;
  textColor?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 50,
  direction = 'left',
  backgroundColor = '#003366',
  textColor = 'white'
}) => {
  return (
    <div 
      className="marquee-container"
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div 
        className={`marquee-content ${direction}`}
        style={{
          animationDuration: `${speed}s`
        }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;