import React from 'react';
import { FaBookOpen, FaHandsHelping, FaHome } from 'react-icons/fa';

const Solution = () => {
  const solutions = [
    {
      icon: <FaBookOpen />,
      title: "Education",
      points: ["Scholarships for needy girls", "Mentorship programs", "After-school tutoring", "Career guidance"]
    },
    {
      icon: <FaHandsHelping />,
      title: "Health",
      points: ["Hygiene kits distribution", "Reproductive health workshops", "Mental health support", "Medical checkups"]
    },
    {
      icon: <FaHome />,
      title: "Community",
      points: ["Parental training programs", "Safe spaces for girls", "Community awareness", "Advocacy campaigns"]
    }
  ];

  return (
    <section id="solution" className="section">
      <div className="container">
        <h2 className="section-title">Our Solution</h2>
        <div className="grid grid-3">
          {solutions.map((solution, index) => (
            <div key={index} className="card solution-card">
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3>{solution.title}</h3>
              <ul>
                {solution.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;