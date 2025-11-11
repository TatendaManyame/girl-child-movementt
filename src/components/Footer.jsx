import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="images/girlchildlogo.png" 
                alt="The Girl Child Movement"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Empowering the next generation of Zimbabwean women leaders through education, 
              mentorship, and community support.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-title">Our Mission</h4>
              <ul className="footer-links">
                <li><a href="#vision">Vision & Values</a></li>
                <li><a href="#challenges">Challenges</a></li>
                <li><a href="#solution">Our Solution</a></li>
                <li><a href="#impact">Impact Stories</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Get Involved</h4>
              <ul className="footer-links">
                <li><a href="#contact">Volunteer</a></li>
                <li><a href="#contact">Partner With Us</a></li>
                <li><a href="#contact">Support Our Cause</a></li>
                <li><a href="#contact">Upcoming Events</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <div className="contact-info">
                <p>info.girlchildmovement@gmail.com</p>
                <p>+971585729748</p>
                  <p>+971585213270</p>
                <p>Harare, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 The Girl Child Movement. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> for empowering girls
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;