import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Event } from './eventTypes';
import styles from './EventsNews.module.css';

// Import all club icons
import competative from "../../assets/clubimgs/competative.webp";
import coding from "../../assets/clubimgs/coding.webp";
import dp from "../../assets/clubimgs/photography.webp";
import startup from "../../assets/clubimgs/startup.webp";
import robotics from "../../assets/clubimgs/robotics.webp";
import ls from "../../assets/clubimgs/ls.webp";
import internship from "../../assets/clubimgs/internship.webp";
import linquistic from "../../assets/clubimgs/linguistic.webp";
import Finance from "../../assets/clubimgs/finance.webp";
import sports from "../../assets/clubimgs/sports.webp";
import cc from "../../assets/clubimgs/cc.webp";
import arts from "../../assets/clubimgs/cc.webp";
import electronics from "../../assets/clubimgs/electronics.webp";
import eco from "../../assets/clubimgs/competative.webp";
import yoga from "../../assets/clubimgs/competative.webp";
import he from "../../assets/clubimgs/competative.webp";

const clubIcons: Record<string, string> = {
  'Competitive Club': competative,
  'Coding Club': coding,
  'Studio Club': dp,
  'Startup Club': startup,
  'Robotics Club': robotics,
  'Lecture Series Club': ls,
  'Internship & Career Opportunities Club': internship,
  'Linguistic & Personality Development Club': linquistic,
  'Finance Club': Finance,
  'Sports and Games Club': sports,
  'Cultural & Choreography Club': cc,
  'Arts & Crafts Club': arts,
  'Electronics Club': electronics,
  'Eco Club': eco,
  'Yoga Club': yoga,
  'Higher Education Club': he,
};


const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/events/${event._id}`);
  };

  const getClubIcon = () => {
    return clubIcons[event.club.name] || event.club.icon;
  };

  return (
    <motion.div
      className={styles.eventCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className={styles.cardImageContainer}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={event.imageUrl}
          alt={event.title}
          className={styles.cardImage}
          loading="lazy"
        />
        <motion.div 
          className={styles.dateBadge}
          whileHover={{ scale: 1.1 }}
        >
          <span className={styles.dateDay}>
            {new Date(event.date).getDate()}
          </span>
          <span className={styles.dateMonth}>
            {new Date(event.date).toLocaleString('default', { month: 'short' })}
          </span>
        </motion.div>
      </motion.div>

      <div className={styles.cardContent}>
        <div className={styles.clubInfo}>
          {getClubIcon() ? (
            <img 
              src={getClubIcon()} 
              alt={event.club.name} 
              className={styles.clubIconImage}
            />
          ) : (
            <span className={styles.clubIconFallback}>
              {event.club.name.charAt(0)}
            </span>
          )}
          <span className={styles.clubName}>{event.club.name}</span>
        </div>

        <h3 className={styles.cardTitle}>{event.title}</h3>
        <p className={styles.cardDescription}>
          {event.description.length > 100
            ? `${event.description.substring(0, 100)}...`
            : event.description}
        </p>

        <div className={styles.cardFooter}>
          <div className={styles.eventMeta}>
            <span className={styles.eventTime}>{event.time}</span>
            <span className={styles.eventViews}>{event.views} views</span>
          </div>
          <motion.button
            className={styles.readMoreBtn}
            onClick={handleReadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More <span className={styles.arrowIcon}>→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;