// components/CollegeInfoCards.tsx
import React from 'react';

const CollegeInfoCards: React.FC = () => {
  return (
    <div className="relative z-20 -mt-20 mb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Academic Excellence</h3>
          <p className="text-gray-800">
            Our college offers world-class education with state-of-the-art facilities and
            experienced faculty members dedicated to student success.
          </p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Vibrant Campus Life</h3>
          <p className="text-gray-800">
            Experience a dynamic campus environment with numerous clubs, sports, and cultural
            activities that foster personal growth and community.
          </p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-lg bg-white/30 p-6 rounded-xl shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Career Opportunities</h3>
          <p className="text-gray-800">
            Strong industry connections and career services help our graduates secure rewarding
            positions in their chosen fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfoCards;