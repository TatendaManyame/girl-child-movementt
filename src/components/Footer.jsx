import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Girl Child Movement</h3>
            <p>Empowering Zimbabwean girls through education, health, and community support for a brighter future.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#vision">Our Vision</a></li>
              <li><a href="#solution">Our Programs</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#team">Our Team</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><FaEnvelope /> info@girlchildmovement.org</p>
              <p><FaPhone /> +263 123 456 789</p>
              <p><FaMapMarkerAlt /> Harare, Zimbabwe</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest initiatives and impact stories.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 The Girl Child Movement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;