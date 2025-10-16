import React from 'react';
import { FaEye, FaGraduationCap, FaHeartbeat, FaUsers } from 'react-icons/fa';

const Vision = () => {
  return (
    <section id="vision" className="section">
      <div className="container">
        <h2 className="section-title">Our Vision</h2>
        
        {/* Top Section with Image and Main Vision */}
        <div className="vision-hero">
          <div className="vision-content">
            <h3>Creating a World Where Every Girl Can Thrive</h3>
            <p>We envision a Zimbabwe where every girl has the opportunity to reach her full potential, free from barriers and limitations. Through comprehensive support in education, health, and community development, we're building a brighter future for generations to come.</p>
          
          </div>
          <div className="vision-image">
            <img src="/images/girlchild.jpg" alt="Smiling Zimbabwean girl with books" />
          </div>
        </div>

        {/* Vision Cards Section */}
        <div className="grid grid-4">
          <div className="card vision-card">
            <div className="card-image">
              <FaEye className="icon" />
            </div>
            <h3>Clear Vision</h3>
            <p>Empower every Zimbabwean girl to realize her potential through access to quality education, healthcare, and supportive communities.</p>
          </div>
          
          <div className="card vision-card">
            <div className="card-image">
              <FaGraduationCap className="icon" />
            </div>
            <h3>Education</h3>
            <p>Ensure every girl has access to quality education and learning opportunities to build a better future.</p>
          </div>
          
          <div className="card vision-card">
            <div className="card-image">
              <FaHeartbeat className="icon" />
            </div>
            <h3>Health</h3>
            <p>Provide comprehensive healthcare support including menstrual hygiene and reproductive health education.</p>
          </div>
          
          <div className="card vision-card">
            <div className="card-image">
              <FaUsers className="icon" />
            </div>
            <h3>Community</h3>
            <p>Build strong, supportive communities that protect and nurture the girl child.</p>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="vision-bottom">
          <div className="vision-bottom-image">
            <img src="/images/girlchild two.jpg" alt="Group of Zimbabwean girls learning together" />
          </div>
          <div className="vision-bottom-content">
            <h3>Together We Can Make a Difference</h3>
            <p>Every girl deserves the chance to dream big and achieve her goals. With your support, we're creating pathways to success and breaking down barriers that hold young women back.</p>
            <ul className="vision-features">
              <li>✓ Quality education for all girls</li>
              <li>✓ Comprehensive health support</li>
              <li>✓ Safe community spaces</li>
              <li>✓ Leadership development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;