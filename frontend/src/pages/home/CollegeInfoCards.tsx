// components/CollegeInfoCards.tsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  // Different colors for each card
  const cardColors = [
    'bg-gradient-to-br from-blue-500/50 to-indigo-600/50', // Blue gradient
    'bg-gradient-to-br from-emerald-500/20 to-teal-600/20', // Green gradient
    'bg-gradient-to-br from-purple-500/20 to-violet-600/20' // Purple gradient
  ];

  return (
    <div 
      ref={ref}
      className="relative z-20 px-4 w-full"
      style={{
        marginTop: '-3rem',
        marginBottom: '5rem'
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div 
          className={`${cardColors[0]} backdrop-blur-lg bg-white/10 p-8 lg:p-10 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 min-h-[120px] flex flex-col relative overflow-hidden`}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-white/5 rounded-xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 font-serif text-center relative z-10">Academic Excellence</h3>
          <p className="text-gray-800 text-base md:text-lg flex-grow relative z-10">
          Experience a dynamic campus and the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className={`${cardColors[1]} backdrop-blur-lg bg-white/10 p-8 lg:p-10 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 min-h-[120px] flex flex-col relative overflow-hidden`}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-white/5 rounded-xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 font-serif text-center relative z-10">Vibrant Campus Life</h3>
          <p className="text-gray-800 text-base md:text-lg flex-grow relative z-10">
            Experience a dynamic campus and the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
            
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className={`${cardColors[2]} backdrop-blur-lg bg-white/10 p-8 lg:p-10 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 min-h-[120px] flex flex-col relative overflow-hidden`}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-white/5 rounded-xl" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 lg:mb-6 font-serif text-center relative z-10">Career Opportunities</h3>
          <p className="text-gray-800 text-base md:text-lg flex-grow relative z-10">
          Experience a dynamic campus  and  the environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollegeInfoCards;