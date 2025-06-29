import React from 'react';
import styles from './AboutSGC.module.css';

const AboutSGC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.gradientBg}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          About our <span className={styles.highlight}>(SGC)</span> Students' Gymkhana Center
        </h1>
        
        <div className={styles.quoteCard}>
          <div className={styles.quoteDecoration}></div>
          <p className={styles.quote}>
            "We, the students of Rajiv Gandhi University of Knowledge Technologies - Srikakulam, acknowledge the vital role of a vibrant student community in the holistic growth of the university. To cultivate a sense of belonging, encourage extracurricular engagement, and prioritize the well-being of our peers, we establish the Students' Gymkhana Centre. This constitution shall serve as the guiding framework for the organization and administration of the Gymkhana Centre, ensuring accountability to the General Student Body."
          </p>
        </div>

        <div className={styles.objectivesContainer}>
          <h2 className={styles.subtitle}>Key Objectives</h2>
          <div className={styles.objectivesGrid}>
            <div className={`${styles.objectiveCard} ${styles.card1}`}>
              <h3 className={styles.objectiveTitle}>Student Advocacy</h3>
              <div className={styles.objectiveIcon}>📢</div>
            </div>
            <div className={`${styles.objectiveCard} ${styles.card2}`}>
              <h3 className={styles.objectiveTitle}>Holistic Well-being Initiatives</h3>
              <div className={styles.objectiveIcon}>💖</div>
            </div>
            <div className={`${styles.objectiveCard} ${styles.card3}`}>
              <h3 className={styles.objectiveTitle}>University Collaboration</h3>
              <div className={styles.objectiveIcon}>🤝</div>
            </div>
            <div className={`${styles.objectiveCard} ${styles.card4}`}>
              <h3 className={styles.objectiveTitle}>Foresighted Constitution Alignment</h3>
              <div className={styles.objectiveIcon}>🔮</div>
            </div>
          </div>
        </div>

        <button className={styles.constitutionButton}>
          View Constitution <span className={styles.buttonArrow}>→</span>
        </button>
      </div>
    </section>
  );
};

export default AboutSGC;