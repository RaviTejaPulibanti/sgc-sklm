import React, { useState, useEffect } from 'react';
import './AdvisoryBoard.css';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

interface BoardMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
}

const AdvisoryBoard: React.FC = () => {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const boardMembers: BoardMember[] = [
    {
      id: 1,
      name: "Dr. Robert Langdon",
      position: "Chairperson",
      department: "University Leadership",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Distinguished professor with 25 years of academic leadership experience. Spearheading our strategic initiatives and global partnerships. Authored several influential papers on educational reform.",
      linkedin: "#",
      twitter: "#",
      email: "#",
      website: "#"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Vice Chair",
      department: "Computer Science",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "PhD in Computer Engineering with 15 years of industry experience. Specializes in AI research and has led multiple successful tech startups. Currently heading the AI ethics committee.",
      linkedin: "#",
      email: "#",
      github: "#"
    },
    {
      id: 3,
      name: "Prof. Michael Chen",
      position: "Academic Advisor",
      department: "Business Administration",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Former CEO of TechCorp with expertise in business strategy and innovation management. Advisor to Fortune 500 companies and government think tanks on digital transformation.",
      linkedin: "#",
      twitter: "#",
      facebook: "#"
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      position: "Research Director",
      department: "Electrical Engineering",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Published researcher in renewable energy systems with multiple patent awards. Leads the university's green energy initiative and international research collaborations.",
      linkedin: "#",
      email: "#",
      instagram: "#"
    },
    {
      id: 5,
      name: "Prof. David Wilson",
      position: "Industry Liaison",
      department: "Mechanical Engineering",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Industrial designer with 20+ years of experience in automotive engineering. Bridges academia and industry through innovative partnership programs and student internships.",
      twitter: "#",
      email: "#",
      website: "#"
    }
  ];

  const toggleBio = (id: number) => {
    if (isMobile) {
      setActiveMember(activeMember === id ? null : id);
    } else {
      setActiveMember(id);
    }
  };

  const closeBio = () => {
    setActiveMember(null);
  };

  return (
    <div className="advisory-board">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Meet Our Advisory Board</h2>
          <p className="section-subtitle">Visionary leaders guiding our institution's future</p>
          <div className="divider"></div>
        </motion.div>

        <div className="board-members-grid">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`member-card ${activeMember === member.id ? 'active' : ''}`}
              onClick={() => toggleBio(member.id)}
              whileHover={{ y: -10 }}
            >
              <div className="card-inner">
                <div className="card-image-container">
                  <div className="image-wrapper">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="member-image"
                    />
                    <div className="image-hover-effect"></div>
                  </div>
                  <div className="decorative-shape"></div>
                </div>

                <div className="card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-department">{member.department}</p>
                  
                  <div className="social-links">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaLinkedin className="social-icon" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaTwitter className="social-icon" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} onClick={e => e.stopPropagation()}>
                        <FaEnvelope className="social-icon" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaGithub className="social-icon" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaInstagram className="social-icon" />
                      </a>
                    )}
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaFacebook className="social-icon" />
                      </a>
                    )}
                    {member.website && (
                      <a href={member.website} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                        <FaGlobe className="social-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {activeMember === member.id && (
                  <motion.div 
                    className="expanded-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bio-content">
                      <p>{member.bio}</p>
                      <button className="close-bio" onClick={(e) => {
                        e.stopPropagation();
                        closeBio();
                      }}>
                        <IoMdClose />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;