import React from 'react';
import './Event.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import competative from "../../assets/clubimgs/competative.webp"

const Event: React.FC = () => {
  return (
    <div className="event-event-page">
     

      {/* Hero Section */}
      <section className="event-hero" id="home">
        <div className="event-hero-content">
          <h1>TechSpark 2024</h1>
          <p className="event-tagline">A Celebration of Innovation & Creativity</p>
          
          <div className="event-event-details">
            <p>📅 <strong>Date & Time:</strong> 25th October 2024 | 10 AM – 8 PM</p>
            <p>📍 <strong>Venue:</strong> SEMINAR HALL</p>
            <p>🎤 <strong>Host:</strong>CODING CLUB</p>
           
          </div>

            </div>
      </section>

      {/* About & Highlights */}
      <section className="event-about-section">
        <h2>About the Event</h2>
        <p>
          Join us for a day of workshops, competitions, and networking with industry leaders. 
          TechSpark 2024 brings together students, developers, and innovators for a thrilling experience.
        </p>

        <div className="event-highlights">
          <div className="event-highlight-card">
            <h3>Hackathon</h3>
            <p>24-hour coding challenge with prizes.</p>
          </div>
          <div className="event-highlight-card">
            <h3>Guest Talks</h3>
            <p>Learn from tech industry experts.</p>
          </div>
          <div className="event-highlight-card">
            <h3>Networking</h3>
            <p>Connect with peers and recruiters.</p>
          </div>
        </div>
      </section>


        
        <div className="event-social-links">
          <div className="event-organizer-logo">
              <p>Organized By :-</p>
              <img src={competative} alt=" Logo"  className="event-logo"/>
              <p> COMPETATIVE - CLUB</p>
          </div>
          <div className="event-symbols">
                          <a href="#" className="event-social-icon" aria-label="Facebook">
                            <FaFacebook />
                          </a>
                          <a href="#" className="event-social-icon" aria-label="Twitter">
                            <FaTwitter />
                          </a>
                          <a href="#" className="event-social-icon" aria-label="Instagram">
                            <FaInstagram />
                          </a>
                          <a href="https://www.linkedin.com/company/student-gymkhana-center-rajiv-gandhi-university-of-knowledge-technologies/posts/?feedView=all" className="event-social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                          </a>
                         
           </div>
        </div>
        
      
    </div>
  );
};

export default Event;