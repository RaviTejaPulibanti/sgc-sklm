import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import './Club.css';
import { useParams } from 'react-router-dom';
import { clubsData } from './ClubsData';

const Club: React.FC = () => {
  const { id } = useParams();
  const club = clubsData.find((e) => e.id === id);
  if (!club) return <p>Page not found</p>;

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 });
      await controls.start({
        rotate: [0, 5, -5, 0],
        y: [0, -10, 10, 0],
        transition: { duration: 8, repeat: Infinity }
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="club-container">
      {/* Hero Section with Club-specific Background */}
      <motion.div 
        className="club-hero"
        style={{ backgroundImage: `url(${club.backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="club-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="title-part tech">{club.name1}</span>
            {club.name2 && <span className="title-part innovators">{club.name2}</span>}
            <span className="title-part club">Club</span>
          </motion.h1>
          <motion.div 
            className="colorful-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
           
           
        </div><motion.section 
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <h2>About Our Club</h2>
          <motion.div 
        className="floating-element element-1"
        animate={controls}
      >
        📘
      </motion.div>
      <motion.div 
        className="floating-element element-2"
        animate={controls}
      >
        📚
      </motion.div>
          <div className="about-content">
            {club.about.map((para, index) => (
              <motion.p 
                key={index} 
                className="about-text"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {para}
              </motion.p>
            ))}
            
          </div>
        </div>
      </motion.section>
      </motion.div>

      {/* About Section */}
     

      {/* Events Section */}
      <motion.section 
        className="events-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {club.events.map(event => (
              <motion.div 
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
              >
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p>{event.description}</p>
                <motion.button 
                  className="event-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Members Section */}
      <motion.section 
        className="members-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <h2>Our Members</h2>
          <div className="members-grid">
            {club.members.map(member => (
              <motion.div 
                key={member.id}
                className="member-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <FaLinkedin />
                  </a>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Floating decorative elements */}
      
    </div>
  );
};

export default Club;