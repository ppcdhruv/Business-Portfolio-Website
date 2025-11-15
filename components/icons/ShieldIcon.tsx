import React from 'react';
import { motion } from 'framer-motion';

const ShieldIcon: React.FC<{ className?: string; animate?: boolean }> = ({ className = 'w-10 h-10', animate = false }) => {
  const shieldPath = "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z";
  const checkPath = "M9 12.75L11.25 15 15 9.75";

  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
    >
      <motion.path 
        d={shieldPath}
        className="stroke-stone-600 dark:stroke-stone-400"
        initial={{ fill: 'rgba(245, 158, 11, 0)' }}
        animate={animate ? { fill: 'rgba(245, 158, 11, 1)' } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d={checkPath}
        className="stroke-white"
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animate ? { pathLength: 1, opacity: 1 } : {}}
        transition={{
          pathLength: { delay: 0.5, duration: 0.4, ease: 'easeInOut' },
          opacity: { delay: 0.5, duration: 0.01 }
        }}
      />
    </svg>
  );
};

export default ShieldIcon;