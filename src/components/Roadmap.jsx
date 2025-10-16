import React from 'react';
import { FaFlag, FaRocket, FaExpand, FaChartBar } from 'react-icons/fa';

const Roadmap = () => {
  const steps = [
    {
      icon: <FaFlag />,
      title: "Foundation",
      description: "Establish partnerships with schools and communities"
    },
    {
      icon: <FaRocket />,
      title: "Program Launch",
      description: "Implement key programs addressing critical issues"
    },
    {
      icon: <FaExpand />,
      title: "Expansion",
      description: "Scale outreach and launch awareness campaigns"
    },
    {
      icon: <FaChartBar />,
      title: "Evaluation & Growth",
      description: "Measure impact and scale successful initiatives"
    }
  ];

  return (
    <section id="roadmap" className="section">
      <div className="container">
        <h2 className="section-title">Our Roadmap</h2>
        <div className="roadmap-container">
          {steps.map((step, index) => (
            <div key={index} className="roadmap-step">
              <div className="step-icon">
                {step.icon}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;