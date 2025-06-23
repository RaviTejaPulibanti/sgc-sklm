import { motion } from "framer-motion";
import "./ClubHome.css";
import { clubsData} from "./ClubsData";
import { Link } from "react-router-dom";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3
    }
  }
};

const ClubHome = () => {
  return (
    <div className="clubs-page-container">
      {/* Background animation elements */}
      <motion.div 
        className="bg-animation-circle"
        initial={{ x: -100, y: -100 }}
        animate={{ 
          x: ["-10%", "90%", "90%", "-10%", "-10%"],
          y: ["-10%", "-10%", "80%", "80%", "-10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="bg-animation-circle"
        initial={{ x: "80%", y: "80%" }}
        animate={{ 
          x: ["90%", "-10%", "-10%", "90%", "90%"],
          y: ["90%", "90%", "-10%", "-10%", "90%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="clubs-content-container">
        <h1 className="clubs-title">Explore Our Clubs</h1>
        <p className="clubs-subtitle">Find your passion and join like-minded individuals</p>
        
        <motion.div 
          className="clubs-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {clubsData.map((club) => (
            <motion.div
              key={club.id}
              className="club-card"
              //@ts-ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="club-image-container">
                <img src={club.heroImage} alt={club.name1} className="club-image" />
              </div>
              <div className="club-content">
                <h2 className="club-name"> {club.name1} {club.name2} Club</h2>
                <p className="club-description">{club.description}</p>
                <Link to={`/clubs/${club.id}`}> 
                <button className="view-club-btn">
                   View Club
                  <span className="arrow">→</span>
                </button></Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClubHome;