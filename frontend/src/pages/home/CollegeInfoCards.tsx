import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './CollegeInfoCards.module.css';

const CollegeInfoCards: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Different gradient classes for each card
  const cardGradients = [
    styles.blueGradient,
    styles.greenGradient,
    styles.purpleGradient
  ];

  return (
    <div 
      ref={ref}
      className={styles.container}
    >
      <motion.div
        className={styles.gridContainer}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div 
          className={`${styles.card} ${cardGradients[0]}`}
          variants={cardVariants}
        >
          <div className={styles.cardOverlay} />
          <h3 className={styles.cardTitle}>Academic Excellence</h3>
          <p className={styles.cardText}>
            Experience a dynamic campus and the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className={`${styles.card} ${cardGradients[1]}`}
          variants={cardVariants}
        >
          <div className={styles.cardOverlay} />
          <h3 className={styles.cardTitle}>Vibrant Campus Life</h3>
          <p className={styles.cardText}>
            Experience a dynamic campus and the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className={`${styles.card} ${cardGradients[2]}`}
          variants={cardVariants}
        >
          <div className={styles.cardOverlay} />
          <h3 className={styles.cardTitle}>Career Opportunities</h3>
          <p className={styles.cardText}>
            Experience a dynamic campus and the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollegeInfoCards;