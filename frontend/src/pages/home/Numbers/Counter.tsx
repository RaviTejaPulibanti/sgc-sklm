import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [counters, setCounters] = useState([
    { id: 1, title: 'General Secretaries', target: 36, current: 0, color: '#4CAF50' },
    { id: 2, title: 'Joint Secretaries', target: 72, current: 0, color: '#2196F3' },
    { id: 3, title: 'Executive Members', target: 252, current: 0, color: '#FF5722' },
    { id: 4, title: 'Seminars', target: 20, current: 0, color: '#9C27B0' }
  ]);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increment = 10; // Time between updates in ms
    const steps = duration / increment;
    
    counters.forEach((counter, index) => {
      const stepValue = counter.target / steps;
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.floor(currentStep * stepValue),
          counter.target
        );
        
        setCounters(prev => prev.map(item => 
          item.id === counter.id ? { ...item, current: newValue } : item
        ));
        
        if (currentStep >= steps) clearInterval(timer);
      }, increment);
    });
  }, []);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Our SGC in Numbers</h2>
      <div className="counter-grid">
        {counters.map((counter) => (
          <div 
            key={counter.id} 
            className="counter-card"
            style={{ borderBottom: `4px solid ${counter.color}` }}
          >
            <div 
              className="counter-number" 
              style={{ color: counter.color }}
            >
              {counter.current}+
            </div>
            <div className="counter-label">{counter.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;