import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import './Club.css';

const Club: React.FC = () => {
  const bookControls = useAnimation();
  const bookControls2 = useAnimation();
  const bookControls3 = useAnimation();

  useEffect(() => {
    const animateBooks = async () => {
      // First book animation
      await bookControls.start({ opacity: 1, y: 0 });
      while (true) {
        await bookControls.start({
          x: [0, 20, 0, -20, 0],
          y: [0, -15, 0, 15, 0],
          rotate: [0, 5, 0, -5, 0],
          transition: { duration: 8, repeat: Infinity }
        });
      }
    };

    // Second book animation
    const animateBook2 = async () => {
      await bookControls2.start({ opacity: 1, y: 0 });
      while (true) {
        await bookControls2.start({
          x: [0, -25, 0, 25, 0],
          y: [0, 20, 0, -20, 0],
          rotate: [0, -8, 0, 8, 0],
          transition: { duration: 10, repeat: Infinity }
        });
      }
    };

    // Third book animation
    const animateBook3 = async () => {
      await bookControls3.start({ opacity: 1, y: 0 });
      while (true) {
        await bookControls3.start({
          x: [0, 30, 0, -30, 0],
          y: [0, -25, 0, 25, 0],
          rotate: [0, 10, 0, -10, 0],
          transition: { duration: 12, repeat: Infinity }
        });
      }
    };

    animateBooks();
    animateBook2();
    animateBook3();
  }, [bookControls, bookControls2, bookControls3]);

  const members = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    role: i % 3 === 0 ? 'President' : i % 2 === 0 ? 'Coordinator' : 'Member',
    linkedin: `https://linkedin.com/in/member${i + 1}`
  }));

  const events = [
    { id: 1, title: 'Tech Conference 2023', date: 'Oct 15, 2023', description: 'Annual technology conference featuring industry leaders' },
    { id: 2, title: 'Hackathon', date: 'Nov 20, 2023', description: '24-hour coding competition with exciting prizes' },
    { id: 3, title: 'Workshop Series', date: 'Dec 5-10, 2023', description: 'Week-long workshop on modern web development' },
    { id: 4, title: 'Networking Night', date: 'Jan 12, 2024', description: 'Connect with industry professionals and alumni' },
    { id: 5, title: 'Career Fair', date: 'Feb 8, 2024', description: 'Meet potential employers and explore opportunities' },
    { id: 6, title: 'Project Showcase', date: 'Mar 15, 2024', description: 'Showcase your projects to the community' },
    { id: 7, title: 'Guest Speaker Series', date: 'Apr 5, 2024', description: 'Learn from industry experts' },
    { id: 8, title: 'Annual Gala', date: 'May 20, 2024', description: 'Celebrate another successful year' }
  ];

  return (
    <div className="club-container">
      {/* Floating Books */}
      <motion.div 
        className="floating-book book-1"
        initial={{ opacity: 0, y: 50 }}
        animate={bookControls}
      >
        📘
      </motion.div>

      <motion.div 
        className="floating-book book-2"
        initial={{ opacity: 0, y: 50 }}
        animate={bookControls2}
      >
        📕
      </motion.div>

      <motion.div 
        className="floating-book book-3"
        initial={{ opacity: 0, y: 50 }}
        animate={bookControls3}
      >
        📗
      </motion.div>

      {/* Club Header */}
      <motion.div 
        className="club-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="club-title">
          <span className="title-part tech">Tech</span>
          <span className="title-part innovators">Innovators</span>
          <span className="title-part club">Club</span>
        </h1>
        <div className="colorful-underline"></div>
      </motion.div>

      {/* Full Width Hero Image */}
      <div className="full-width-hero-container">
        <motion.div
          className="full-width-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Club members working together" 
            className="hero-image"
          />
        </motion.div>
      </div>

      {/* Full Width About Section */}
      <div className="full-width-about-container">
        <motion.section 
          className="full-width-about"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <h2>About Our Club</h2>
            <p className="about-text">
              The Tech Innovators Club is a vibrant community of technology enthusiasts dedicated to exploring 
              cutting-edge innovations, sharing knowledge, and building meaningful connections. Founded in 2015, 
              we organize regular events, workshops, and hackathons to foster learning and collaboration.
            </p>
            <p className="about-text">
              Our mission is to create a platform where students can develop technical skills, work on real-world 
              projects, and connect with industry professionals. Whether you're a beginner or an experienced 
              developer, there's a place for you in our community.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Events Section */}
      <motion.section 
        className="events-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <motion.div 
              key={event.id}
              className="event-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <button className="event-button">Learn More</button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Members Section */}
      <motion.section 
        className="members-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Our Members</h2>
        <div className="members-grid">
          {members.map(member => (
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
                  src={`https://randomuser.me/api/portraits/${member.id % 2 === 0 ? 'women' : 'men'}/${member.id}.jpg`} 
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
      </motion.section>
    </div>
  );
};

export default Club;