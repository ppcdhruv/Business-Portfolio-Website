import React from 'react';
import { motion } from 'framer-motion';

const Rocket3D: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="stop-color-light-body dark:stop-color-dark-body-start" />
            <stop offset="50%" className="stop-color-light-body-mid dark:stop-color-dark-body-mid" />
            <stop offset="100%" className="stop-color-light-body dark:stop-color-dark-body-end" />
          </linearGradient>
           <linearGradient id="coneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" className="stop-color-light-accent-start dark:stop-color-dark-accent-start" />
             <stop offset="100%" className="stop-color-light-accent-end dark:stop-color-dark-accent-end" />
          </linearGradient>
          <radialGradient id="windowGradient">
            <stop offset="0%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#A5B4FC" />
          </radialGradient>
          <style>{`
            /* Light theme colors */
            .stop-color-light-body { stop-color: #E5E7EB; }
            .stop-color-light-body-mid { stop-color: #FFFFFF; }
            .stop-color-light-accent-start { stop-color: #DC2626; }
            .stop-color-light-accent-end { stop-color: #991B1B; }
            .fill-light-accent { fill: #B91C1C; }
            .fill-light-shadow { fill: #D1D5DB; }
            
            /* Dark theme colors */
            .dark .stop-color-dark-body-start { stop-color: #4B5563; }
            .dark .stop-color-dark-body-mid { stop-color: #D1D5DB; }
            .dark .stop-color-dark-body-end { stop-color: #1F2937; }
            .dark .stop-color-dark-accent-start { stop-color: #F87171; }
            .dark .stop-color-dark-accent-end { stop-color: #B91C1C; }
            .dark .fill-dark-accent { fill: #EF4444; }
            .dark .fill-dark-shadow { fill: #374151; }

            @keyframes flicker {
              0%, 100% { transform: scaleY(1) translateY(0); opacity: 1; }
              50% { transform: scaleY(0.95) translateY(5px); opacity: 0.8; }
            }
            .flame {
              animation: flicker 0.2s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Fins */}
        <path d="M 60 220 L 20 280 L 60 260 Z" className="fill-light-accent dark:fill-dark-accent" />
        <path d="M 140 220 L 180 280 L 140 260 Z" className="fill-light-accent dark:fill-dark-accent" />

        {/* Rocket Body */}
        <path d="M 60 50 C 60 50, 40 150, 60 260 L 140 260 C 160 150, 140 50, 140 50 Z" fill="url(#rocketBodyGradient)" />
        
        {/* Shadow on body from fins */}
        <path d="M60 220 C 65 200, 70 180, 60 260 L 70 260 C 80 180, 75 200, 70 220 Z" className="fill-light-shadow dark:fill-dark-shadow" opacity="0.5"/>
        <path d="M140 220 C 135 200, 130 180, 140 260 L 130 260 C 120 180, 125 200, 130 220 Z" className="fill-light-shadow dark:fill-dark-shadow" opacity="0.5"/>
        
        {/* Nose Cone */}
        <path d="M 60 50 C 60 30, 100 -20, 140 50 Z" fill="url(#coneGradient)" />

        {/* Window */}
        <circle cx="100" cy="100" r="25" fill="url(#windowGradient)" />
        <circle cx="100" cy="100" r="30" className="fill-light-accent dark:fill-dark-accent" fillOpacity="0.8" />
        <circle cx="100" cy="100" r="25" fill="url(#windowGradient)" />
        <path d="M 80 90 A 25 25 0 0 0 100 100" fill="white" opacity="0.3"/>

        {/* Flame */}
        <g className="flame">
            <path d="M 80 260 C 90 290, 110 290, 120 260 Q 100 310, 80 260 Z" fill="#FBBF24" />
            <path d="M 85 260 C 95 280, 105 280, 115 260 Q 100 295, 85 260 Z" fill="#F97316" />
        </g>
      </svg>
    </motion.div>
  );
};

export default Rocket3D;
