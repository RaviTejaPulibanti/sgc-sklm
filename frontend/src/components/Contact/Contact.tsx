import React, { useEffect } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    // Generate floating icons
    const container = document.querySelector('.contact-container');
    if (container) {
      for (let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.innerHTML = getRandomIcon();
        container.appendChild(icon);
        
        // Set random initial position
        const size = Math.random() * 30 + 20;
        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;
        
        // Set random animation
        const duration = Math.random() * 20 + 10;
        icon.style.animation = `float ${duration}s infinite ease-in-out`;
        icon.style.opacity = `${Math.random() * 0.2 + 0.05}`;
      }
    }
  }, []);

  const getRandomIcon = () => {
    const icons = [
      '📱', '📲', '📞', '📠', '📧', '📨', '📩', '📪', '📫', '📬', '📭', '📮',
      '✉️', '📝', '📱', '📶', '📳', '📴', '📷', '📸', '📹', '📺', '📻', '🔌',
      '💻', '🖥️', '⌨️', '🖱️', '📱', '🔋', '🖲️', '💽', '💾', '💿', '📀'
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Fill out the form below or use our contact information.</p>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
              </div>
              
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="form-group">
                <input type="text" id="subject" placeholder=" " required />
                <label htmlFor="subject">Subject</label>
              </div>
              
              <div className="form-group">
                <textarea id="message" placeholder=" " required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
                <span className="send-icon">✈️</span>
              </button>
            </form>
            
            <div className="contact-info">
              <div className="info-section">
                <h2 className="info-section-title">Contact Information</h2>
                <p className="info-section-description">Feel free to reach out through any of these channels</p>
                
                <div className="info-items-container">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-text">
                      <h3>Our Location</h3>
                      <p>123 Tech Street, Digital City, DC 10001</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-text">
                      <h3>Phone Number</h3>
                      <p>+1 (555) 123-4567</p>
                      <p>+1 (555) 765-4321</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-text">
                      <h3>Email Address</h3>
                      <p>contact@example.com</p>
                      <p>support@example.com</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">🕒</div>
                    <div className="info-text">
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9am - 6pm</p>
                      <p>Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">📸</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📹</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;