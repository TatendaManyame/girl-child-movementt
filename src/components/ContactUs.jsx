import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaUser, FaEnvelopeOpen, FaLightbulb } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Create floating elements
    const createFloatingElements = () => {
      const section = document.querySelector('.contact-section');
      const elementsCount = 8;
      
      for (let i = 0; i < elementsCount; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.innerHTML = ['💫', '✨', '🌟', '⭐', '🔶', '🔷', '◼️', '◻️'][i];
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.animationDuration = `${8 + Math.random() * 6}s`;
        section.appendChild(element);
      }
    };

    createFloatingElements();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Show success message
    const btn = e.target.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<FaPaperPlane /> Message Sent!';
    btn.classList.add('success');
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('success');
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Title Section */}
        <div className="contact-title-section">
          <h2 className="contact-main-title">Contact Us</h2>
          <p className="contact-subtitle">Get in touch with The Girl Child Movement. We're here to help and support.</p>
        </div>
        
        <div className="contact-content">
          {/* Left Side - White Background */}
          <div className="contact-info-side">
            <div className="info-header">
              <h2>Let's Start a Conversation</h2>
              <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
            </div>
            
            <div className="contact-info-grid">
              <div className="info-item" data-aos="fade-up" data-aos-delay="100">
                <div className="info-icon-wrapper">
                  <FaMapMarkerAlt className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Our Location</h3>
                  <p>123 Empowerment Street<br />Harare, Zimbabwe</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                <div className="info-icon-wrapper">
                  <FaPhone className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Phone Number</h3>
                  <p>+263 123 456 789</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="info-icon-wrapper">
                  <FaEnvelope className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Email Address</h3>
                  <p>contact@girlchildmovement.org</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="info-icon-wrapper">
                  <FaClock className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 8:00 - 17:00<br />Saturday: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="info-cta">
              <FaLightbulb className="cta-icon" />
              <p>Have an urgent inquiry?<br />We typically respond within 2 hours during business days.</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-side">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                <div className="input-wrapper">
                  <FaEnvelopeOpen className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <div className="input-wrapper">
                  <FaLightbulb className="input-icon" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Message Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="250">
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    placeholder="Tell us about your inquiry or project..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;