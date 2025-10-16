import React from 'react';
import { FaUserTie, FaChalkboardTeacher, FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      icon: <FaUserTie />,
      role: "Program Director",
      description: "Oversees all initiatives and strategic direction"
    },
    {
      icon: <FaChalkboardTeacher />,
      role: "Education Specialists",
      description: "Develop and implement educational programs"
    },
    {
      icon: <FaHeart />,
      role: "Health Coordinators",
      description: "Manage health and wellness initiatives"
    },
    {
      icon: <FaUsers />,
      role: "Community Leaders",
      description: "Engage with local communities and stakeholders"
    },
    {
      icon: <FaHandsHelping />,
      role: "Volunteers",
      description: "Dedicated individuals driving change on the ground"
    }
  ];

  // Duplicate team members for seamless loop
  const allTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="team-header">
          <h2 className="section-title">Our Team</h2>
          <p className="team-subtitle">Meet the dedicated professionals working tirelessly to empower Zimbabwean girls</p>
        </div>
        
        <div className="team-scroll-container">
          <div className="team-scroll">
            {allTeamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-inner">
                  <div className="team-icon">
                    {member.icon}
                  </div>
                  <h3>{member.role}</h3>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-cta">
          <p>Join our team and make a difference!</p>
          <a href="#contact" className="btn">Become a Volunteer</a>
        </div>
      </div>
    </section>
  );
};

export default Team;