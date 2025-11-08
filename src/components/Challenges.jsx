import React from 'react';
import { FaExclamationTriangle, FaTint, FaHeartBroken, FaBook } from 'react-icons/fa';

const Challenges = () => {
  const challenges = [
    {
      icon: <FaExclamationTriangle />,
      title: "Drug Abuse",
      description: "Substance abuse impacting school retention and personal development. Many girls face pressure and turn to substances as coping mechanisms.",
      image: "/images/drugs.jpeg",
      stats: "1 in 4 girls affected",
      color: "#e74c3c"
    },
    {
      icon: <FaTint />,
      title: "Menstrual Hygiene",
      description: "Lack of proper hygiene facilities and products leading to school absenteeism. Many girls miss up to 5 days of school monthly.",
      image: "/images/pads.jpeg",
      stats: "60% miss school monthly",
      color: "#9b59b6"
    },
    {
      icon: <FaHeartBroken />,
      title: "Early Marriages",
      description: "Cultural and economic pressures forcing girls into early marriages, cutting short their education and personal development.",
      image: "/images/em.jpeg",
      stats: "34% married before 18",
      color: "#e67e22"
    },
    {
      icon: <FaBook />,
      title: "Limited Resources",
      description: "Insufficient educational resources, overcrowded classrooms, and lack of learning materials creating barriers to quality education.",
      image: "/images/education.jpeg",
      stats: "70% lack basic resources",
      color: "#3498db"
    }
  ];

  return (
    <section id="challenges" className="section challenges-section">
      <div className="container">
        <div className="challenges-header">
          <h2 className="section-title">The Challenges We Face</h2>
          <p className="challenges-subtitle">Addressing critical barriers that prevent Zimbabwean girls from reaching their full potential</p>
        </div>
        
        <div className="challenges-scroll-container">
          <div className="challenges-scroll">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-image-container">
                  <img 
                    src={challenge.image} 
                    alt={challenge.title}
                    className="challenge-image"
                  />
                  <div className="challenge-overlay" style={{ backgroundColor: `${challenge.color}40` }}>
                    <div className="challenge-icon" style={{ color: challenge.color }}>
                      {challenge.icon}
                    </div>
                  </div>
                  <div className="challenge-stats" style={{ backgroundColor: challenge.color }}>
                    {challenge.stats}
                  </div>
                </div>
                
                <div className="challenge-content">
                  <h3 style={{ color: challenge.color }}>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                  <div className="challenge-actions">
                    <button className="challenge-btn" style={{ borderColor: challenge.color, color: challenge.color }}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>← Scroll to explore →</span>
        </div>

        {/* Call to Action Section */}
        <div className="challenges-cta">
          <div className="cta-content">
            <h3>Together We Can Overcome These Challenges</h3>
            <p>Your support helps us provide solutions and create lasting change in the lives of Zimbabwean girls</p>
            <div className="cta-buttons">
              <a href="#solution" className="btn">See Our Solutions</a>
              <a href="#contact" className="btn btn-secondary">Support Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;