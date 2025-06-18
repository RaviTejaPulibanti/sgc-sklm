import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './ExecutiveBoard.css';

interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  department?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const ExecutiveBoard: React.FC = () => {
  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: 'Mr. Ravi Gedela',
      position: 'Chairman',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Mr. P.Kutti',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      department: 'Operations',
    },
    {
      id: 3,
      name: 'Mrs. R.Deepa',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      department: 'Technology',
    },
    {
      id: 4,
      name: 'Mr. T.Narashimaappadu',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      department: 'Finance',
    },
    {
      id: 5,
      name: 'K. Guna Sri',
      position: 'President',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      department:'CSE',
    },
    {
      id: 6,
      name: 'K. Jai Sheel',
      position: 'Vice President (CSE)',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      department:'CSE',
    },
    {
      id: 7,
      name: 'K. Pavan Kumar',
      position: 'Vice President (ECE)',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      department:'ECE',
    },
    {
      id: 8,
      name: 'Vyshnavi',
      position: 'Vice President (CIVIL)',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      department:'CIVIL',
    },
    {
      id: 9,
      name: 'G. Rakesh',
      position: 'Vice President (MECH)',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      department:'MECH',
    },
    {
      id: 10,
      name: 'G. Nishanth Reddy',
      position: 'Vice President (EEE)',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      department:'EEE',
    },
    {
      id: 11,
      name: 'K. Smily Grace',
      position: 'Vice President (PUC)',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      department:'CSE',
    },
    {
      id: 12,
      name: 'D. Sandhya',
      position: 'Vice President (PUC)',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      department:'ECE',
    },
    {
      id: 13,
      name: 'Y. Srinivas',
      position: 'Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      department:'ECE',
    },
    {
      id: 14,
      name: 'P. Gangadhar',
      position: 'Associate Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      department:'CSE',
    },
    {
      id: 15,
      name: 'N. Govardhan',
      position: 'Associate Public Realtions Manager',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      department:'ECE',
    },
    {
      id: 16,
      name: 'K. Gayathri',
      position: 'Social Media Manager',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      department:'ECE',
    },
    {
      id: 17,
      name: 'P. Gireesh Satya',
      position: 'Associate Social Media Manager',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      department:'EEE',
    },
    {
      id: 18,
      name: 'Ch. Jeevan Sai',
      position: 'Associate Social Media Manager',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      department:'CSE',
    },
    {
      id: 19,
      name: 'Harish',
      position: 'Associate Web Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      department: 'CSE',
    },
    {
      id: 20,
      name: 'Raviteja',
      position: 'Web operations Manager',
      image: '',
      department: 'CSE',
    },
  ];

  // Floating background elements for all devices
  const FloatingElements = () => (
    <>
      {/* Floating circles */}
      <motion.div 
        className="floating-element floating-circle"
        initial={{ x: -100, y: -50 }}
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -50, 0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      />
      
      {/* Floating triangles */}
      <motion.div 
        className="floating-element floating-triangle"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [0, -80, 0, 80, 0],
          y: [0, 60, 0, -60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      />
      
      {/* Floating squares */}
      <motion.div 
        className="floating-element floating-square"
        initial={{ x: -150, y: 150 }}
        animate={{
          x: [0, 120, 0, -120, 0],
          y: [0, -80, 0, 80, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
      />
    </>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -3,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const getCardClass = (position: string) => {
    switch (position.toLowerCase()) {
      case 'chairman':
        return 'card-chairman';
      case 'vice chairman':
        return 'card-vice-chairman';
      case 'president':
        return 'card-president';
      default:
        return 'card-member';
    }
  };

  return (
    <div className="executive-board">
      <FloatingElements />
      <div className="board-header">
        <h1 className="board-title">Executive Board</h1>
        <p className="board-subtitle">Leadership that drives our vision forward</p>
      </div>
      
      <motion.div
        className="board-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className={`board-card ${getCardClass(member.position)}`}
            variants={cardVariants}
            whileHover="hover"
            custom={index}
          >
            <div className="card-image-container">
              <img src={member.image} alt={member.name} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-name">{member.name}</h3>
              <p className="card-position">{member.position}</p>
              {member.department && (
                <p className="card-department">{member.department}</p>
              )}
              
              {member.social && (
                <div className="social-icons">
                  {member.social.linkedin && (
                    <motion.a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaLinkedin className="social-icon linkedin" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaTwitter className="social-icon twitter" />
                    </motion.a>
                  )}
                  {member.social.facebook && (
                    <motion.a 
                      href={member.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaFacebook className="social-icon facebook" />
                    </motion.a>
                  )}
                  {member.social.instagram && (
                    <motion.a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaInstagram className="social-icon instagram" />
                    </motion.a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExecutiveBoard;