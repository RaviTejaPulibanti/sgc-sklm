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
      name: 'John Smith',
      position: 'Chairman',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      // department: 'Operations',
      social: {
        linkedin: '#',
        facebook: '#',
      }
    },
    {
      id: 3,
      name: 'John Smith',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 4,
      name: 'John Smith',
      position: 'Vice Chairman',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 5,
      name: 'John Smith',
      position: 'President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 6,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 7,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 8,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 9,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 10,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 11,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 12,
      name: 'John Smith',
      position: 'Vice President',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 13,
      name: 'John Smith',
      position: 'Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 14,
      name: 'John Smith',
      position: 'Associate Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 15,
      name: 'John Smith',
      position: 'Associate Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 16,
      name: 'John Smith',
      position: 'Associate Public Relations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 16,
      name: 'John Smith',
      position: 'Social Media Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 17,
      name: 'John Smith',
      position: 'Associate Social Media Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 18,
      name: 'John Smith',
      position: 'Associate Social Media Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 19,
      name: 'John Smith',
      position: 'Associate Web Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      id: 20,
      name: 'John Smith',
      position: 'Web Operations Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      }
    },
  ];

  // Background circle elements
  const BackgroundCircles = () => (
    <>
      <motion.div 
        className="bg-circle bg-circle-1"
        animate={{
          x: [0, 10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className="bg-circle bg-circle-2"
        animate={{
          x: [0, -20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className="bg-circle bg-circle-3"
        animate={{
          x: [0, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
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
      <BackgroundCircles />
      
      <br />
      <br />
      <br />
      <h1 className="board-title">Executive Board</h1>
      <p className="board-subtitle">Leadership that drives our vision forward</p>
      
      <motion.div
        className="board-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {boardMembers.map((member) => (
          <motion.div
            key={member.id}
            className={`board-card ${getCardClass(member.position)}`}
            variants={cardVariants}
            whileHover="hover"
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