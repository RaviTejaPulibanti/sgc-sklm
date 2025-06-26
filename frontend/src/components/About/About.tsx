import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="hero-content"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="hero-title">About Our <span>SGC</span></h1>
          </motion.div>
          <motion.div variants={fadeInUp}>
            {/* <h2 className="hero-subtitle">Students' Gymkhana Center</h2> */}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="hero-divider"></div>
          </motion.div>
          <motion.p variants={fadeInUp} className="hero-text">
            "The Vibrant Role of the Students' Gymkhana Centre (SGC), in the heart of our campus community..."
          </motion.p>
        </motion.div>
        
        {/* Animated Background Elements */}
        <div className="hero-circle-1"></div>
        <div className="hero-circle-2"></div>
      </section>

      {/* Director Section */}
      <section className="director-section">
        <div className="container reverse">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="director-image"
          >
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDsx5yLHbg7quYPl9zu_OHZPIZG2fHS4k9wWsiDp1BsroJDKA3WH2UJr7R4g7M2YAC9eN78PNwn28bE8Eh_Xb3CSdBUmrT5ADa5pTWT_VzhtZ2Y36ER0hM8JN7IRRAKdYh9GrxP1hL8MVs_In3iP8-VyMUzfUngmK2EDiFyZKdWIsb_rwfO_i8DNIuszf3/s320/director.jpg" alt="Director" />
            <div className="image-overlay"></div>
            <div className="image-border"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="director-content"
          >
            <motion.h2 
              whileHover={{ color: 'var(--accent-color)' }}
              className="section-title"
            >
              Message from the Director
            </motion.h2>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="position-tag"
            >
              Director
            </motion.div>
            <motion.blockquote
              whileHover={{ borderLeftColor: 'var(--accent-color)' }}
            >
              "I am delighted to share my thoughts on the pivotal role of the Students' Gymkhana Center (SGC) in fostering both curricular and extracurricular activities..."
            </motion.blockquote>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              The SGC stands as a testament to our dedication to creating a comprehensive development platform...
            </motion.p>
            <motion.div 
              className="signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="name">Prof. K. V. G. D. Balaji</p>
              <p className="position">Director</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="chairman-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="chairman-image"
          >
            <img src="https://sgcrguktsklm.org.in/about/images/Ravi_Sir.JPG" alt="Chairman" />
            <div className="image-overlay"></div>
            <div className="image-border"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
            className="chairman-content"
          >
            <motion.h2 
              whileHover={{ color: 'var(--tertiary-color)' }}
              className="section-title"
            >
              From the Chairman's Desk
            </motion.h2>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="position-tag"
            >
              Chairman, SGC
            </motion.div>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              The Students' Gymkhana Centre (SGC) stands as a testament to our dedication...
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              My vision is clear: to empower students across diverse interests...
            </motion.p>
            <motion.div 
              className="signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="name">Dr.Ravi Gedela </p>
              <p>M.Sc , M.Tech (IIT G) (Ph.D IIT G)</p>
              <p className="position">Chairman, SGC</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="vision-section"
      >
        <div className="container">
          <motion.h2 
            className="section-title center"
            whileHover={{ scale: 1.05 }}
          >
            Our Vision
          </motion.h2>
          <motion.p 
            className="vision-text"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            Beyond extracurricular pursuits, the SGC fosters leadership development...
          </motion.p>
          <motion.p 
            className="vision-text"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Through enthusiastic involvement, students under SGC are shaping...
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;