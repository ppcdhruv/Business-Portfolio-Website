import React from 'react';
// FIX: Removed 'Variants' type which was not found and caused errors.
import { motion } from 'framer-motion';

const CheckCircleIcon: React.FC<{ className?: string, isInView?: boolean }> = ({ className = 'w-5 h-5', isInView = false }) => {
  const circleVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
      transition: { duration: 0.5, ease: 'easeOut' as const, delay: 0.2 }
    }
  };
  
  const checkVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
      transition: { duration: 0.3, ease: 'easeOut' as const, delay: 0.7 }
    }
  };

  const fillVariants = {
    hidden: { fill: "rgba(34, 197, 94, 0)" },
    visible: {
        fill: "rgba(34, 197, 94, 0.1)",
        transition: { duration: 0.4, delay: 0.9 }
    }
  }

  return (
    // FIX: Refactored motion props to use variants to resolve TS errors.
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9 12.75L11.25 15 15 9.75"
        variants={checkVariants}
      />
      <motion.path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        variants={circleVariants}
        custom={isInView}
      />
       <motion.path 
        stroke="none"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        variants={fillVariants}
      />
    </motion.svg>
  );
};

export default CheckCircleIcon;