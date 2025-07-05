import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import type { Event } from './eventTypes';
import styles from './EventDetails.module.css'; // optional CSS file

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/events/${id}`);
        setEvent(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch event:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <div className={styles.detailContainer}>
      <img src={event.imageUrl} alt={event.title} className={styles.bannerImage} />

      <div className={styles.detailContent}>
        <h1 className={styles.title}>{event.title}</h1>
        <div className={styles.meta}>
          <span><strong>📅</strong> {event.date}</span>
          <span><strong>⏰</strong> {event.time}</span>
          <span><strong>👁️</strong> {event.views} views</span>
        </div>

        <div className={styles.clubInfo}>
          <span>{event.club.icon}</span> <span>{event.club.name}</span>
        </div>

        <p className={styles.description}>{event.description}</p>

        <Link to="/events" className={styles.backLink}>← Back to Events</Link>
      </div>
    </div>
  );
};

export default EventDetail;
