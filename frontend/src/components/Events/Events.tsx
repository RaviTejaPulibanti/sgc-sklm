import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { ClubEventType } from '../Clubs/ClubsData';
import { clubsData } from '../Clubs/ClubsData';
import EventCard from './EventCard';
import Pagination from './Pagination';
import styles from './EventsNews.module.css';
import type { Event as EventCardEvent } from './eventTypes';

// Define the complete Club type based on eventTypes requirements
interface ClubData {
  name: string;
  icon: string;
  id: string;
}

// Define the extended event type that includes clubId
type ApiEvent = EventCardEvent & {
  clubId?: string;
  club: ClubData;
};

// Default club data fallback
const getDefaultClub = (): ClubData => ({
  name: 'Unknown Club',
  icon: '/default-club-icon.png',
  id: 'unknown'
});

const EventsNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<ApiEvent[]>([]);
  const [selectedClub, setSelectedClub] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const eventsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<ApiEvent[]>(`http://localhost:5000/api/events`);
        
        const processedEvents = response.data.map(event => {
          const clubData = event.club ? {
            name: event.club.name || 'Unknown Club',
            icon: event.club.icon || '/default-club-icon.png',
            id: event.club.id || 'unknown'
          } : getDefaultClub();

          return {
            ...event,
            _id: event._id || '',
            time: event.time || '00:00',
            views: event.views || 0,
            imageUrl: event.imageUrl || '',
            club: clubData,
            clubId: event.clubId || clubData.id
          };
        });

        setEvents(processedEvents);
        setFilteredEvents(processedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        
        const allStaticEvents: ApiEvent[] = clubsData.flatMap(club => {
          const clubData: ClubData = {
            name: club.name1 + (club.name2 ? ` ${club.name2}` : ''),
            icon: club.heroImage || '/default-club-icon.png',
            id: club.id
          };

          return club.events.map(event => ({
            _id: event.id,
            title: event.title,
            date: event.date,
            description: event.description,
            time: '00:00',
            views: 0,
            imageUrl: '',
            club: clubData,
            clubId: club.id
          }));
        });

        setEvents(allStaticEvents);
        setFilteredEvents(allStaticEvents);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedClub === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.clubId === selectedClub));
    }
    setCurrentPage(1);
  }, [selectedClub, events]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading exciting events...</p>
      </div>
    );
  }

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Upcoming Events & News</h1>
          <p className={styles.heroSubtitle}>Stay updated with the latest happenings in our community</p>
          <div className={styles.scrollDownIndicator}>
            <div className={styles.mouse}>
              <div className={styles.scroller}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.clubFilter}>
        <select
          value={selectedClub}
          onChange={(e) => setSelectedClub(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="all">All Clubs</option>
          {clubsData.map(club => (
            <option key={club.id} value={club.id}>
              {club.name1} {club.name2 || ''}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.eventsGrid}>
        {currentEvents.length > 0 ? (
          currentEvents.map((event, index) => (
            <div 
              key={event._id} 
              className={styles.eventCardWrapper}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard event={event} />
            </div>
          ))
        ) : (
          <div className={styles.noEvents}>
            <div className={styles.noEventsIcon}>📅</div>
            <h3>No events found</h3>
            <p>Check back later or try a different club filter</p>
          </div>
        )}
      </div>

      {filteredEvents.length > eventsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredEvents.length / eventsPerPage)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
};

export default EventsNews;