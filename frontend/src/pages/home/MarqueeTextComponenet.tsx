// components/Marquee.tsx
import React from 'react';
import type { CSSProperties } from 'react';
import './Marquee.css';

interface MarqueeProps {
  text: string;
  speed?: number; // pixels per second
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
  repeat?: number;
  mobileSpeed?: number; // Optional different speed for mobile
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 50,
  direction = 'left',
  pauseOnHover = false,
  className = '',
  style = {},
  repeat = 3,
  mobileSpeed
}) => {
  // Duplicate the content for seamless looping
  const content = Array(repeat).fill(text).join(' \u00A0\u00A0 ');

  // Calculate animation duration based on speed
  const desktopDuration = `${Math.max(5, 100 / speed)}s`;
  const mobileDuration = mobileSpeed ? `${Math.max(5, 100 / mobileSpeed)}s` : desktopDuration;

  return (
    <div 
      className={`marquee-container ${className} ${pauseOnHover ? 'marquee-pause-on-hover' : ''}`}
      style={style}
      aria-label={text}
    >
      <div 
        className={`marquee-content ${direction === 'right' ? 'marquee-reverse' : ''}`}
        style={{ 
          '--desktop-duration': desktopDuration,
          '--mobile-duration': mobileDuration,
        } as CSSProperties}
      >
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Marquee;