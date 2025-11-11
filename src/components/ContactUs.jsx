import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaUser, FaEnvelopeOpen, FaLightbulb, FaCheck } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import './ContactUs.css';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xldaenbr");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  // Success state - show success message
  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-title-section">
            <h2 className="contact-main-title">Contact Us</h2>
            <p className="contact-subtitle">Get in touch with The Girl Child Movement. We're here to help and support.</p>
          </div>
          
          <div className="contact-content">
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
                    <p>WH 42 <br /> Street 5B Al Quoz Ind 1 <br /> Dubai,UAE</p>
                  </div>
                </div>
                
                <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon-wrapper">
                    <FaPhone className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Phone Number</h3>
                    <p>+971585729748</p>
                    <p>+971585213270</p>
                  </div>
                </div>
                
                <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-icon-wrapper">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Email Address</h3>
                    <p>info.girlchildmovement@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="info-icon-wrapper">
                    <FaClock className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 2PM</p>
                  </div>
                </div>
              </div>
              
              <div className="info-cta">
                <FaLightbulb className="cta-icon" />
                <p>Have an urgent inquiry?<br />We typically respond within 2 hours during business days.</p>
              </div>
            </div>

            {/* Success Message Side */}
            <div className="contact-form-side success-message">
              <div className="success-content">
                <div className="success-icon">
                  <FaCheck />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We've received your message and will get back to you within 24 hours.</p>
                <button 
                  className="submit-btn success"
                  onClick={() => window.location.reload()}
                >
                  <FaPaperPlane className="btn-icon" />
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  <p>WH 42 <br /> Street 5B Al Quoz Ind 1 <br /> Dubai,UAE</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                <div className="info-icon-wrapper">
                  <FaPhone className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Phone Number</h3>
                  <p>+971585729748</p>
                  <p>+971585213270</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="info-icon-wrapper">
                  <FaEnvelope className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Email Address</h3>
                  <p>info.girlchildmovement@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="info-icon-wrapper">
                  <FaClock className="info-icon" />
                </div>
                <div className="info-content">
                  <h3>Office Hours</h3>
                  <p>Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 2PM</p>
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
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                <div className="input-wrapper">
                  <FaEnvelopeOpen className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  />
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject (Optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={state.submitting}
                  />
                </div>
              </div>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="250">
                <div className="input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                  ></textarea>
                </div>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="validation-error"
                />
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${state.submitting ? 'submitting' : ''}`}
                disabled={state.submitting}
              >
                {state.submitting ? (
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