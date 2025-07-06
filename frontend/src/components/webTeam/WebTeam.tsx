import React from 'react';
import styles from './WebTeam.module.css';

// Import your team member images
import team1 from '../../assets/webteam/m1.webp';
import team2 from '../../assets/webteam/m2.webp';
import team3 from '../../assets/webteam/m3.webp';

const WebTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'M. Rakesh (Rgukt Nuzvid)',
      role: 'Fullstack Developer',
      bio: 'Specializes in React and TypeScript with 1 year of experience building responsive web applications.',
      linkedin: 'https://www.linkedin.com/in/rakesh-mummana-16379931a',
      image: team1
    },
    {
      id: 3,
      name: 'Harish Majji',
      role: 'Backend Developer',
      bio: 'Expert in Node.js and database architecture with a strong emphasis on scalable solutions.',
      linkedin: 'https://www.linkedin.com/in/majji-harish-064376325',
      image: team3
    },
    {
      id: 2,
      name: 'P. Raviteja',
      role: 'Frontend Developer',
      bio: 'Passionate about creating intuitive user experiences with a focus on accessibility and modern design principles.',
      linkedin: 'https://www.linkedin.com/in/ravi-teja-pulibanti-28872132b',
      image: team2
    },
  ];

  return (
    <section className={styles.teamSection} id="team">
      <div className={styles.teamContainer}>
        <h1 className={styles.title}>
          <span className={styles.titleMain}>Meet Our</span>
          <span className={styles.titleSub}>Web Team</span>
        </h1>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImageWrapper}>
                <div className={styles.roundedImageContainer}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.memberName}>{member.name}</h2>
                <h3 className={styles.memberRole}>{member.role}</h3>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.socialLink}>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkedinButton}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
              <div className={styles.cardBg}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebTeam;