import { motion } from "framer-motion";

import "./ClubHome.css";

const clubs = [
   {
    id: 1,
    name: "Coding Club",
    description: "Learn to code and build amazing projects with fellow developers.",
    image: "https://source.unsplash.com/random/300x200/?coding"
  },
  {
    id: 2,
    name: "Photography Club",
    description: "Capture moments and learn photography techniques from experts.",
    image: "https://source.unsplash.com/random/300x200/?photography"
  },
  {
    id: 3,
    name: "Music Club",
    description: "Jam with musicians and explore different genres of music.",
    image: "https://source.unsplash.com/random/300x200/?music"
  },
  {
    id: 4,
    name: "Dance Club",
    description: "Express yourself through movement and learn various dance styles.",
    image: "https://source.unsplash.com/random/300x200/?dance"
  },
  {
    id: 5,
    name: "Debate Club",
    description: "Sharpen your public speaking and critical thinking skills.",
    image: "https://source.unsplash.com/random/300x200/?debate"
  },
  {
    id: 6,
    name: "Robotics Club",
    description: "Build robots and compete in exciting challenges.",
    image: "https://source.unsplash.com/random/300x200/?robotics"
  },
  {
    id: 7,
    name: "Chess Club",
    description: "Improve your strategic thinking with friendly chess matches.",
    image: "https://source.unsplash.com/random/300x200/?chess"
  },
  {
    id: 8,
    name: "Art Club",
    description: "Explore your creativity through various art mediums.",
    image: "https://source.unsplash.com/random/300x200/?art"
  },
  {
    id: 9,
    name: "Book Club",
    description: "Discuss literature and discover new favorite books.",
    image: "https://source.unsplash.com/random/300x200/?books"
  },
  {
    id: 10,
    name: "Environmental Club",
    description: "Work towards a sustainable future and protect our planet.",
    image: "https://source.unsplash.com/random/300x200/?nature"
  },
  {
    id: 11,
    name: "Film Club",
    description: "Watch and analyze films from different genres and eras.",
    image: "https://source.unsplash.com/random/300x200/?movie"
  },
  {
    id: 12,
    name: "Entrepreneurship Club",
    description: "Develop business ideas and learn startup fundamentals.",
    image: "https://source.unsplash.com/random/300x200/?business"
  },
  {
    id: 13,
    name: "Science Club",
    description: "Conduct experiments and explore scientific concepts.",
    image: "https://source.unsplash.com/random/300x200/?science"
  },
  {
    id: 14,
    name: "Cooking Club",
    description: "Learn culinary skills and try recipes from around the world.",
    image: "https://source.unsplash.com/random/300x200/?cooking"
  },
  {
    id: 15,
    name: "Sports Club",
    description: "Stay active and compete in various sports activities.",
    image: "https://source.unsplash.com/random/300x200/?sports"
  },
  {
    id: 16,
    name: "Theater Club",
    description: "Act, direct, and produce plays with fellow theater enthusiasts.",
    image: "https://source.unsplash.com/random/300x200/?theater"
  },
  {
    id: 17,
    name: "Language Club",
    description: "Learn new languages and explore different cultures.",
    image: "https://source.unsplash.com/random/300x200/?language"
  },
  {
    id: 18,
    name: "Volunteering Club",
    description: "Give back to the community through meaningful service projects.",
    image: "https://source.unsplash.com/random/300x200/?volunteer"
  }
];

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
          {clubs.map((club) => (
            <motion.div
              key={club.id}
              className="club-card"
              //@ts-ignore
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="club-image-container">
                <img src={club.image} alt={club.name} className="club-image" />
              </div>
              <div className="club-content">
                <h3 className="club-name">{club.name}</h3>
                <p className="club-description">{club.description}</p>
                <button className="view-club-btn">
                  View Club
                  <span className="arrow">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClubHome;