import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-stone-200/50 dark:hover:shadow-black/20 hover:bg-stone-50 dark:hover:bg-stone-800/60 hover:dark:border-stone-700/80 ${className}`}>
      {children}
    </div>
  );
};

export default BentoCard;