// components/EventCard.tsx
import React from 'react';
import type { Event } from './eventTypes';
import styles from './EventsNews.module.css';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.cardImageContainer}>
        <img src={event.imageUrl} alt={event.title} className={styles.cardImage} />
        <div className={styles.dateBadge}>
          <span className={styles.dateDay}>{new Date(event.date).getDate()}</span>
          <span className={styles.dateMonth}>
            {new Date(event.date).toLocaleString('default', { month: 'short' })}
          </span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.clubInfo}>
          <span className={styles.clubIcon}>{event.club.icon}</span>
          <span className={styles.clubName}>{event.club.name}</span>
        </div>
        <h3 className={styles.cardTitle}>{event.title}</h3>
        <p className={styles.cardDescription}>{event.description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.eventMeta}>
            <span className={styles.eventTime}>{event.time}</span>
            <span className={styles.eventViews}>{event.views} views</span>
          </div>
          <button className={styles.readMoreBtn}>
            Read More <span className={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;