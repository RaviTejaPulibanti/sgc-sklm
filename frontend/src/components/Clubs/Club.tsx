import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { clubsData } from '../Clubs/ClubsData';
import axios from 'axios';
import styles from './Club.module.css';

// Define complete event type that matches both API and static data
interface ApiEvent {
  id: string;
  _id: string;
  title: string;
  date: string;
  description: string;
  time: string;
  views: number;
  imageUrl: string;
  club: {
    name: string;
    icon: string;
    id: string;
  };
  clubId: string;
}

const Club: React.FC = () => {
  const { id } = useParams();
  const club = clubsData.find((e) => e.id === id);
  const [clubEvents, setClubEvents] = useState<ApiEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const fetchEvents = async () => {
      if (!club) return;
      
      try {
        const response = await axios.get<Omit<ApiEvent, 'id'>[]>(`http://localhost:5000/api/events?clubId=${id}`);
        
        // Process API events to ensure all fields are present
        const processedEvents = response.data.map(event => ({
          id: event._id || '', // Use _id as id if id not provided
          _id: event._id || '',
          title: event.title,
          date: event.date,
          description: event.description,
          time: event.time || '00:00',
          views: event.views || 0,
          imageUrl: event.imageUrl || '',
          club: {
            name: event.club?.name || club.name1 + (club.name2 ? ` ${club.name2}` : ''),
            icon: event.club?.icon || club.heroImage || '/default-club-icon.png',
            id: event.club?.id || club.id
          },
          clubId: event.clubId || club.id
        }));

        setClubEvents(processedEvents);
      } catch (error) {
        console.error("Error fetching club events:", error);
        // Fallback to static events with proper typing
        const staticEvents: ApiEvent[] = club.events.map(event => ({
          id: event.id,
          _id: event.id, // For static events, use id as _id
          title: event.title,
          date: event.date,
          description: event.description,
          time: '00:00',
          views: 0,
          imageUrl: '',
          club: {
            name: club.name1 + (club.name2 ? ` ${club.name2}` : ''),
            icon: club.heroImage || '/default-club-icon.png',
            id: club.id
          },
          clubId: club.id
        }));
        setClubEvents(staticEvents);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [id, club]);

  if (!club) return <p className={styles.notFound}>Page not found</p>;

  return (
    <div className={styles.mainContainer}>
      {/* Hero Section */}
      <motion.div 
        className={styles.mainHero}
        style={{ backgroundImage: `url(${club.backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.mainTitle}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={`${styles.titlePart} ${styles.techText}`}>{club.name1}</span>
            {club.name2 && <span className={`${styles.titlePart} ${styles.innovatorsText}`}>{club.name2}</span>}
            <span className={`${styles.titlePart} ${styles.nameText}`}>Club</span>
          </motion.h1>
          <motion.div 
            className={styles.colorfulUnderline}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>

        {/* About Section */}
        <motion.section 
          className={styles.aboutSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>About Our Club</h2>
            <motion.div 
              className={`${styles.floatingElement} ${styles.element1}`}
              animate={controls}
            >
              📘
            </motion.div>
            <motion.div 
              className={`${styles.floatingElement} ${styles.element2}`}
              animate={controls}
            >
              📚
            </motion.div>
            <div className={styles.aboutContent}>
              {club.about.map((para, index) => (
                <motion.p 
                  key={index} 
                  className={styles.aboutText}
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

      {/* Events Section */}
      <motion.section 
        className={styles.eventsSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          {isLoading ? (
            <div className={styles.eventsLoading}>Loading events...</div>
          ) : clubEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {clubEvents.map(event => (
                <motion.div 
                  key={event.id}
                  className={styles.eventCard}
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
                  <p className={styles.eventDate}>{event.date}</p>
                  <p>{event.description}</p>
                  <motion.button 
                    className={styles.eventButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={styles.noEvents}>No upcoming events scheduled</div>
          )}
        </div>
      </motion.section>

      {/* Members Section */}
      <motion.section 
        className={styles.membersSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Our Members</h2>
          <div className={styles.membersGrid}>
            {club.members.map(member => (
              <motion.div 
                key={member.id}
                className={styles.memberCard}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.memberImageContainer}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.memberImage}
                  />
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.linkedinIcon}
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Club;