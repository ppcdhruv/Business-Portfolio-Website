import React from 'react';
import { motion } from 'framer-motion';

const PlusMinusIcon: React.FC<{ isOpen: boolean; className?: string }> = ({ isOpen, className }) => {
  // FIX: Created variants to handle animations and fix prop errors.
  const lineVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <motion.line 
        x1="5" y1="12" x2="19" y2="12" 
        strokeLinecap="round"
      />
      <motion.line
        x1="12" y1="5" x2="12" y2="19"
        strokeLinecap="round"
        variants={lineVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </svg>
  );
};

export default PlusMinusIcon;
