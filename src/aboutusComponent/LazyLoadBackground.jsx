import React, { useEffect, useState } from 'react';

const LazyLoadBackground = ({ imageUrl, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundStyle = isVisible ? { backgroundImage: `url(${imageUrl})` } : {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust this to control when to load
    );

    const target = document.getElementById('lazy-bg');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div
      id="lazy-bg"
      className={`min-h-screen bg-cover bg-center ${className}`}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default LazyLoadBackground;