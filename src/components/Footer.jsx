import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp direct chat function
  const openWhatsApp = () => {
    const phoneNumber = '971585729748'; // Your WhatsApp number without +
    const message = 'Hello! I would like to get more information about The Girl Child Movement.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        {/* WhatsApp Button */}
        <button 
          className="floating-button whatsapp-button"
          onClick={openWhatsApp}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span className="button-tooltip">Chat with us</span>
        </button>

        {/* Scroll to Top Button */}
        <button 
          className={`floating-button scroll-top-button ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="scroll-top-icon" />
          <span className="button-tooltip">Back to top</span>
        </button>
      </div>

      {/* Footer */}
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
                {/* WhatsApp Social Link */}
                <button 
                  onClick={openWhatsApp}
                  className="social-link whatsapp-social"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </button>
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
                  <p>Dubai, UAE</p>
                </div>
                {/* WhatsApp Quick Action */}
                <button 
                  className="whatsapp-quick-action"
                  onClick={openWhatsApp}
                >
                  <FaWhatsapp className="whatsapp-action-icon" />
                  Chat on WhatsApp
                </button>
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
    </>
  );
};

export default Footer;