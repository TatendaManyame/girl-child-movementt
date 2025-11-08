import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Background images array - using local image names
  const backgroundImages = [
    '/images/ggg.png', 
    '/images/girlchild.jpg',
    '/images/child.jpg',
    
  ];

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="hero">
      {/* Background Images with fade transition */}
      <div className="hero-backgrounds">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </div>
      
      <div className="container">
        <h1>Empowering Zimbabwean Girls for a Brighter Future</h1>
        <p>A vision-driven,dedicated to improving the lives of Zimbabwean girls through education, health, and community support.</p>
        <div className="hero-buttons">
          <a href="#solution" className="btn">Our Programs</a>
          <a href="#contact" className="btn btn-secondary">Support Our Cause</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;