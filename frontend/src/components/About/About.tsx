import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <br />
          <br />
          <h1 className="hero-title">About Our <span>SGC</span></h1>
          <h2 className="hero-subtitle">Students' Gymkhana Center</h2>
          <div className="hero-divider"></div>
          <p className="hero-text">
            "The Vibrant Role of the Students' Gymkhana Centre (SGC), in the heart of our campus community..."
          </p>
        </motion.div>
      </section>

      {/* Director Section - Side by Side */}
      <section className="director-section">
        <div className="container reverse">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="director-image"
          >
            <img src="https://sgcrguktsklm.org.in/about/images/director.jpg" alt="Director" />
            <div className="image-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="director-content"
          >
            <h2 className="section-title">Message from the Director</h2>
            <div className="position-tag">Director</div>
            <blockquote>
              "I am delighted to share my thoughts on the pivotal role of the Students' Gymkhana Center (SGC) in fostering both curricular and extracurricular activities. Our commitment to balancing academics with diverse activities ensures the holistic development of students."
            </blockquote>
            <p>
              The SGC stands as a testament to our dedication to creating a comprehensive development platform through technical, cultural, and sports wings. These activities nurture well-rounded individuals prepared to face future challenges.
            </p>
            <div className="signature">
              <p className="name">Prof. K. V. G. D. Balaji</p>
              <p className="position">Director</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="chairman-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="chairman-image"
          >
            <img src="https://sgcrguktsklm.org.in/about/images/Ravi_Sir.JPG" alt="Chairman" />
            <div className="image-overlay"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="chairman-content"
          >
            <h2 className="section-title">From the Chairman's Desk</h2>
            <div className="position-tag">Chairman, SGC</div>
            <p>
              The Students' Gymkhana Centre (SGC) stands as a testament to our dedication for nurturing students' holistic development. Having co-founded the Student Development Campus Activities Cell (SDCAC) at RGUKT Nuzvid in 2013, which evolved into a huge platform for technical fests, I established the SGC at RGUKT-Srikakulam in 2022.
            </p>
            <p>
              My vision is clear: to empower students across diverse interests, providing them with platforms to explore, grow, and excel. At the heart of SGC are 18 dynamic student clubs, from Arts & Crafts to Robotics, each offering unique avenues for passion and growth.
            </p>
            <div className="signature">
              <p className="name">Dr.Ravi Gedela </p>
              M.Sc , M.Tech (IIT G) (Ph.D IIT G)
              <p className="position">Chairman, SGC</p>
            </div>
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
          <h2 className="section-title center">Our Vision</h2>
          <p className="vision-text">
            Beyond extracurricular pursuits, the SGC fosters leadership development, skill acquisition, and meaningful social interaction. We envision a campus buzzing with activity – from tech fests to cultural extravaganzas, workshops to conferences.
          </p>
          <p className="vision-text">
            Through enthusiastic involvement, students under SGC are shaping the academic and cultural landscape of RGUKT-AP Srikakulam, leaving an indelible mark on the institution's legacy.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;