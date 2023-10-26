import React, { useEffect, useRef, useState } from 'react';
import RocketImg from './rocket.jpg';
import './RocketContainer.css';

const pointsContent = [
  {
    pointText: 'Fiber at your doorstep',
    content: 'Experience lightning-fast internet delivered to your doorstep for no charges.',
    iconClass: 'fas fa-wifi', // Wifi icon
  },
  {
    pointText: 'Rocket-powered internet',
    content: 'Our internet powered by cybernet takes you to places never before',
    iconClass: 'fas fa-rocket', // Rocket icon
  },
  {
    pointText: 'Explore the cosmos',
    content: 'Discover new horizons with our out-of-this-world connectivity.',
    iconClass: 'fas fa-globe', // Globe icon
  },
  {
    pointText: 'Unlimited possibilities',
    content: 'With us, the sky is not the limit. It’s just the beginning.',
    iconClass: 'fas fa-calculator', // Calculator icon
  },
];

const RocketContainer = () => {
  const moonRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const moon = moonRef.current;
      if (moon) {
        const moonRect = moon.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (moonRect.top < windowHeight && moonRect.bottom >= 0) {
          // Rocket image is in the viewport
          setLoaded(true);
        } else {
          // Rocket image is out of the viewport
          setLoaded(false);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Create an interval to switch active points every 5 seconds
    const interval = setInterval(() => {
      setActivePoint((prevPoint) => (prevPoint + 1) % pointsContent.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={moonRef}
      className={`moon ${loaded ? 'loaded' : ''}`}
      style={{ backgroundImage: `url(${RocketImg})` }}
    >
      <div className="points">
        {pointsContent.map((point, index) => (
          <div
            key={index}
            className={`point ${index === activePoint ? 'active' : ''}`}
            onClick={() => setActivePoint(index)}
          >
            <i className={`fas ${point.iconClass}`} style={{ opacity: '0.6' }}></i>
            <span className="point-text">{point.pointText}</span>
            <div className="point-content">{point.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RocketContainer;
