// // components/EventsNews.tsx
// import React, { useState, useEffect } from 'react';
// import { dummyEvents } from './dummyEvents';
// import type { Event } from './eventTypes';
// import EventCard from './EventCard';
// import Pagination from './Pagination';
// import styles from './EventsNews.module.css';

// const EventsNews: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [events, setEvents] = useState<Event[]>([]);
//   const eventsPerPage = 6;

//   useEffect(() => {
//     // Simulate API fetch
//     setEvents(dummyEvents);
//   }, []);

//   // Get current events
//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   // Change page
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className= {styles.eventsContainer} >
//       {/* Hero Header */}
//       <div className={styles.hero}>
//         <div className={styles.heroContent}>
//           <h1 className={styles.heroTitle}>Upcoming Events & News</h1>
//           <p className={styles.heroSubtitle}>Stay updated with the latest happenings in our community</p>
//         </div>
//       </div>

//       {/* Events Grid */}
//       <div className={styles.eventsGrid}>
//         {currentEvents.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </div>

//       {/* Pagination */}
//       {events.length > eventsPerPage && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={Math.ceil(events.length / eventsPerPage)}
//           onPageChange={paginate}
//         />
//       )}
//     </div>
//   );
// };

// export default EventsNews;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Event } from './eventTypes';
import EventCard from './EventCard';
import Pagination from './Pagination';
import styles from './EventsNews.module.css';

const EventsNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState<Event[]>([]);
  const eventsPerPage = 6;

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Get current events for pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.eventsContainer}>
      {/* Hero Header */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Upcoming Events & News</h1>
          <p className={styles.heroSubtitle}>Stay updated with the latest happenings in our community</p>
        </div>
      </div>

      {/* Events Grid */}
      <div className={styles.eventsGrid}>
        {currentEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {/* Pagination */}
      {events.length > eventsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(events.length / eventsPerPage)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
};

export default EventsNews;
