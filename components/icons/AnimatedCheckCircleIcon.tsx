import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

const CheckCircleIcon: React.FC<{ className?: string, isInView?: boolean }> = ({ className = 'w-5 h-5', isInView = false }) => {
  // FIX: Explicitly type animation variants with `Variants` to resolve type inference issues with the `ease` property.
  const circleVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 }
    }
  };
  
  // FIX: Explicitly type animation variants with `Variants` to resolve type inference issues with the `ease` property.
  const checkVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.7 }
    }
  };

  const fillVariants: Variants = {
    hidden: { fill: "rgba(34, 197, 94, 0)" },
    visible: {
        fill: "rgba(34, 197, 94, 0.1)",
        transition: { duration: 0.4, delay: 0.9 }
    }
  }

  return (
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
